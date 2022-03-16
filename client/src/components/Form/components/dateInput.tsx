import React from "react";
import { Field } from "react-final-form";
import { Datepicker } from "../../datepicker/Datepicker";

export const FormDateInput = ({
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
            <Datepicker {...input} {...newProps} />
          </>
        );
      }}
    </Field>
  );
};
