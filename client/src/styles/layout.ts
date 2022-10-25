import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
  overflow-y: hidden;
`;

export const Main = styled.div`
  overflow-y: scroll;
  padding: 2rem 0;
`;
