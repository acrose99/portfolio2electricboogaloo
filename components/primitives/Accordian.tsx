import React from "react";
import { styled } from "../../stitches.config";
import { sage, mint, sageA } from "@radix-ui/colors";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { keyframes } from "@stitches/react";

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const StyledAccordion = styled(AccordionPrimitive.Root, {
  borderRadius: 6,
  width: 300,
  marginY: "3rem",
  backgroundColor: "$sage6",
  boxShadow: `0 2px 10px ${sageA.sageA6}`,
});

export const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: "hidden",
  marginTop: 1,

  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  "&:last-child": {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:focus-within": {
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 2px ${sage.sage12}`,
  },
});

export const StyledHeader = styled(AccordionPrimitive.Header, {
  all: "unset",
  display: "flex",
});

export const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: 15,
  lineHeight: 1,
  color: "$mint11",
  boxShadow: `0 1px 0 ${sage.sage6}`,
  '&[data-state="closed"]': { backgroundColor: "white" },
  '&[data-state="open"]': { backgroundColor: "white" },
  "&:hover": { backgroundColor: sage.sage2 },
});

export const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: "hidden",
  fontSize: 15,
  color: "$sage11",
  backgroundColor: "$sage2",

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
});

export const StyledContentText = styled("div", {
  padding: "15px 20px",
});

export const StyledChevron = styled(ChevronDownIcon, {
  color: "$mint10",
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

export function AccordionContent({ children, ...props }) {
  return (
    <StyledHeader>
      <StyledTrigger {...props}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  );
}
export function AccordionTrigger({ children, ...props }) {
  return (
    <StyledContent {...props}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  );
}
