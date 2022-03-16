import React from "react";
import { Field } from "react-final-form";
import { Textarea } from "../../textarea/Textarea";

export const FormTextarea = ({
  type = "string",
  step,
  ...props
}: { name: string } & React.InputHTMLAttributes<HTMLTextAreaElement>) => {
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
            <Textarea type={type} {...input} {...newProps} />
          </>
        );
      }}
    </Field>
  );
};
