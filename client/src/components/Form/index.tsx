import React, {
  createContext,
  Fragment,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Form, FormSpy } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FormApi, ValidationErrors } from "final-form";
import { FieldArray } from "react-final-form-arrays";
import styles from "./styles.module.scss";

interface IFormContext {
  values?: any;
  form?: FormApi<any, Partial<any>>;
  initialValues?: Partial<any>;
  valid?: boolean;
}

export const FormContext = createContext<IFormContext>({});

/**
 * @description must be used inside the FormWrapper
 * @param name the name of the field you want to subscribe to -> example for array : (presetName ? `${presetName}.isMaintenance` : 'isMaintenance')
 * @returns the new Value of the field
 */

export const useFieldRegistration = (name: string) => {
  const [newValue, setNewValue] = useState();
  const { form } = useContext(FormContext);

  useEffect(() => {
    const registerField = form!.registerField(
      name,
      (fieldState) => {
        const { value } = fieldState;
        if (value !== newValue) {
          setNewValue(value);
        }
      },
      { value: true }
    );
    return () => {
      registerField();
    };
  }, []);

  return newValue;
};

interface IForm {
  submit: (values: any) => void;
  initialValuesProps?: Partial<any>;
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  validate?: (values: any) => ValidationErrors;
}

export const FormWrapper = ({
  submit,
  initialValuesProps,
  children,
  header,
  footer,
  validate = (v) => {
    return {};
  },
}: IForm) => {
  return (
    <div className={styles.container}>
      <Form
        onSubmit={submit}
        validate={validate}
        mutators={{
          ...arrayMutators,
          clear: (args, state, { changeValue }) => {
            changeValue(state, args[0], () => undefined);
          },
          onSelect: (args, state, { changeValue }) => {
            changeValue(state, args[0], () => args[1]);
          },
        }}
        initialValues={initialValuesProps}
        render={({ form, handleSubmit }) => {
          const { initialValues, values, valid } = form.getState();
          return (
            <FormContext.Provider
              value={{ form, initialValues, values, valid }}
            >
              <form
                autoComplete="off"
                className={styles.formContainer}
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <FormSpy
                  subscription={{ valid: true }}
                  render={() => {
                    return <Fragment>{header}</Fragment>;
                  }}
                />
                {children}
                <FormSpy
                  subscription={{ valid: true }}
                  render={() => {
                    return <Fragment>{footer}</Fragment>;
                  }}
                />
              </form>
            </FormContext.Provider>
          );
        }}
      />
    </div>
  );
};

interface IFormArrayContext {
  fields?: any;
  meta?: Partial<{
    active: boolean;
    dirty: boolean;
    dirtySinceLastSubmit: boolean;
    error: any;
    initial: any;
    invalid: boolean;
    pristine: boolean;
    submitError: any;
    submitFailed: boolean;
    submitSucceeded: boolean;
    touched: boolean;
    valid: boolean;
    visited: boolean;
  }>;
  handleCreateNew?: () => void;
}

export const FormArrayContext = createContext<IFormArrayContext>({});

export const ArrayNameContext = createContext<{ name: string; index: number }>({
  name: "",
  index: 0,
});

export const FormArrayWrapper = ({
  name,
  children,
  header,
  footer,
  tabsMode = false,
  activeTab,
}: {
  name: string;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  tabsMode?: boolean;
  activeTab?: number;
}) => {
  return (
    <FieldArray name={name}>
      {({ fields, meta }) => {
        const handleCreateNew = () => {
          fields.push(meta.initial[0]);
        };
        return (
          <>
            <FormArrayContext.Provider
              value={{ fields, meta, handleCreateNew }}
            >
              {header}
              {fields.map((name, index) => {
                if (tabsMode && activeTab !== -1) {
                  if (index === activeTab) {
                    return (
                      <ArrayNameContext.Provider
                        key={index}
                        value={{ name, index }}
                      >
                        {children}
                      </ArrayNameContext.Provider>
                    );
                  }
                  return null;
                } else {
                  return (
                    <ArrayNameContext.Provider
                      key={index}
                      value={{ name, index }}
                    >
                      {children}
                    </ArrayNameContext.Provider>
                  );
                }
              })}
              {footer}
            </FormArrayContext.Provider>
          </>
        );
      }}
    </FieldArray>
  );
};
