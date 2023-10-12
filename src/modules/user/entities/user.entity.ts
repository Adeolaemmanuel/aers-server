import {
  Column,
  Entity,
  Generated,
  Index,
  JoinColumn,
  OneToOne,
} from "typeorm";
import Base from "../../../db/config/base.entity.js";
import Designation from "../../system/entities/designation.entity.js";

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

  @OneToOne(() => Designation)
  @JoinColumn()
  designation?: Designation;

  @Column({ type: "boolean" })
  is_contactable?: boolean;
}
