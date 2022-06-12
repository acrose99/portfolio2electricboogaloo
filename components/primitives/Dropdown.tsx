import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import { violet, mauve, blackA } from "@radix-ui/colors";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import {
  changableProp,
  checkableFunction,
  callableFunction,
} from "../../constants/editConstants";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

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

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: "$sage3",
  borderRadius: 6,
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
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
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint11",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$sage8",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "$mint10",
    color: "$mint1",
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, {
  ...itemStyles,
});
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: "$mint6",
    color: "$mint11",
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: "$mint11",
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$mint11",
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: "$mint11",
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

// Your app...

const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: "$sage11",
  ":focus > &": { color: "$sage1" },
  "[data-disabled] &": { color: "$sage8" },
});

type DropdownMenu = {
  label: string;
  children: React.ReactNode;
};

interface DropdownProps {
  children: React.ReactNode;
  changableProps?: changableProp[];
  callableFunctions?: callableFunction[];
  checkableFunctions?: checkableFunction[];
  extraDropdownMenus?: DropdownMenu[];
  githubLink?: string;
}

export default function Dropdown({
  children,
  changableProps,
  callableFunctions,
  checkableFunctions,
  extraDropdownMenus,
  githubLink,
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent sideOffset={5}>
        {extraDropdownMenus &&
          extraDropdownMenus.map(({ label, children }) => (
            <DropdownMenu key={label}>
              <DropdownMenuTriggerItem>
                {label}
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </DropdownMenuTriggerItem>
              {children}
            </DropdownMenu>
          ))}
        <DropdownMenuSeparator />
        {checkableFunctions &&
          checkableFunctions.map((prop, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              onCheckedChange={() => prop.onClick()}
              checked={prop.checked}
              disabled={prop.disabled}
            >
              <DropdownMenuItemIndicator>
                <CheckIcon />
              </DropdownMenuItemIndicator>
              {prop.label}
            </DropdownMenuCheckboxItem>
          ))}
        <DropdownMenuSeparator />
        {githubLink && 
          <DropdownMenuItem>
            <a style={{
              textDecoration: "none",
              color: 'inherit'
            }} href={githubLink} target="_blank" rel="noopener noreferrer">
              View Site on GitHub
            </a>
          </DropdownMenuItem>}
        <DropdownMenuArrow offset={12} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
