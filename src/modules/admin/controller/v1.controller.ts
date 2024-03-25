import { Request, Response } from "express";
import { env } from "process";
import { BaseController } from "utils/baseController";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "utils/settings";

export default async function AdminLoginController(
	res: Response,
	req: Request
) {
	const { email, password } = req.body;

	if (email !== ADMIN_EMAIL && password !== ADMIN_PASSWORD) {
		return BaseController.unauthorized(res, {
			message: "Invalid admin details",
			status: false,
		});
	}

    BaseController.ok(res, {
        message: "Successful",
        status: true,
    });
}
