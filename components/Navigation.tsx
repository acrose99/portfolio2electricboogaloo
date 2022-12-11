import {
  SelectItem,
  StyledContent,
  StyledGroup,
  StyledLabel,
  StyledRoot,
  StyledScrollDownButton,
  StyledScrollUpButton,
  StyledSeparator,
  StyledTrigger,
  StyledViewport,
} from "./primitives/Select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import EditableComponent from "./EditableComponent";
import { useState } from "react";
interface NavigationProps {
  defaultValue: string;
}
function Navigation({ defaultValue }: NavigationProps) {
  const [background, setBackground] = useState("$mint5");
  const [color, setColor] = useState("$mint11");
  const [fontSize, setFontSize] = useState("20px");
  const router = useRouter();
  return (
    <StyledRoot
      defaultValue={defaultValue}
      onValueChange={(value) => {
        /* clear nested routes */
        if (value === "Source") {
          router.push("https://github.com/acrose99/portfolio2electricboogaloo");
        } else router.push(value === "Bio" ? "/" : value.toLowerCase());
      }}
    >
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
      <SelectPrimitive.Portal>
        <StyledContent>
          <StyledScrollUpButton>
            <ChevronUpIcon />
          </StyledScrollUpButton>
          <StyledViewport>
            <StyledGroup>
              <StyledLabel>About Alex</StyledLabel>
              <StyledSeparator />
              <SelectItem value="Bio" />
              <SelectItem value="Skills" label="Skills" />
              <SelectItem value="Resume" />
              <SelectItem value="Contact" />
            </StyledGroup>
            <StyledGroup>
              <StyledLabel>Work</StyledLabel>
              <StyledSeparator />
              <SelectItem
                value="HistoryOfComputing"
                label="History of Computing"
              />
              <SelectItem
                value="digitalexhibit"
                label="Digital Exhibit Concept"
              />
              <SelectItem value="DontPanic" label="Don't Panic" />
              <SelectItem value="threeJSSnippets" label="ThreeJS Snippets" />
            </StyledGroup>
            <StyledGroup>
              <StyledLabel>About this Site</StyledLabel>
              <StyledSeparator />
              <SelectItem value="Credits" />
              <SelectItem value="Source" label="Source Code" />
            </StyledGroup>
          </StyledViewport>
          <StyledScrollDownButton>
            <ChevronDownIcon />
          </StyledScrollDownButton>
        </StyledContent>
      </SelectPrimitive.Portal>
    </StyledRoot>
  );
}

export default Navigation;
