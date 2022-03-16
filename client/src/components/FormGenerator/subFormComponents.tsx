import { useContext } from "react";
import classnames from "classnames";
import { FormInput } from "../Form/components/input";
import { MdClose } from "react-icons/md";
import styles from "./form.module.scss";
import { ArrayNameContext, FormArrayContext } from "../Form";
import { IPart } from "./types";
import { Select, SelectOption } from "../select/Select";
import { FormDateInput } from "../Form/components/dateInput";
import { FormSelect } from "../Form/components/select";
import { FormTextarea } from "../Form/components/textarea";
import { FormToggle } from "../Form/components/toggle";

export const SubFormComponenet = ({ schema }: { schema: IPart[] }) => {
  const { name: prename } = useContext(ArrayNameContext);
  return (
    <>
      <div
        className={classnames(styles.formFieldsContainer, styles.twoColumns)}
      >
        <ArrayHeader />
        {schema.map((s, index) => (
          <PartGenerator
            {...s}
            name={prename ? `${prename}[${s.name}]` : s.name}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

const PartGenerator = ({
  field,
  name,
  label,
  info,
  placeholder,
  options,
}: IPart) => {
  if (field === "input") {
    return <FormInput {...{ name, label, placeholder }} />;
  }
  if (field === "number") {
    return <FormInput {...{ name, label, placeholder }} type="number" />;
  }
  if (field === "date") {
    return <FormDateInput {...{ name, label, placeholder }} />;
  }
  if (field === "select") {
    return (
      <FormSelect
        {...{ name, label, placeholder, options: options as SelectOption[] }}
      />
    );
  }
  if (field === "textarea") {
    return <FormTextarea {...{ name, label, placeholder }} />;
  }
  if (field === "toggle") {
    return <FormToggle {...{ name, label, placeholder }} />;
  }
  return <></>;
};

const ArrayHeader = () => {
  const { fields } = useContext(FormArrayContext);
  const { index } = useContext(ArrayNameContext);

  return (
    <button
      type="button"
      className={styles.formDeleteButton}
      onClick={() => fields.remove(index)}
    >
      <MdClose />
    </button>
  );
};
