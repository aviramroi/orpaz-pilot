import React, { Fragment, useState } from "react";
import { Field as FinalField } from "react-final-form";
import { Toggle } from "../../toggle";

export interface IFormProps {
  name: string;
  disabled?: boolean;
  onClear?: (val: string) => void;
  required?: boolean;
  isPressed?: boolean;
  setPressed?: (value: boolean) => void;
  label?: string;
  secondLabel?: string;
}

export const FormToggle = ({ required = false, ...props }: IFormProps) => {
  return (
    <FinalField
      type="checkbox"
      name={props.name}
      validate={(val) => {
        if (required) {
          if (!val) {
            let errors = {};
            return errors;
          }
        }
        return undefined;
      }}
      displayEmpty
    >
      {({ input, meta }) => {
        return <Toggle {...input} {...props} />;
      }}
    </FinalField>
  );
};
