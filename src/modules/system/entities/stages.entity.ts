import { Column, Entity, Generated, Index, OneToMany } from "typeorm";
import Base from "../../../db/config/base.entity";
import Questions from "../../questions/entities/questions.entity";

@Entity("stages")
export default class Stages extends Base {
  @Column({ type: "text" })
  name?: string;

  @Column({ type: "text" })
  slug?: string;

  @OneToMany(() => Questions, (que) => que.question)
  question?: Questions;
}
