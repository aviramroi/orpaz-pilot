import { SelectOption } from "../select/Select";

export interface IPart {
  field:
    | "input"
    | "number"
    | "date"
    | "time"
    | "select"
    | "multiple-select"
    | "toggle"
    | "textarea";
  name: string;
  label: string;
  placeholder: string;
  info: string;
  options?:SelectOption[]
}
