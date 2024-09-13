export type UserLoginProps = {
  cpf_cnpj: string;
  password: string;
};
export type UsersWhithIDsOfFKs = {
  id?: number;
  cpf_cnpj?: string;
  name?: string;
  celphone?: string;
  email?: string;
  password?: string;
  userType?: string;
  farm_id?: number;
};

export type UserData = {
  token?: string;
  info?: UsersWhithIDsOfFKs;
};
