import * as SwitchPrimitives from "@radix-ui/react-switch";
import { styled } from "../../stitches.config";

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange: (checked: any) => void;
  name: string;
  value: string;
}

const StyledSwitch = styled(SwitchPrimitives.Root, {
  all: "unset",
  width: 64,
  height: 32,
  backgroundColor: "$sky4",
  borderRadius: "9999px",
  position: "relative",
  boxShadow: `0 2px 10px $sageA11`,
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: "$mint4" },
});

const StyledThumb = styled(SwitchPrimitives.Thumb, {
  display: "block",
  width: 21,
  height: 21,
  backgroundColor: "$sky11",
  borderRadius: "9999px",
  boxShadow: `0 2px 10px $sageA7`,
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(40px)",
    backgroundColor: "$mint11",
  },
});

export default function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  name,
  value,
}: SwitchProps) {
  return (
    <StyledSwitch
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      name={name}
      value={value}
    >
      <StyledThumb />
    </StyledSwitch>
  );
}
