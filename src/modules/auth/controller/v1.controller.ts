import { Request, Response } from "express";
import AdminUsers from "modules/admin/entities/admin.entity";
import { BaseController } from "utils/baseController";
import { authenticate } from "utils/utils";

const adminRepo = AdminUsers;

export async function adminLogin(req: Request, res: Response) {
	const payload = req.body as { email: string; password: string };

	const admin = await adminRepo.findOne({ where: { email: payload.email } });

	if (!admin) {
		BaseController.unauthorized(res, {
			status: false,
			message: "Account not found",
			error: "Invalid account",
		});
	}

	const auth = await authenticate(admin, "admin", payload.password);

	if (!auth.status) {
		return BaseController.unauthorized(res, { ...auth });
	}

	BaseController.ok(res, { ...auth });
}
