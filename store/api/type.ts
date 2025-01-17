export interface GetUserByIdResponse {
  status: number;
  message: {
    email: "string@string.com";
    phone_number: "string";
    user_id: 294;
    name: string;
    reg_date: Date;
    user_city: string;
  };
}

export interface LoginUserPayload {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  status: number;
  message: string;
}

export interface RegisterUserPayload {
  email: string;
  password: string;
  phone_number: string;
  name: string;
  user_city: string;
}

export interface RegisterUserResponse {
  status: number;
  message: string;
}
