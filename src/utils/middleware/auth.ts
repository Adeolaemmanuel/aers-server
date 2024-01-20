import { NextFunction, Request, Response } from "express";
import jsn from "jsonwebtoken";
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
	req: Request,
	res: Response,
	next: NextFunction
) {
	const token = tokenExist(req);

	if (!token.status) {
		return BaseController.unauthorized(res, { ...token });
	}

	const user = jsn.verify(token.data as string, "");

	console.log(user);
}
