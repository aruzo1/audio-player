import { ComponentProps } from "react";
import { ErrorMessage } from "formik";
import capitalizeFirstLetter from "helpers/capitalize-first-letter";
import Typography from "components/typography";
import TextField from "./text-field";
import FileField from "./file-field";
import { StyledInput } from "./style";
import SelectField from "./select-field";

interface BaseProps {
  name: string;
  label: string;
  required?: boolean;
}

type InputProps = ComponentProps<"input"> &
  BaseProps & {
    type: "text" | "file";
    options?: null;
  };

type SelectProps = ComponentProps<"select"> &
  BaseProps & {
    type: "select";
    options?: {
      value: any;
      name: any;
    }[];
  };

function Input(props: SelectProps | InputProps) {
  const { ref, name, label, type, required = true, options, ...rest } = props;

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

      {type === "text" && (
        <TextField {...(rest as ComponentProps<"input">)} name={name} />
      )}
      {type === "file" && (
        <FileField {...(rest as ComponentProps<"input">)} name={name} />
      )}
      {type === "select" && (
        <SelectField
          {...(rest as ComponentProps<"select">)}
          options={options}
          name={name}
        />
      )}

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
