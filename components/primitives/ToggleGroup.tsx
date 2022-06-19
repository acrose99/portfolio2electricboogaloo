import React, { useState } from "react";
import { styled } from "../../stitches.config";
import { violet, blackA, mauve } from "@radix-ui/colors";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from "@radix-ui/react-icons";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$sage6",
  borderRadius: 4,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: "unset",
  backgroundColor: "$sage1",
  color: "$mint11",
  height: 35,
  //   width: 72,
  display: "flex",
  flexGrow: 1,
  fontSize: 14,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  marginLeft: 1,
  "&:first-child": {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  "&:last-child": { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  "&:hover": {
    backgroundColor: "$mint3",
  },
  "&[data-state=on]": {
    backgroundColor: "$mint5",
    color: "$mint11",
  },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px black` },
});

// Exports
export const ToggleGroupItem = StyledItem;

// Your app...

type toggle = {
  label: string;
  value: string;
};
interface ToggleGroupProps {
  items: toggle[];
  onChange: (value: string) => void;
}

export default function ToggleGroup({
  items,
  onChange,
}: ToggleGroupProps) {
  const [value, setValue] = useState(items[0].value);
  return (
    <StyledToggleGroup
      onValueChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      type="single"
      defaultValue={items[0].label}
    >
      {items.map((item, index) => (
        <StyledItem key={index} value={item.label}>
          {item.label}
        </StyledItem>
      ))}
    </StyledToggleGroup>
  );
}
