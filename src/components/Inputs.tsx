import React, { useState } from "react";
import style from "./Inputs.module.css";

interface PropsButtons {
  icon1?: string | React.ReactNode;
  text?: string;
  icon2?: string | React.ReactNode;
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
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
      <button
        type="button"
        className={style.btn_outlined}
        onClick={onClick}
        title={title ? title : ""}
      >
        {typeof icon1 === "string" ? <img src={icon1} alt="" /> : icon1}
        {!!text && <p>{text}</p>}
        {typeof icon2 === "string" ? <img src={icon2} alt="" /> : icon2}
      </button>
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
  type,
}: PropsButtons) {
  function localOnClick() {
    if (!disabled && onClick) {
      onClick();
    }
  }

  return (
    <div className={disabled ? style.containerDisabled : style.container}>
      <button
        type={type || "button"}
        disabled={disabled}
        className={style.btn_solid}
        onClick={localOnClick}
        title={title ? title : ""}
      >
        {typeof icon1 === "string" ? <img src={icon1} alt="" /> : icon1}
        {!!text && <p>{text}</p>}
        {typeof icon2 === "string" ? <img src={icon2} alt="" /> : icon2}
      </button>
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
          value={value}
          onChange={handleOnChange}
          onBlur={handleBlur}
          rows={4}
        />
      ) : (
        <input
          className={style.input}
          type={type}
          id={label}
          autoComplete="off"
          placeholder=" "
          value={value}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
      )}

      <label htmlFor={label} className={style.label}>
        {label}
      </label>
      <span className={showError ? style.error : style.nonError}>
        {error} *
      </span>
    </div>
  );
}
