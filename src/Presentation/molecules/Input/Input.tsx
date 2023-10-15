import { IconClose, IconVisibilityOff, IconVisibilityOn } from "@/Presentation/atoms";
import { useState } from "react";
import "./styles.css";

export interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  clearable?: boolean;
  inputName?: string;
  password?: boolean;
  inputObject: any;
  inputText: string;
  setValue: Function;
}

type TypeInput = "text" | "password";

export const Input = ({
  clearable,
  inputName,
  password,
  inputObject,
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

  const handleChange = (value: string) => {
    setValue((prevUser: any) => ({
      ...prevUser,
      [inputName!]: value,
    }));
  };

  const handleClearClick = () => {
    setValue((prevUser: any) => ({
      ...prevUser,
      [inputName!]: "",
    }));
  };

  return (
    <div className="form__group field">
      <input
        type={typeInput}
        className="form__field"
        value={inputObject[inputName!]}
        placeholder={inputText}
        onChange={(e) => handleChange(e.target.value)}
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
          style={!(clearable && inputObject[inputName!]) ? { display: "none" } : {}}>
          <IconClose />
        </button>
      )}
      <label htmlFor={inputText} className="form__label">
        {inputText}
      </label>
    </div>
  );
};
