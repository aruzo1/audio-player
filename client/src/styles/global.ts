import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Plus Jakarta Sans", sans-serif;
    color: #fff;
    background: ${theme.colors.neutral[900]};
  }

  ::-moz-selection {
    background-color: ${theme.colors.brand[600]};
    color: #fff;
  }

  ::selection {
    background-color: ${theme.colors.brand[600]};
    color: #fff;
  }

  ::placeholder {
    font-weight: 300;
    color: ${theme.colors.neutral[500]};
  }

  // -----------------------
  // CSS RESET
  // -----------------------

  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  * {
    padding: 0;
    margin: 0;
    font: inherit;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  hr {
    height: 0;
    overflow: visible;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  summary {
    display: list-item;
  }

  small {
    font-size: 80%;
  }

  [hidden],
  template {
    display: none;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  a {
    background-color: transparent;
    color: inherit;
    text-decoration: none;
    -webkit-text-decoration-skip: objects;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
  }

  strong {
    font-weight: bolder;
  }

  em {
    font-style: italic;
  }

  mark {
    background-color: #ff0;
    color: #000;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  input {
    border-radius: 0;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"],
  [role="button"] {
    cursor: pointer;
  }

  [disabled] {
    cursor: default;
  }

  [type="number"] {
    width: auto;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  button,
  input {
    overflow: visible;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: 0;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    outline: 1px dotted ButtonText;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
    color: inherit;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  select::-ms-value {
    color: currentColor;
  }

  legend {
    border: 0;
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  img {
    border-style: none;
  }

  progress {
    vertical-align: baseline;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  img,
  svg,
  audio,
  canvas,
  progress,
  video {
    display: block;
  }

  @media screen {
    [hidden~="screen"] {
      display: inherit;
    }
    [hidden~="screen"]:not(:active):not(:focus):not(:target) {
      position: absolute !important;
      clip: rect(0 0 0 0) !important;
    }
  }

  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled] {
    cursor: default;
  }

  ul {
    list-style: none;
  }
`;
