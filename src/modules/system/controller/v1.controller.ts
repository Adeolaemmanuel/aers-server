import { Request, Response } from "express";
import Designation from "../entities/designation.entity";
import Stages from "../entities/stages.entity";
import { BaseController } from "../../../utils/baseController";
import { createStageDto } from "../dto/stage.dto";
import { createDesignationDto } from "../dto/designation.dto";
import slugify from "slugify";
import Users from "../../../modules/user/entities/user.entity";
import Questions from "../../../modules/questions/entities/questions.entity";

const stageRepo = Stages;
const designationRepo = Designation;
const userRepo = Users;
const question = Questions;

export async function createStage(req: Request, res: Response) {
  try {
    const payload = req.body as createStageDto;

    payload.slug = slugify(payload.name);

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
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getAllStage(req: Request, res: Response) {
  try {
    const stages = await stageRepo.find({
      relations: {
        question: true,
      },
    });

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
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function createDesignation(req: Request, res: Response) {
  try {
    const payload = req.body as createDesignationDto;

    payload.slug = slugify(payload.name);

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
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getAllDesignation(req: Request, res: Response) {
  try {
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
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getSystemStats(req: Request, res: Response) {
  try {
    const stats = {
      user: 0,
      questions: 0,
      stages: 0,
      designation: 0,
    };

    stats.user = await userRepo.findAndCount()[1];
    stats.questions = await question.findAndCount()[1];
    stats.stages = await stageRepo.findAndCount()[1];
    stats.designation = await designationRepo.findAndCount()[1];

    BaseController.ok(res, {
      data: stats,
      message: "Dashboard fetched successfully",
      status: true,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}
