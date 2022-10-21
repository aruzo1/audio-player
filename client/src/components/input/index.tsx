import { ReactNode } from "react";
import { ErrorMessage } from "formik";
import capitalizeFirstLetter from "helpers/capitalize-first-letter";
import Typography from "components/typography";
import { StyledInput } from "./style";

interface Props {
  children: ReactNode;
  name: string;
  label: string;
}

function Input({ children, name, label }: Props) {
  return (
    <StyledInput>
      <Typography as="label" variant="h5" htmlFor={name}>
        {label}
      </Typography>

      {children}

      <ErrorMessage name={name}>
        {(msg) => (
          <Typography as="span" variant="error">
            {capitalizeFirstLetter(msg)}
          </Typography>
        )}
      </ErrorMessage>
    </StyledInput>
  );
}

export default Input;
