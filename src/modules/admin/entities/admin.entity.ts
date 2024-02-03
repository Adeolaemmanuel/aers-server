import Base from "db/config/base.entity";
import { Column, Entity, Generated, Index } from "typeorm";
import { ADMIN_TYPES } from "utils/constants";

@Entity("admin_user")
export default class AdminUsers extends Base {
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

	@Column({ type: "text" })
	password?: string;

	@Column({ type: "enum", default: ADMIN_TYPES.ADMIN })
	user_type: ADMIN_TYPES;
}
