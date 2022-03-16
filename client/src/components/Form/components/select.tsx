import React from "react";
import { Field } from "react-final-form";
import { Select, SelectOption } from "../../select/Select";

export const FormSelect = ({
  options,
  label,
  ...props
}: {
  name: string;
  options: SelectOption[];
  label: string;
} & React.InputHTMLAttributes<HTMLSelectElement>) => {
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
        return (
          <>
            <Select {...{ options, label }} {...input} {...props} />
          </>
        );
      }}
    </Field>
  );
};
