import React, { useState } from "react";
import styles from "./form.module.scss";
import { Typography } from "../typography/Typography";
import { FormArrayContext, FormArrayWrapper, FormWrapper } from "../Form";
import { Button } from "../Button";
import { useContext } from "react";
import { IPart } from "./types";
import { SubFormComponenet } from "./subFormComponents";
import { sendReport } from "../../api";

export interface IFormProps {
  title: string;
  layout: "table" | "form";
  description?: string;
  schema: IPart[];
}

export const FormGenerator = ({
  title,
  description,
  layout,
  schema,
}: IFormProps) => {
  const id = window.location.pathname.replace("/", "");

  const handleSave = (values: any) => {
    sendReport(id, values).then((res) => {
      if (res.data) {
        alert("נוצר בהצלחה!");
        window.location.reload();
      }
    });
  };
  return (
    <div className={styles.container}>
      <FormWrapper
        initialValuesProps={{ v: [{}] }}
        header={
          <>
            <span>
              <Typography variant="headline-super" highlight>
                {title}
              </Typography>
            </span>
            {description && (
              <span>
                <Typography variant="copy-super-bold">{description}</Typography>
              </span>
            )}
          </>
        }
        footer={
          <div className={styles.formFooter}>
            <Button type="submit" theme="brand">
              שמור
            </Button>
          </div>
        }
        submit={(values) => handleSave(values.v)}
      >
        <div className={styles.fieldsArrayContainer}>
          {layout === "form" && (
            <FormArrayWrapper name="v" footer={<ArrayFooter />}>
              <SubFormComponenet schema={schema} />
            </FormArrayWrapper>
          )}
        </div>
      </FormWrapper>
    </div>
  );
};

const ArrayFooter = () => {
  const { fields } = useContext(FormArrayContext);
  const handleAddNew = () => {
    fields.push({});
    setTimeout(() => {
      window.scrollTo(0, 1000000);
    }, 300);
  };
  return (
    <div>
      <Button theme="dark" onClick={handleAddNew}>
        הוסף חדש
      </Button>
    </div>
  );
};
