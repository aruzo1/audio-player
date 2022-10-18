import {
  ComponentProps,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { Field, FieldProps } from "formik";
import Button from "components/button";
import Input from "components/input";
import UploadIcon from "./upload-icon";

interface Props extends ComponentProps<"input"> {
  label: string;
  name: string;
  setFile: Dispatch<SetStateAction<File | undefined>>;
}

function FileInput({ label, name, setFile, ...props }: Props) {
  const [text, setText] = useState("Choose File");

  function inputHandler(e: FormEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];

    if (file) {
      setText(file.name);
      setFile(file);
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
            style={{ display: "none" }}
            id={name}
            type="file"
            onChange={(e) => {
              inputHandler(e);
              field.onChange(e);
            }}
          />
        )}
      </Field>
    </Input>
  );
}

export default FileInput;
