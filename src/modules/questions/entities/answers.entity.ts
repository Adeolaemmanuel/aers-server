import { Column, Entity, ManyToOne } from "typeorm";
import Questions from "./questions.entity";
import Base from "../../../db/config/base.entity";

@Entity("answers")
export default class Answers extends Base {
  @Column({ type: "text" })
  user_id: string;

  @Column({ type: "text", nullable: true })
  value: string;

  @Column({ type: "jsonb", nullable: true })
  values: any;

  @ManyToOne(() => Questions, (que) => que.question)
  question: Questions;
}
