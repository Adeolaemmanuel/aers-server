type CreateUserDto = {
  first_name: string;
  last_name: string;
  phone_number: string;
  designation_id: number;
  email: string;
  is_contactable: boolean;
};

type UpdateUserDto = CreateUserDto & {};
