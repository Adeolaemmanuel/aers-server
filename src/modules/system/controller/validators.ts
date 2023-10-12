import { NextFunction, Request, Response } from "express";
import { customValidator } from "../../../utils/utils";
import { createStageDto } from "../dto/stage.dto";
import { createDesignationDto } from "../dto/designation.dto";
import { BaseController } from "../../../utils/baseController";

export const createStageValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: Partial<createStageDto> = {
    name: undefined,
    slug: undefined,
  };

  const valid = customValidator(payload, req);

  if (valid?.length > 0) {
    return handleError(valid, res);
  }

  next();
};

export const createDesignationValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: Partial<createDesignationDto> = {
    name: undefined,
    slug: undefined,
  };

  const valid = customValidator(payload, req);

  if (valid?.length > 0) {
    return handleError(valid, res);
  }

  next();
};

export const createUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: Partial<CreateUserDto> = {
    first_name: undefined,
    last_name: undefined,
    email: undefined,
    designation_id: undefined,
    phone_number: undefined,
  };

  const valid = customValidator(payload, req);

  if (valid?.length > 0) {
    return handleError(valid, res);
  }

  next();
};

function handleError(valid: string, res: Response) {
  return BaseController.clientError(res, {
    error: `${valid.replace("_", " ")} is required`,
    key: valid,
  });
}
