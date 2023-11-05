import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import Questions from "./questions.entity";
import Base from "../../../db/config/base.entity";
import Users from "../../../modules/user/entities/user.entity";

@Entity("answers")
export default class Answers extends Base {
  @Column({ type: "text", nullable: true })
  value: string;

  @Column({ type: "jsonb", nullable: true })
  values: any;

  @ManyToOne(() => Questions, (que) => que.answer, {
    onDelete: "CASCADE",
  })
  question: Questions[];

  @ManyToOne(() => Users, (user) => user.answers, {
    onDelete: "CASCADE",
  })
  user: Users[];
}
