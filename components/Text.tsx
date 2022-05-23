interface TextProps {
  children: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  enterUp?: boolean;
  exitDown?: boolean;
}
import { styled } from "../stitches.config";
import { keyframes } from "@stitches/react";
const enterUp = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)",
  },
});
const exitDown = keyframes({
  "0%": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "100%": {
    opacity: 0,
    transform: "translateY(10px)",
  },
});
export const Text = styled("p", {
  fontFamily: "$inter",
  fontWeight: "lighter",
  lineHeight: "24px",
  color: "$sage12",
  variants: {
    fontSize: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
      },
      "5xl": {
        fontSize: "$5xl",
      },
      "6xl": {
        fontSize: "$6xl",
      },
      "7xl": {
        fontSize: "$7xl",
      },
      "8xl": {
        fontSize: "$8xl",
      },
      "9xl": {
        fontSize: "$9xl",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    enterUp: {
      true: {
        "@media (prefers-reduced-motion: no-preference)": {
          animation: `${enterUp} 0.5s ease-in-out`,
        },
      },
    },
    exitDown: {
      true: {
        "@media (prefers-reduced-motion: no-preference)": {
          animation: `${exitDown} 0.5s ease-in-out`,
        },
      },
    },
  },
});