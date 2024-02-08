import { Request } from "express";
import AdminUsers from "modules/admin/entities/admin.entity";
import Users from "modules/user/entities/user.entity";

export interface IRequest extends Request {
	user: Users;
	admin: AdminUsers;
}
