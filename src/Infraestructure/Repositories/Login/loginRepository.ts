import { Users } from "@/Application/Statics";
import { LoginModel } from "@/Domain/Models";
import { useAxios } from "@/Infraestructure/Hooks";

export const useLoginRepository = () => {
  const { post } = useAxios();

  const sendCredentials = async (values: LoginModel) => {
    const response = await post<string, LoginModel>(Users.LOGIN, values);
    return response;
  };

  return { sendCredentials };
};
