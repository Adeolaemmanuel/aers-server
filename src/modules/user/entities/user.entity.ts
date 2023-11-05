import {
  Column,
  Entity,
  Generated,
  Index,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Base from "../../../db/config/base.entity";
import Designation from "../../system/entities/designation.entity";
import Questions from "../../../modules/questions/entities/questions.entity";

@Entity("users")
export default class Users extends Base {
  @Index("user_id")
  @Column({ type: "uuid", unique: true })
  @Generated("uuid")
  user_id?: string;

  @Index("email")
  @Column({ type: "text", unique: true })
  email?: string;

  @Column({ type: "text" })
  last_name?: string;

  @Column({ type: "text" })
  first_name?: string;

  @Index("phone_number")
  @Column({ type: "text", unique: true })
  phone_number?: string;

  @ManyToOne(() => Designation, (desg) => desg.users)
  designation?: Designation;

  @OneToMany(() => Questions, (que) => que.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  questions: Questions[];

  @Column({ type: "boolean" })
  is_contactable?: boolean;

  @Column({ type: "boolean", nullable: true, default: true })
  active: boolean;
}
