import { ReactNode } from "react";
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
    </StyledInput>
  );
}

export default Input;
