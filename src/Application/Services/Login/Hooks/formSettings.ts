import { LoginModel, loginEmpty } from "@/Domain/Models";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface useFormSettingsProps {
  handleSendCredentials: (values: LoginModel) => Promise<void>;
}

interface FormValues extends LoginModel {}

export const useFormSettings = ({ handleSendCredentials }: useFormSettingsProps) => {
  const initialValues: FormValues = { ...loginEmpty };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSendCredentials,
  });

  return { formik };
};
