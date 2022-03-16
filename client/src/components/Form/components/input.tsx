import React from "react";
import { Field } from "react-final-form";
import { TextField } from "../../textfield/TextField";

export const FormInput = ({
  type = "string",
  step,
  ...props
}: { name: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Field
      name={props.name}
      validate={(val) => {
        if (props.required) {
          if (!val) {
            let errors = {};
            // errors[props.name] = "required";
            return errors;
          }
        }
        return undefined;
      }}
      displayEmpty
    >
      {({ input, meta }) => {
        const newProps = { ...props };

        return (
          <>
            {/* <input type={type} step={step} {...input} {...newProps} /> */}
            <TextField type={type} step={step} {...input} {...newProps} />
          </>
        );
      }}
    </Field>
  );
};
