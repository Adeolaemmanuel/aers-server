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

  const stage = await stagesRepo.findOne({ where: { id: payload.stage_id } });
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

export async function getAllQuestions(req: Request, res: Response) {
  const slug = req.params.slug as string;

  const resp = await questionRepo.find({
    where: { stage: { slug: slug } },
    order: { id: "ASC" },
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
    message: "Question created successfully",
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
          user_id: (await userRepo.findOne({ where: { email } })).user_id,
        };
      } else {
        return {
          question: await questionRepo.findOne({
            where: { id: parseInt(key) },
          }),
          value: payload[key],
          user_id: (await userRepo.findOne({ where: { email } })).user_id,
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
  const payload = req.body as UpdateQuestionDto;
  console.log(payload);

  const question = await questionRepo.findOne({ where: { id: payload.id } });

  console.log(question);

  // question.input_type = payload.input_type;

  // const updated = await questionRepo.save(question);

  // BaseController.ok(res, {
  //   message: "Question updated successfully",
  //   status: true,
  //   DataView: updated,
  // });
}
