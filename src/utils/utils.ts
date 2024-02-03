import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jsn from "jsonwebtoken";
import AdminUser from "modules/admin/entities/admin.entity";
import Users from "modules/user/entities/user.entity";
import { BaseController } from "./baseController";
import { ADMIN_TYPES } from "./constants";

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
				data: jsn.sign(
					{
						email: user.email,
						user_id: user.user_id,
						phone_number: user.phone_number,
						admin_type: "",
					},
					user.user_id,
					{ algorithm: "HS256", expiresIn: "5h" }
				),
			};
		default:
			break;
	}
};
