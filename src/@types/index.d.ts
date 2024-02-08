import { ADMIN_TYPES } from "utils/constants";

type GenerateAuthToken = {
	email: string;
	user_id: string;
	admin_type: ADMIN_TYPES;
	phone_number: string;
	password: string
};
