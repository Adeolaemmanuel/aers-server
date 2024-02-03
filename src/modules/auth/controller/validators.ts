import { NextFunction, Request, Response } from "express";
import { ADMIN_TYPES } from "utils/constants";
import { customValidator, handleError } from "utils/utils";

export const createStageValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const payload: Partial<{
		email: string;
		password: string;
		first_name: string;
		last_name: string;
		admin_type: ADMIN_TYPES;
	}> = {
		admin_type: undefined,
		email: undefined,
		first_name: undefined,
		last_name: undefined,
		password: undefined,
	};

	const valid = customValidator(payload, req);

	if (valid?.length > 0) {
		return handleError(valid, res);
	}

	next();
};
