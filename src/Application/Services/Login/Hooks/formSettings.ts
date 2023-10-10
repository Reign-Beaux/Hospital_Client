import { LoginModel, loginEmpty } from "@/Domain/Models";
import { useFormik } from "formik";
import * as Yup from "yup";

export interface useFormSettingsProps {
  handleSubmit: (values: LoginModel) => Promise<void>;
}

interface FormValues extends LoginModel {}

export const useFormSettings = ({ handleSubmit }: useFormSettingsProps) => {
  const initialValues: FormValues = { ...loginEmpty };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return { formik };
};
