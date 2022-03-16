import React, { forwardRef } from "react";
import { useId } from "react-id-generator";

import { InputWidth, InputWrapper } from "../inputwrapper/InputWrapper";

import styles from "./Datepicker.module.scss";

export type DatepickerProps = {
  label?: string;
  error?: boolean;
  inputWidth?: InputWidth;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Datepicker = forwardRef<HTMLInputElement, DatepickerProps>(
  (props, ref) => {
    const {
      id: idProp,
      error,
      type: _type,
      placeholder,
      label,
      className,
      ...rest
    } = props;
    const [uid] = useId();
    const id = idProp ?? uid;

    return (
      <InputWrapper
        error={error}
        className={className}
        inputWidth={props.inputWidth}
      >
        <input
          id={id}
          className={styles.textfieldInput}
          type="date"
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        {label !== undefined && <label htmlFor={id}>{label}</label>}
      </InputWrapper>
    );
  }
);

Datepicker.displayName = "Datepicker";

export { Datepicker };
