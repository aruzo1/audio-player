import { ComponentProps, ReactNode } from "react";
import { ButtonSpinner } from ".";

interface Props extends ComponentProps<"button"> {
  loading?: boolean;
  children?: ReactNode;
}

function UnstyledButton({ children, loading, ...rest }: Props) {
  return (
    <button {...rest}>
      {loading && <ButtonSpinner size="1.25rem" />}
      {children}
    </button>
  );
}

export default UnstyledButton;
