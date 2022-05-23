import React from "react";
import { styled } from "../../stitches.config";
import * as SelectPrimitive from "@radix-ui/react-select";
import { mint, sage } from "@radix-ui/colors";
import { CheckIcon } from "@radix-ui/react-icons";

export const StyledRoot = styled(SelectPrimitive.Root, {});
export const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: "$mint5",
  color: "$sage12",
  boxShadow: `0 2px 10px ${mint.mint7}`,
  "&:hover": { backgroundColor: mint.mint3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

export const StyledContent = styled(SelectPrimitive.Content, {
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 15,
});

export const StyledItem = styled(SelectPrimitive.Item, {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint12",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "5px 35px 5px 25px",
  position: "relative",
  userSelect: "none",

  "&[data-disabled]": {
    color: mint.mint8,
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: mint.mint8,
    color: mint.mint1,
  },
});

export const StyledLabel = styled(SelectPrimitive.Label, {
  padding: "0 25px",
  fontSize: 16,
  lineHeight: "25px",
  color: sage.sage12,
});

export const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: mint.mint6,
  margin: 5,
});

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const scrollButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 25,
  backgroundColor: "white",
  color: mint.mint11,
  cursor: "default",
};

export const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

export const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

export function SelectItem({ value }) {
  return (
    <StyledItem value={value}>
      <SelectPrimitive.ItemText>{value}</SelectPrimitive.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
}