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

interface NavigationProps {
  defaultValue: string;
}

function Navigation({ defaultValue }: NavigationProps) {
  const router = useRouter();
  return (
    <StyledRoot
      onValueChange={(value) => {
        router.push(value === "Bio" ? "/" : value.toLowerCase());
      }}
      defaultValue={defaultValue}
    >
      <StyledTrigger>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <ChevronDownIcon />
        </SelectPrimitive.Icon>
      </StyledTrigger>
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
  );
}

export default Navigation;
