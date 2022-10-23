import { ComponentProps } from "react";
import { Field, FieldProps } from "formik";
import { StyledTextField } from "./style";

interface Props extends ComponentProps<"input"> {
  name: string;
}

function TextField({ name, ref, ...props }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <StyledTextField {...field} {...props} id={name} />
      )}
    </Field>
  );
}

export default TextField;
