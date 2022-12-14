import { css, keyframes } from "styled-components";

const pulseKeyframes = keyframes`
  50% {
    opacity: 0.5;
  }
`;

const spinKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const theme = {
  colors: {
    brand: {
      50: "#FFF1F2",
      100: "#FFE4E6",
      200: "#FECDD3",
      300: "#FDA4AF",
      400: "#FB7185",
      500: "#F43F5E",
      600: "#E11D48",
      700: "#BE123C",
      800: "#9F1239",
      900: "#881337",
    },
    neutral: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    danger: {
      50: "#FEF2F2",
      100: "#FEE2E2",
      200: "#FECACA",
      300: "#FCA5A5",
      400: "#F87171",
      500: "#EF4444",
      600: "#DC2626",
      700: "#B91C1C",
      800: "#991B1B",
      900: "#171717",
    },
  },
  devices: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  radius: {
    default: "0.25rem",
    full: "9999px",
  },
  transition: "0.15s ease-in-out",
  animations: {
    pulse: css`
      animation: ${pulseKeyframes} 2s infinite;
    `,
    spin: css`
      animation: ${spinKeyframes} 2s infinite;
    `,
  },
};

export default theme;
