import { ComponentProps } from "react";
import { Field, FieldProps } from "formik";
import Input from "../input";
import { TextInputField } from "./style";

interface Props extends ComponentProps<"input"> {
  name: string;
  label: string;
}

function TextInput({ name, label, ref, ...props }: Props) {
  return (
    <Input name={name} label={label}>
      <Field name={name}>
        {({ field }: FieldProps) => (
          <TextInputField {...field} {...props} id={name} />
        )}
      </Field>
    </Input>
  );
}

export default TextInput;
