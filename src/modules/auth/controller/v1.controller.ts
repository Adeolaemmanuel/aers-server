import { Request, Response } from "express";
import AdminUsers from "modules/admin/entities/admin.entity";
import { BaseController } from "utils/baseController";
import { authenticate } from "utils/utils";
import bcrypt from "bcrypt";
import { ADMIN_TYPES } from "utils/constants";

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

	const auth = await authenticate(admin, admin.user_type, payload.password);

	if (!auth.status) {
		return BaseController.unauthorized(res, { ...auth });
	}

	BaseController.ok(res, { ...auth });
}

export async function adminRegister(req: Request, res: Response) {
	const payload = req.body as {
		email: string;
		password: string;
		first_name: string;
		last_name: string;
		admin_type: ADMIN_TYPES;
	};

	const salt = await bcrypt.genSalt(10);
	payload.password = await bcrypt.hash(payload.password, salt);

	const admin = await adminRepo.insert({
		...payload,
	});

	if (!admin.raw) {
		BaseController.clientError(res, {
			status: false,
			message: "An error occurred",
			error: admin,
		});
	}

	BaseController.ok(res, {
		data: admin.raw,
		status: true,
		message: "Admin added successfully",
	});
}
