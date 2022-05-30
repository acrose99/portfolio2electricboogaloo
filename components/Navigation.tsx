import {
  SelectItem,
  StyledContent,
  StyledItem,
  StyledItemIndicator,
  StyledLabel,
  StyledRoot,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from "./primitives/Select";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import EditableComponent from "./EditableComponent";
import { useState } from "react";
interface NavigationProps {
  defaultValue: string;
}
import { styled } from "../stitches.config";
import Tooltip from "./primitives/Tooltip";
function Navigation({ defaultValue }: NavigationProps) {
  const [background, setBackground] = useState("$mint5");
  const [color, setColor] = useState("$mint11");
  const [fontSize, setFontSize] = useState("16px");
  const router = useRouter();
  return (
    <EditableComponent
      changableProps={[
        {
          label: "Background Color",
          value: background,
          onChange: (value) => setBackground(value),
        },
        {
          label: "Color",
          value: color,
          onChange: (value) => setColor(value),
        },
        {
          label: "Font Size",
          value: fontSize,
          onChange: (value) => setFontSize(value),
        },
      ]}
    >
      <StyledRoot 
        onValueChange={(value) => {
          router.push(value === "Bio" ? "/" : value.toLowerCase());
        }}
        defaultValue={defaultValue}
      >
        <Tooltip trigger="Right Click to Edit Navigation">
          <StyledTrigger
            css={{
              background: background,
              color: color,
              fontSize: fontSize,
            }}
          >
            <SelectPrimitive.Value aria-label={defaultValue} />
            <SelectPrimitive.Icon>
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </StyledTrigger>
        </Tooltip>
        <StyledContent>
          <StyledScrollUpButton>
            <ChevronUpIcon />
          </StyledScrollUpButton>
          <StyledViewport>
            <SelectPrimitive.Group>
              <StyledLabel>About</StyledLabel>
              <StyledSeparator />
              <SelectItem value="Bio" />
              <SelectItem value="Resume" />
              <SelectItem value="Contact" />
              <SelectItem value="Skills" />
              <SelectItem value="Frameworks" />
              <SelectItem value="Languages" />
            </SelectPrimitive.Group>
          </StyledViewport>
          <StyledScrollDownButton>
            <ChevronDownIcon />
          </StyledScrollDownButton>
        </StyledContent>
      </StyledRoot>
    </EditableComponent>
  );
}

export default Navigation;
