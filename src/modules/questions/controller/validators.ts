import { NextFunction, Request, Response } from "express";
import { BaseController } from "../../../utils/baseController.js";
import { customValidator } from "../../../utils/utils.js";

export const createQuestionValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: Partial<QuestionsDto> = {
    input_type: undefined,
    question: undefined,
    stage_id: undefined,
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
