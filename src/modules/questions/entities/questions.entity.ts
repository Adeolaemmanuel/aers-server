import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import Base from "../../../db/config/base.entity";
import Stages from "../../system/entities/stages.entity";
import Answers from "./answers.entity";

@Entity("questions")
export default class Questions extends Base {
  @Column({ type: "text" })
  question: string;

  @Column({ type: "text" })
  input_type: string;

  @Column({ type: "jsonb", nullable: true })
  options: any;

  @ManyToOne(() => Stages, (sta) => sta.question)
  stage?: Stages;

  @OneToMany(() => Answers, (ans) => ans.question)
  answer: Answers[];
}
