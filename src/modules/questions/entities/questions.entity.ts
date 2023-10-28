import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import Base from "../../../db/config/base.entity";
import Stages from "../../system/entities/stages.entity";
import Answers from "./answers.entity";

@Entity("questions")
export default class Questions extends Base {
  @Column({ type: "text" })
  question: string;

  @Column({ type: "text" })
  @Index()
  input_type: string;

  @Column({ type: "jsonb", nullable: true })
  options: any;

  @ManyToOne(() => Stages, (sta) => sta.question)
  @JoinColumn()
  stage?: Stages;

  @OneToMany(() => Answers, (ans) => ans.question)
  answer: Answers[];
}
