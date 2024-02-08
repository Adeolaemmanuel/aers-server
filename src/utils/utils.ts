import { Request, Response } from "express";
import bcrypt from "bcrypt";
import moment from "moment";
import crypto from "crypto";
import AdminUser from "modules/admin/entities/admin.entity";
import Users from "modules/user/entities/user.entity";
import { BaseController } from "./baseController";
import { ADMIN_TYPES } from "./constants";
import { GenerateAuthToken } from "@types";

export const customValidator = (payload: any, req: Request) => {
	const data = { ...payload, ...req.body };
	return Object.keys(data).filter((key) => {
		let value = data[key];
		const typeOf = typeof value;

		if (!value && typeOf !== "boolean") {
			return key;
		}
	})[0];
};

export function handleError(valid: string, res: Response) {
	return BaseController.clientError(res, {
		error: `${valid.replace("_", " ")} is required`,
		key: valid,
	});
}

export const authenticate = async (
	user: AdminUser | Users,
	type: ADMIN_TYPES,
	key: string
) => {
	switch (type) {
		case "admin":
			const admin = user as AdminUser;

			const compare = await bcrypt.compare(key, admin.password);

			if (!compare) {
				return {
					status: false,
					message: "Email/Password is incorrect",
				};
			}

			return {
				status: true,
				message: "Logged in successfully",
				data: generateAuthToken({
					email: user.email,
					user_id: user.user_id,
					phone_number: user.phone_number,
					admin_type: admin.user_type,
					password: admin.password,
				}),
			};
		default:
			break;
	}
};

export function expiresIn(minutes: any) {
	const now = new Date().getTime();
	return new Date(now + minutes * 60000);
}

/**
 * checks if token is expired
 * @param token
 * @returns boolean
 */
export function isTokenExpired(token: string) {
	const { time } = this.decrypt(token);
	return moment.utc(parseInt(time)).diff(moment()) < 0;
}

/**
 * encrypt text
 * @param text
 * @returns
 */
export function encrypt(text: string) {
	const iv = crypto.randomBytes(16);
	const key = crypto.randomBytes(32);
	let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return (
		iv.toString("hex") +
		"." +
		encrypted.toString("hex") +
		"." +
		key.toString("hex")
	);
}

/**
 * decrypt user auth token
 * @param text
 * @returns user_id, time, email, password
 */
export function decrypt(text: string) {
	const data = text.split(".");
	const iv = Buffer.from(data[0], "hex");
	const key = Buffer.from(data[2], "hex");
	const encryptedText = Buffer.from(data[1], "hex");
	let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	const [user_id, time, email, password, phone_number] = decrypted
		.toString()
		.split("::");
	return { user_id, time, email, password, phone_number };
}

/**
 * generate user authentication token
 * @param payload
 * @param expires_in
 * @returns string
 */
export function generateAuthToken(
	payload: GenerateAuthToken,
	expires_in: number = 24 * 60
) {
	const { email, password, user_id } = payload;
	const expires = expiresIn(expires_in);
	let token = user_id + "::" + expires.getTime() + "::" + email;
	if (password) {
		token = token + "::" + password;
	}
	const encryptedToken = encrypt(token);
	return encryptedToken;
}
