import { Field, FieldProps } from "formik";
import { ComponentProps } from "react";
import { StyledSelectField } from "./style";

interface Props extends ComponentProps<"select"> {
  name: string;
  options?: {
    value: any;
    name: any;
  }[];
}

function SelectField({ name, options, ref, ...rest }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <StyledSelectField {...field} {...rest}>
          <option value="">None</option>
          {options?.map(({ value, name }, i) => (
            <option key={i} value={value}>
              {name}
            </option>
          ))}
        </StyledSelectField>
      )}
    </Field>
  );
}

export default SelectField;
