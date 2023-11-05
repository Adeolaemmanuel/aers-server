import { Column, Entity, Index, ManyToOne, OneToMany } from "typeorm";
import Base from "../../../db/config/base.entity";
import Stages from "../../system/entities/stages.entity";
import Answers from "./answers.entity";
import Users from "../../../modules/user/entities/user.entity";

@Entity("questions")
export default class Questions extends Base {
  @Column({ type: "text" })
  question: string;

  @Column({ type: "text" })
  @Index()
  input_type: string;

  @Column({ type: "jsonb", nullable: true })
  options: any;

  @ManyToOne(() => Stages, (sta) => sta.question, { onDelete: "CASCADE" })
  stage?: Stages;

  @OneToMany(() => Answers, (ans) => ans.question, {
    cascade: true,
    onDelete: "CASCADE",
  })
  answer: Answers[];

  @ManyToOne(() => Users, (user) => user.questions, { onDelete: "CASCADE" })
  user: Users;
}
