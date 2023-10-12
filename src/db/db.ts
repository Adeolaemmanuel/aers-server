import { DataSource } from "typeorm";
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_URL,
  DB_USERNAME,
} from "../utils/settings";
import Stages from "../modules/system/entities/stages.entity";
import Designation from "../modules/system/entities/designation.entity";
import Users from "../modules/user/entities/user.entity";
import Questions from "../modules/questions/entities/questions.entity";
import Answers from "../modules/questions/entities/answers.entity";

export const dataSource = new DataSource({
  type: "postgres",
  logging: process.env.ENV === "dev" ? true : false,
  database: DB_NAME,
  username: DB_USERNAME,
  host: DB_HOST,
  port: parseInt(DB_PORT!),
  password: DB_PASSWORD,
  url: DB_URL,
  synchronize: false,
  logger: "debug",
  entities: [Stages, Designation, Users, Questions, Answers],
  migrations: [__dirname + "/migrations/*{.ts,.js}"],
});
