import { IRequest } from "utils/request";
import { NextFunction, Request, Response } from "express";
import AdminUsers from "modules/admin/entities/admin.entity";
import { BaseController } from "utils/baseController";
import { decrypt, isTokenExpired } from "utils/utils";

const tokenExist = (req: Request) => {
	const token = req.headers.authorization || req.headers.Authorization;

	if (!token) {
		return {
			status: false,
			message: "Token is missing",
		};
	}

	return {
		status: true,
		data: token,
	};
};

export async function authMiddleWare(
	req: IRequest,
	res: Response,
	next: NextFunction
) {
	const token = tokenExist(req);

	if (!token.status) {
		return BaseController.unauthorized(res, { ...token });
	}

	const expired = isTokenExpired(token.data as string);

	if (expired) {
		return BaseController.clientError(res, {
			error: "",
			message: "Token expired",
			status: false,
		});
	}

	const { user_id, email } = decrypt(token.data as string);

	if (!user_id) {
		return BaseController.clientError(res, {
			error: "",
			message: "Invalid token data",
			status: false,
		});
	} else {
		const user = await AdminUsers.findOne({
			where: { user_id, email },
		});

		if (!user) {
			return BaseController.clientError(res, {
				error: "",
				message: "User does not exist",
				status: false,
			});
		}

		req.admin = user;
		next();
	}
}
