import { IconClose, IconVisibilityOff, IconVisibilityOn } from "@/Presentation/atoms";
import { useRef, useState } from "react";
import "./styles.css";

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  clearable?: boolean;
  formik?: any;
  inputObject?: any;
  password?: boolean;
  setValue?: Function;
  inputName: string;
  inputText: string;
}

type TypeInput = "text" | "password";

export const Input = ({
  clearable,
  formik,
  inputObject,
  password,
  inputName,
  inputText,
  setValue,
  ...props
}: InputProps) => {
  const [typeInput, setTypeInput] = useState<TypeInput>(!!password ? "password" : "text");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleToggleShowPassword = () => {
    setTypeInput(!showPassword ? "text" : "password");
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!!formik) {
      formik.handleChange(e);
    } else {
      setValue!((prevUser: any) => ({
        ...prevUser,
        [inputName!]: e.target.value,
      }));
    }
  };

  const handleClearClick = () => {
    if (!!formik) {
      formik.setFieldValue(inputName, "");
    } else {
      setValue!((prevUser: any) => ({
        ...prevUser,
        [inputName!]: "",
      }));
    }
  };

  return (
    <div className="form__group">
      <input
        id={inputName}
        type={typeInput}
        className="form__field"
        value={!!formik ? formik.values[inputName] : inputObject![inputName]}
        placeholder={inputText}
        onChange={handleChange}
        {...props}
      />
      {password ? (
        <button className="clear-icon" onClick={handleToggleShowPassword}>
          {showPassword ? <IconVisibilityOff /> : <IconVisibilityOn />}
        </button>
      ) : (
        <button
          className="clear-icon"
          onClick={handleClearClick}
          style={
            !(clearable && (!!formik ? !!formik.values[inputName] : !!inputObject[inputName]))
              ? { display: "none" }
              : {}
          }>
          <IconClose />
        </button>
      )}
      <label htmlFor={inputText} className="form__label">
        {inputText}
      </label>
    </div>
  );
};
