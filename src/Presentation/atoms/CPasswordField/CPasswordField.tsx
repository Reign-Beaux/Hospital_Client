import { CTextFieldProps } from "..";

export interface CPasswordField extends CTextFieldProps {}

export const CPasswordField = ({ keyFormik, formik, ...props }: CPasswordField) => {
  return (<>Hello</>
    // <CTextField
    //   keyFormik={keyFormik}
    //   formik={formik}
    //   type={showPassword ? "text" : "password"}
    //   InputProps={{
    //     endAdornment: (
    //       <InputAdornment position="end" style={{ marginBottom: "10px" }}>
    //         <IconButton
    //           aria-label="toggle password visibility"
    //           onClick={handleClickShowPassword}
    //           edge="end">
    //           {showPassword ? <IconVisibilityOff /> : <IconVisibilityOn />}
    //         </IconButton>
    //       </InputAdornment>
    //     ),
    //   }}
    //   {...props}
    // />
  );
};
