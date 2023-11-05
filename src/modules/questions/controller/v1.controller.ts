import { Request, Response } from "express";
import Questions from "../entities/questions.entity";
import Stages from "../../system/entities/stages.entity";
import { BaseController } from "../../../utils/baseController";
import Answers from "../entities/answers.entity";
import Users from "../../user/entities/user.entity";

const questionRepo = Questions;
const stagesRepo = Stages;
const answerRepo = Answers;
const userRepo = Users;

export async function createQuestion(req: Request, res: Response) {
  const payload = req.body as QuestionsDto;

  const stage = await stagesRepo.findOne({
    where: { slug: payload.stage_slug },
  });

  if (!stage) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to getting stage",
      status: false,
    });
  }

  const question = await questionRepo.insert({ stage, ...payload });
  if (!question) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to inserting question",
      status: false,
    });
  }

  BaseController.ok(res, {
    message: "Question created successfully",
    status: true,
    data: question.raw,
  });
}

export async function getQuestionsBySlug(req: Request, res: Response) {
  const slug = req.params.slug as string;

  const resp = await questionRepo.find({
    where: { stage: { slug: slug } },
    order: { created_at: "DESC" },
    relations: {
      stage: true,
    },
  });

  if (!resp) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to getting question",
      status: false,
    });
  }

  BaseController.ok(res, {
    message: "Question fetched successfully",
    status: true,
    data: resp,
  });
}

export async function insertAnswers(req: Request, res: Response) {
  const payload = req.body as InsertAnswers;

  const email = req.headers.authorization;

  const answers = await Promise.all(
    Object.keys(payload).map(async (key) => {
      if (Array.isArray(payload[key])) {
        return {
          question: await questionRepo.findOne({
            where: { id: parseInt(key) },
          }),
          values: payload[key],
          users: await userRepo.findOne({ where: { email } }),
        };
      } else {
        return {
          question: await questionRepo.findOne({
            where: { id: parseInt(key) },
          }),
          value: payload[key],
          users: await userRepo.findOne({ where: { email } }),
        };
      }
    })
  );

  const answer = await answerRepo.create(answers);

  const saved = await answerRepo.insert(answer);

  if (!saved) {
    return BaseController.clientError(res, {
      message: "An error occurred while trying to getting answer",
      status: false,
    });
  }

  BaseController.ok(res, {
    message: "Answer was submitted successfully",
    status: true,
    data: saved,
  });
}

export async function updateQuestion(req: Request, res: Response) {
  try {
    const payload = req.body as UpdateQuestionDto;

    const question = await questionRepo.findOne({ where: { id: payload.id } });

    question.input_type = payload.input_type;
    question.question = payload.question;
    question.options = payload.options;
    question.stage = await stagesRepo.findOne({
      where: { slug: payload.stage_slug },
    });

    const updated = await questionRepo.save(question);

    BaseController.ok(res, {
      message: "Question updated successfully",
      status: true,
      data: updated,
    });
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getAllQuestion(req: Request, res: Response) {
  try {
    const question = await questionRepo.find({ relations: { stage: true } });

    BaseController.ok(res, { data: question, status: true });
  } catch (error) {
    BaseController.fail(res, error);
  }
}

export async function getAllAnswers(req: Request, res: Response) {
  const answers = await answerRepo.findAndCount({
    relations: { question: true, user: true },
  });

  BaseController.ok(res, {
    data: answers,
    status: true,
    message: "Answers fetched successfully",
  });
}

export async function deleteQuestion(req: Request, res: Response) {
  const deleteQuestion = await questionRepo.findOne({
    where: { id: req.body.id },
  });

  const deleted = await questionRepo.remove(deleteQuestion);

  BaseController.ok(res, {
    data: deleted,
    status: true,
    message: "Question deleted successfully",
  });
}
