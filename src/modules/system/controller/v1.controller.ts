import { Request, Response } from "express";
import Designation from "../entities/designation.entity";
import Stages from "../entities/stages.entity";
import { BaseController } from "../../../utils/baseController";
import { createStageDto } from "../dto/stage.dto";
import { createDesignationDto } from "../dto/designation.dto";

const stageRepo = Stages;
const designationRepo = Designation;

export async function createStage(req: Request, res: Response) {
  const payload = req.body as createStageDto;

  const stages = await stageRepo.insert({ ...payload });
  if (!stages) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to insert stages",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: stages.raw,
    message: "Stages inserted successfully",
    status: true,
  });
}

export async function getAllStage(req: Request, res: Response) {
  const stages = await stageRepo.find();
  if (!stages) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to get stages",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: stages,
    message: "Stages fetched successfully",
    status: true,
  });
}

export async function createDesignation(req: Request, res: Response) {
  const payload = req.body as createDesignationDto;

  const designation = await designationRepo.insert({ ...payload });
  if (!designation) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to insert designation",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: designation.raw,
    message: "Designation inserted successfully",
    status: true,
  });
}

export async function getAllDesignation(req: Request, res: Response) {
  const designation = await designationRepo.find();
  if (!designation) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to get designation",
      status: false,
    });
  }

  BaseController.ok(res, {
    data: designation,
    message: "Designation fetched successfully",
    status: true,
  });
}
