import { Column, Entity, Generated, Index } from "typeorm";
import Base from "../../../db/config/base.entity";

@Entity('designation')
export default class Designation extends Base {
  @Column({ type: "text" })
  name?: string;

  @Column({ type: "text" })
  slug?: string;
}
