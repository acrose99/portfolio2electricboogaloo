interface TextProps {
  children: React.ReactNode;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  enterUp?: boolean;
  exitDown?: boolean;
}
import { styled } from "../stitches.config";

export const Text = styled("p", {
  fontFamily: "$inter",
  fontWeight: "lighter",
  color: "$sage12",
  variants: {
    fontSize: {
      xs: {
        fontSize: "$xs",
        lineHeight: "$xs",
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$sm",
      },
      md: {
        fontSize: "$md",
        lineHeight: "$md",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$lg",
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "$3xl",
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "$4xl",
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "$5xl",
      },
      "6xl": {
        fontSize: "$6xl",
        lineHeight: "$6xl",
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "$7xl",
      },
      "8xl": {
        fontSize: "$8xl",
        lineHeight: "$8xl",
      },
      "9xl": {
        fontSize: "$9xl",
        lineHeight: "$9xl",
      },
    },
    color: {
      accent: {
        color: "$mint11",
      },
    },
  },
  defaultVariants: {
    fontSize: "sm",
  }
});