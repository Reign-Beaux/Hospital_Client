import { useLoginRepository } from "@/Infraestructure/Repositories";
import { useFormSettings } from "./Hooks";
import { LoginModel } from "@/Domain/Models";

export const useLoginService = () => {
  const { sendCredentials } = useLoginRepository();

  const handleSubmit = async (values: LoginModel) => {
    const response = await sendCredentials(values);
    console.log(response);
  };

  const { formik } = useFormSettings({ handleSubmit });

  return { formik };
};
