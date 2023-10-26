import { Request, Response } from "express";
import Designation from "../../system/entities/designation.entity";
import Users from "../entities/user.entity";
import { BaseController } from "../../../utils/baseController";

const designationRepo = Designation;
const userRepo = Users;

export async function createUser(req: Request, res: Response) {
  const payload = req.body as CreateUserDto;
  const designation = await designationRepo.findOneBy({
    id: payload.designation_id,
  });
  payload.email = payload.email.toLowerCase();
  const user = await userRepo.insert({ ...payload, designation });
  if (!user) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to insert designation",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: user.raw,
    message: "User fetched successfully",
    status: true,
  });
}

export async function updateUser(req: Request, res: Response) {
  const payload = req.body as UpdateUserDto;

  const user = await userRepo.findOne({
    where: [{ email: payload.email }, { phone_number: payload.phone_number }],
  });
  if (!user) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to get user",
      status: false,
    });
  }

  user.first_name = payload.first_name;
  user.last_name = payload.last_name;
  user.phone_number = payload.phone_number;
  user.is_contactable = payload.is_contactable;
  user.designation = await designationRepo.findOne({
    where: { id: payload.designation_id },
  });

  const updated = await userRepo.save(user);

  BaseController.ok(res, {
    data: updated,
    message: "User updated successfully",
    status: true,
  });
}

export async function getUser(req: Request, res: Response) {
  const key = req.params.id as string;
  console.log(key);
  

  const user = await userRepo.findOne({
    where: [{ email: key?.toLowerCase() }, { phone_number: key }],
  });
  if (!user) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to get user",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: user,
    message: "User fetched successfully",
    status: true,
  });
}
