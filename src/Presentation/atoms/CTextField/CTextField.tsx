import { StandardTextFieldProps } from "@mui/material";

export interface CTextFieldProps extends StandardTextFieldProps {
  keyFormik: string;
  formik: any;
}

export const CTextField = ({ keyFormik, formik, ...props }: CTextFieldProps) => {
  return (<>Hello</>
    // <TextField
    //   id={keyFormik}
    //   variant="standard"
    //   fullWidth
    //   margin="normal"
    //   value={formik.values[keyFormik]}
    //   onChange={formik.handleChange}
    //   onBlur={formik.handleBlur}
    //   error={formik.touched[keyFormik] && Boolean(formik.errors[keyFormik])}
    //   helperText={formik.touched[keyFormik] && formik.errors[keyFormik]}
    //   {...props}
    // />
  );
};
