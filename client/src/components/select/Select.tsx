import React, { forwardRef, InputHTMLAttributes } from "react";
import { useId } from "react-id-generator";

import { InputWidth, InputWrapper } from "../inputwrapper/InputWrapper";

import styles from "./Select.module.scss";

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label: string;
  error?: string | boolean;
  inputWidth?: InputWidth;
}

export interface SelectOption {
  value: string;
  displayName: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { options, error, value, className, label, inputWidth, onChange, ...rest },
    ref
  ) => {
    const [id] = useId();

    const hasError = error !== undefined && error !== "" && error !== false;
    const labelOrError = error || label;

    return (
      <InputWrapper
        error={hasError}
        className={className}
        inputWidth={inputWidth}
      >
        <select
          ref={ref}
          className={styles.selectInput}
          value={value}
          onChange={onChange}
          id={id}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value.toString()} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={
            value !== undefined && value !== ""
              ? styles.selectedLabel
              : undefined
          }
        >
          {labelOrError}
        </label>
      </InputWrapper>
    );
  }
);

Select.displayName = "Select";
