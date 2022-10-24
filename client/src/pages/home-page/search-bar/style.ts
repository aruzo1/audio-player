import styled from "styled-components";
import Button from "components/button";
import { StyledTextField } from "components/input/text-field/style";

export const SearchBarButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  aspect-ratio: 1/1;
`;

export const SearchBarInput = styled(StyledTextField)`
  min-height: 100%;
  padding: 0.5rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
