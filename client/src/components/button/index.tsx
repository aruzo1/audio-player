import { ComponentProps, ReactNode } from "react";
import { StyledButton } from "./style";

interface Props extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "brand" | "neutral";
}

function Button({ children, ref, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
