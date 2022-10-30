import Spinner from "components/spinner";
import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"button"> {
  loading?: boolean;
  children?: ReactNode;
}

function UnstyledButton({ children, loading, ...rest }: Props) {
  return (
    <button {...rest}>{loading ? <Spinner size="21px" /> : children}</button>
  );
}

export default UnstyledButton;
