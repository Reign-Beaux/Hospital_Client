import { useState } from "react";
import { CTextField, CTextFieldProps, IconVisibilityOff, IconVisibilityOn } from "..";
import { InputAdornment, IconButton } from "@mui/material";

export interface CPasswordField extends CTextFieldProps {}

export const CPasswordField = ({ keyFormik, formik, ...props }: CPasswordField) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CTextField
      keyFormik={keyFormik}
      formik={formik}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" style={{ marginBottom: "10px" }}>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end">
              {showPassword ? <IconVisibilityOff /> : <IconVisibilityOn />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
