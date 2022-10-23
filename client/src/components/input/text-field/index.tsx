import { ComponentProps } from "react";
import { Field, FieldProps } from "formik";
import { TextInputField } from "./style";

interface Props extends ComponentProps<"input"> {
  name: string;
}

function TextField({ name, ref, ...props }: Props) {
  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <TextInputField {...field} {...props} id={name} />
      )}
    </Field>
  );
}

export default TextField;
