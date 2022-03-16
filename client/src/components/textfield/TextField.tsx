import React, { forwardRef } from "react";
import { useId } from "react-id-generator";

import { InputWidth, InputWrapper } from "../inputwrapper/InputWrapper";

import styles from "./TextField.module.scss";

export type TextFieldProps = {
  label?: string;
  error?: string;
  appendix?: string | React.ReactNode;
  tooltip?: string;
  testIdLabel?: string;
  inputWidth?: InputWidth;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const {
    id: idProp,
    error,
    appendix,
    tooltip,
    type,
    placeholder,
    label,
    className,
    testIdLabel,
    inputWidth,
    ...rest
  } = props;
  const [uid] = useId();
  const id = idProp ?? uid;

  // Fallback to empty space placeholder so we can detect in CSS if there is a value
  // see https://stackoverflow.com/a/35302732/554340
  const nonEmptyPlaceholder = placeholder || " ";
  const hasError = error !== undefined;
  const labelOrError = error || label;

  return (
    <InputWrapper
      error={hasError}
      className={className}
      inputWidth={inputWidth}
    >
      <input
        aria-label={label}
        role={hasError ? "alert" : undefined}
        id={id}
        className={styles.textfieldInput}
        type={type || "text"}
        placeholder={nonEmptyPlaceholder}
        ref={ref}
        {...rest}
      />
      {labelOrError && (
        <label htmlFor={id} data-testid={testIdLabel}>
          {labelOrError}
        </label>
      )}
      {(appendix || tooltip) && (
        <div className={styles.textfieldActions}>
          <span>{appendix || ""}</span>
          {/* {tooltip && <Tooltip content={tooltip} />} */}
        </div>
      )}
    </InputWrapper>
  );
});

TextField.displayName = "TextField";

export { TextField };
