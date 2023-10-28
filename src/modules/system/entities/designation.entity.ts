import { Column, Entity, OneToMany } from "typeorm";
import Base from "../../../db/config/base.entity";
import Users from "../../../modules/user/entities/user.entity";

@Entity("designation")
export default class Designation extends Base {
  @Column({ type: "text" })
  name?: string;

  @Column({ type: "text" })
  slug?: string;

  @OneToMany(() => Users, (user) => user.designation)
  users: Users;
}
