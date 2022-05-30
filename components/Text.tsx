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
export const StyledText = styled("p", {
  fontFamily: "$inter",
  fontWeight: "lighter",
  fontSize: "14px",
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


export default function Text({
  children,
  color = "$sage12",
  fontSize = "16px",
  fontWeight = "lighter",
  fontStyle = "normal",
  lineHeight = "24px",
  enterUp = false,
  exitDown = false,
}: TextProps) {
  return (
    <StyledText
      /* @ts-ignore */
      css={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        lineHeight: lineHeight,
      }}
      enterUp={enterUp}
      exitDown={exitDown}
    >
      {children}
    </StyledText>
  );
}
