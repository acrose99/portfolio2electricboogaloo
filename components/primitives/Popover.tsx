import React from "react";
import { styled, theme, darkTheme } from "../../stitches.config";
import { keyframes } from "@stitches/react";
import {
  MixerHorizontalIcon,
  Cross2Icon,
  Cross1Icon,
} from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Text } from "../Text";
import { Label } from "./Label";
import { Input } from "../Input";
import { Flex } from "../Flex";
import { changableProp, callableFunction } from "../../constants/editConstants";
import { StyledSeparator } from "./Select";

import EditableText from "../editableComponents/EditableText";
import { useTheme } from "next-themes";
import { useWindowSize } from "../../hooks/useWindowDimensions";
let tinyColor = require("tinycolor2");

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});
const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 300,
  backgroundColor: "$sage1",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $mint7`,
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  // height: "20px",
  // width: "20px",
  fill: "$mint11",
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mint11",
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: "$mint4" },
  "&:focus": { boxShadow: `0 0 0 2px $mint7` },
});

const PopoverTrigger = styled(PopoverPrimitive.Trigger, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint11",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  paddingLeft: 5,
  position: "relative",
  width: "100%",
  "&[data-disabled]": {
    color: "$sage8",
    pointerEvents: "none",
  },
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$mint10",
    color: "$mint1",
  },
});

// Exports
export const PopoverRoot = PopoverPrimitive.Root;

export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

interface PopoverProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  changeableProps?: changableProp[];
  callableFunctions?: callableFunction[];
}

function Popover({
  children,
  defaultOpen,
  open,
  onOpenChange,
  side,
  sideOffset,
  align,
  alignOffset,
  changeableProps,
}: PopoverProps) {
  let themeMode = useTheme();
  function getInputType(type: string, value: string) {
    if (type === "number") {
      return "number";
    }
     else if (
      value.indexOf("hsl") !== -1 ||
      value.indexOf("hsla") !== -1 ||
      value.indexOf("rgba") !== -1 ||
      value.indexOf("rgb") !== -1 ||
      value.indexOf("#") !== -1 ||
      value.indexOf("$sage") !== -1 ||
      value.indexOf("$mint") !== -1
    ) {
      return "color";
    } else if (type === "string") {
      return "text";
    } else if (type === "boolean") {
      return "checkbox";
    }
  }
  function getInputColor(type: string, value: string) {
    // let color = value.slice(1, value.length);
    if (value.indexOf("$sage") !== -1 || value.indexOf("$mint") !== -1) {
      let color = value.slice(value.indexOf("$") + 1, value.length);
      try {
        if (themeMode.theme === "light") {
          let radixColor = theme.colors[color];
          return tinyColor(radixColor.value).toHexString();
        } else {
          let radixColor = darkTheme.colors[color];
          return tinyColor(radixColor.value).toHexString();
        }
      } catch {
        return "black";
      }
    }
    return tinyColor(value).toHexString();
  }
  const size = useWindowSize();
  return (
    <PopoverRoot>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
      side={size.width < 600 ? "top" : 'right'}
      sideOffset={sideOffset ? 0 : 10}
      align={"center"}
      alignOffset={alignOffset ? alignOffset : 0}
      >
        <Flex direction="column" align="start" gap={2}>
          <EditableText
            defaultFontWeight="bold"
            defaultColor="mint11"
            defaultText={"Props:"}
            defaultFontSize={"18px"}
          />
          {changeableProps &&
            changeableProps.map((prop, index) => (
              <Fieldset key={index}>
                <Label>{prop.label}</Label>
                {prop && (
                  <>
                    <Input
                      // value={prop.value}
                      value={
                        /* @ts-ignore */
                        getInputType(typeof prop.value, prop.value) === "color"
                          ? /* @ts-ignore */
                            getInputColor(prop.type, prop.value)
                          : prop.value
                      }
                      /* @ts-ignore */
                      inputType={getInputType(typeof prop.value, prop.value)}
                      type={getInputType(typeof prop.value, prop.value)}
                      placeholder={prop.placeholder ? prop.placeholder : ""}
                      onChange={(e) => prop.onChange(e.target.value)}
                    />
                    {getInputType(typeof prop.value, prop.value) === "text" &&
                      prop.value != "" && (
                        <Cross2Icon
                          height={"24px"}
                          width={"24px"}
                          onClick={() => prop.onChange("")}
                        />
                      )}
                  </>
                )}
              </Fieldset>
            ))}
        </Flex>
        <PopoverArrow />
        <PopoverClose aria-label="Close">
          <Cross2Icon />
        </PopoverClose>
      </PopoverContent>
    </PopoverRoot>
  );
}

export default Popover;
