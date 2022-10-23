import { ComponentProps, RefObject } from "react";
import { ErrorMessage } from "formik";
import capitalizeFirstLetter from "helpers/capitalize-first-letter";
import Typography from "components/typography";
import TextField from "./text-field";
import FileField from "./file-field";
import { StyledInput } from "./style";

interface Props extends ComponentProps<"input"> {
  name: string;
  label: string;
  type?: "text" | "file";
  required?: boolean;
  ref?: RefObject<HTMLInputElement>;
}

function Input(props: Props) {
  const { name, label, type = "text", required = true, ...rest } = props;

  return (
    <StyledInput>
      <Typography as="label" variant="h5" htmlFor={name}>
        {label}{" "}
        {required && (
          <Typography as="span" variant="danger">
            *
          </Typography>
        )}
      </Typography>

      {type === "text" && <TextField {...rest} name={name} />}
      {type === "file" && <FileField {...rest} name={name} />}

      <ErrorMessage name={name}>
        {(msg) => (
          <Typography as="span" variant="danger">
            {capitalizeFirstLetter(msg)}
          </Typography>
        )}
      </ErrorMessage>
    </StyledInput>
  );
}

export default Input;
