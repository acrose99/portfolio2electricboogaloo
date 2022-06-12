import { useContext, useEffect, useState } from "react";
import { SettingContext } from "../../../pages/_app";
import { Label } from "../../primitives/Label";
import { Input } from "../../Input";
import { styled } from "../../../stitches.config";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../../primitives/Dropdown";
let tinyColor = require("tinycolor2");

const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

interface DefaultColorsProps {
  setDefaultColor: (label: string, value: string) => void;
}

function ColorInput({ label, value, onChange }) {
  const [color, setColor] = useState(value);
  return (
    <Fieldset>
      <Label>{label}</Label>
      <Input
        value={color}
        inputType="color"
        type="color"
        onChange={(e) => {
          onChange(e.target.value);
          setColor(e.target.value);
        }}
      />
    </Fieldset>
  );
}

function DefaultColors({ setDefaultColor }: DefaultColorsProps) {
  let defaultColors = useContext(SettingContext).defaultColors;
  /* convert to array */
  defaultColors = Object.keys(defaultColors).map((key) => ({
    label: key,
    value: tinyColor(defaultColors[key].value).toHexString(),
  }));
  /* filter for only mint and sage colors */
  defaultColors = defaultColors.filter(
    (color) =>
      (color.label.includes("mint") && color.label.includes("A") === false) ||
      (color.label.includes("sage") && color.label.includes("A") === false)
  );
  return (
    <DropdownMenuContent side="bottom" sideOffset={2} alignOffset={0}>
      <>
        {defaultColors.map((color) => (
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            key={color.label}
          >
            <ColorInput
              {...color}
              onChange={(value) => setDefaultColor(color.label, value)}
            />
          </DropdownMenuItem>
        ))}
      </>
    </DropdownMenuContent>
  );
}

export default DefaultColors;
