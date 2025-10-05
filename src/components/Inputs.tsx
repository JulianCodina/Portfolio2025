import { useState } from "react";
import style from "./Inputs.module.css";

interface PropsButtons {
  icon1?: string;
  text?: string;
  icon2?: string;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
}
export function BtnOutlined({
  icon1,
  text,
  icon2,
  title,
  onClick,
}: PropsButtons) {
  return (
    <div className={style.container}>
      <div
        className={style.btn_outlined}
        onClick={onClick}
        title={title ? title : ""}
      >
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {!!text && <p>{text}</p>}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}

export function BtnSolid({
  icon1,
  text,
  icon2,
  title,
  onClick,
  disabled,
}: PropsButtons) {
  function LocalonClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    <div className={disabled ? style.containerDisabled : style.container}>
      <div
        className={style.btn_solid}
        onClick={LocalonClick}
        title={title ? title : ""}
      >
        {!!icon1 && <img src={icon1} alt="icon1" />}
        {!!text && <p>{text}</p>}
        {!!icon2 && <img src={icon2} alt="icon2" />}
      </div>
    </div>
  );
}

interface TextFieldProps {
  type: "text" | "email" | "textarea";
  label: string;
  error: string;
  value: string;
  setValue: (value: string) => void;
  setIsValid: (isValid: boolean) => void;
}
export function TextField({
  type,
  label,
  error,
  value,
  setValue,
  setIsValid,
}: TextFieldProps) {
  const [hasBlurred, setHasBlurred] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  function validateInput(value: string): boolean {
    if (value.trim() === "") return true;

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
    return value.length > 3;
  }

  const handleBlur = () => {
    const isValid = validateInput(value);
    setIsValid(isValid);
    setHasBlurred(true);
    setShowError(!isValid && value.trim() !== "");
  };

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newValue = e.target.value;
    setValue(newValue);

    const isValid = validateInput(newValue);
    if (newValue.trim() === "") {
      setIsValid(false);
    }
    setIsValid(isValid);

    if (hasBlurred) {
      setShowError(newValue.trim() !== "" && !isValid);
    }
  }

  return (
    <div className={style.textField}>
      {type === "textarea" ? (
        <textarea
          className={style.input}
          id={label}
          autoComplete="off"
          placeholder=" "
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
      ) : (
        <input
          className={style.input}
          type={type}
          id={label}
          autoComplete="off"
          placeholder=" "
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
      )}

      <label htmlFor={label} className={style.label}>
        {label}
      </label>
      <label
        htmlFor={label}
        className={showError ? style.error : style.nonError}
      >
        {error} *
      </label>
    </div>
  );
}
