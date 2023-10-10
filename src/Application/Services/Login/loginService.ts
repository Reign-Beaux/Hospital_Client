import { useLoginRepository } from "@/Infraestructure/Repositories";
import { useFormSettings } from "./Hooks"
import { LoginModel } from "@/Domain/Models";

export const useLoginService = () => {
  const { sendCredentials } = useLoginRepository();

  const handleSubmit = async (values: LoginModel) => {
    const response = await sendCredentials(values);
  }

  const { formik } = useFormSettings({handleSubmit});
}
