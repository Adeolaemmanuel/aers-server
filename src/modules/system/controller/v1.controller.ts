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

    payload.slug = slugify(payload.name, { lower: true, trim: true });

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

export async function deleteStage(req: Request, res: Response) {
  try {
    const slug = req.body.slug;

    const stage = await stageRepo.findOne({ where: { slug } });

    const isDeleted = await stageRepo.remove(stage);

    BaseController.ok(res, {
      data: isDeleted,
      message: "Stage deleted successfully",
      status: true,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function updateStage(req: Request, res: Response) {
  const payload = req.body as {
    slug: string;
    name: string;
  };

  try {
    const stage = await stageRepo.findOne({ where: { slug: payload.slug } });

    payload.slug = slugify(payload.name, { lower: true, trim: true });

    stage.name = payload.name;
    stage.slug = payload.slug;

    const saved = await stageRepo.save(stage);

    BaseController.ok(res, {
      data: saved,
      message: "Stage updated successfully",
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
      order: { created_at: "DESC" },
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

    payload.slug = slugify(payload.name, { lower: true, trim: true });

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

export async function deleteDesignation(req: Request, res: Response) {
  try {
    const slug = req.body.slug;

    const designation = await designationRepo.findOne({ where: { slug } });

    const isDeleted = await designationRepo.remove(designation);

    BaseController.ok(res, {
      data: isDeleted,
      message: "Designation deleted successfully",
      status: true,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function updateDesignation(req: Request, res: Response) {
  const payload = req.body as {
    slug: string;
    name: string;
  };

  try {
    const designation = await designationRepo.findOne({
      where: { slug: payload.slug },
    });

    payload.slug = slugify(payload.name, { lower: true, trim: true });

    designation.name = payload.name;
    designation.slug = payload.slug;

    const saved = await designationRepo.save(designation);

    BaseController.ok(res, {
      data: saved,
      message: "Designation updated successfully",
      status: true,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getAllDesignation(req: Request, res: Response) {
  try {
    const designation = await designationRepo.find({
      order: { created_at: "DESC" },
    });
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

    stats.user = await userRepo.count();
    stats.questions = await question.count();
    stats.stages = await stageRepo.count();
    stats.designation = await designationRepo.count();

    BaseController.ok(res, {
      data: stats,
      message: "Dashboard fetched successfully",
      status: true,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}
