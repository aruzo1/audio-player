import { ComponentProps, FormEvent, useState } from "react";
import { Field, FieldProps, useFormikContext } from "formik";
import Button from "components/button";
import Input from "components/input";
import UploadIcon from "./upload-icon";

interface Props extends ComponentProps<"input"> {
  label: string;
  name: string;
}

function FileInput({ label, name, ...props }: Props) {
  const { setFieldValue } = useFormikContext();
  const [text, setText] = useState("Choose File");

  function inputHandler(e: FormEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];

    if (file) {
      setText(file.name);
      setFieldValue(name, file);
    }
  }

  return (
    <Input name={name} label={label}>
      <Button as="label" htmlFor={name}>
        <UploadIcon /> {text}
      </Button>

      <Field name={name}>
        {({ field }: FieldProps) => (
          <input
            {...field}
            {...props}
            id={name}
            style={{ display: "none" }}
            value=""
            type="file"
            onChange={inputHandler}
          />
        )}
      </Field>
    </Input>
  );
}

export default FileInput;
