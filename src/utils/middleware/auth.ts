import { IRequest } from "@types";
import { NextFunction, Request, Response } from "express";
import jsn from "jsonwebtoken";
import AdminUsers from "modules/admin/entities/admin.entity";
import { BaseController } from "utils/baseController";

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

	jsn.verify(token.data as string, "shhhhh", async function (err, data) {
		if (err) {
			BaseController.clientError(res, { ...err, status: false });
		} else {
			const decoded: any = data;
			const user = await AdminUsers.findOne({
				where: { email: decoded.email },
			});

			req.admin = user;
			next();
		}
	});
}
