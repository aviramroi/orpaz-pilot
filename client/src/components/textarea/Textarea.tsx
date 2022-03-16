import React, { forwardRef } from "react";
import { useId } from "react-id-generator";

import { InputWidth, InputWrapper } from "../inputwrapper/InputWrapper";

import Info from "../../icons/info.svg";

import styles from "./Textarea.module.scss";

export type TextareaProps = {
  label?: string;
  error?: string;
  appendix?: string | React.ReactNode;
  tooltip?: string;
  inputWidth?: InputWidth;
  testIdLabel?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      id: idProp,
      error,
      appendix,
      tooltip,
      placeholder,
      label,
      className,
      inputWidth,
      testIdLabel,
      rows,
      ...rest
    } = props;
    const [uid] = useId();
    const id = idProp ?? uid;

    // Fallback to empty space placeholder so we can detect in CSS if there is a value
    // see https://stackoverflow.com/a/35302732/554340
    const nonEmptyPlaceholder = placeholder || " ";
    const hasError = error !== undefined && error !== "";
    const labelOrError = error || label;
    const textareaRows = rows ? rows : 10;

    return (
      <InputWrapper
        inputWidth={inputWidth}
        fixedHeight={false}
        error={hasError}
        className={className}
      >
        <textarea
          id={id}
          className={styles["textarea-input"]}
          rows={textareaRows}
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
          <div className={styles["textarea-actions"]}>
            <span>{appendix || ""}</span>
            {tooltip && (
              <span title={tooltip}>
                <Info />
              </span>
            )}
          </div>
        )}
      </InputWrapper>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
