import { sageA } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Flex from "../Flex";
import { StyledText } from "../Text";
import ContextMenu from "./ContextMenu";
import EditableComponent from "../EditableComponent";
import EditableText from "../editableComponents/EditableText";


export const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  paddingY: 10,
  paddingX: 46,
  marginY: 36,
  borderRadius: 12,
  variants: {
    width: {
      sm: {
        width: 400,
      },
      md: {
        width: 500,
      },
      lg: {
        width: 600,
      },
      xl: {
        width: 700,
      },
   }
  },
});

export const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  cursor: "pointer",
});

export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  overflow: "hidden",
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mint11",
  boxShadow: `0 2px 10px $sagea7`,
  '&[data-state="open"]': {
    backgroundColor: "$mint3",
    transform: "rotate(180deg) !important",
  },
  '&[data-state="closed"]': { 
    backgroundColor: "white"
  },
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "&:hover": { backgroundColor: "$mint5" },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});

interface CollapsibleProps {
  trigger: string;
  caption?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export default function Collapsible({
  trigger,
  caption,
  children,
  animated = true,
}: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const [triggerValue, setTriggerValue] = useState(trigger);
  const [triggerColor, setTriggerColor] = useState('$mint11');
  const [iconBackgroundColor, setIconBackgroundColor] = useState('white');
  const [iconColor, setIconColor] = useState('$mint11');
  return (
    <EditableComponent
      // Prevents overlap between EditableText and Collapsible
      tooltip={open ? null : "Edit Collapsible"}
      source="components/primitives/Collapsible.tsx"
      // designSystem="collapsible"
      callableFunctions={[
        {
          label: "Reset Props",
          icon: "ResetIcon",
          onClick: () => {
            setTriggerValue(trigger);
            setOpen(false);
            setTriggerColor('$mint11');
            setIconBackgroundColor('white');
            setIconColor('$mint11');
          },
          toastLabel: "Reset Collapsible Props",
        },
      ]}
      changableProps={[
        {
          label: "Change Title",
          value: triggerValue,
          onChange: (value) => setTriggerValue(value),
        },
        {
          label: "Change Color",
          value: triggerColor,
          onChange: (value) => setTriggerColor(value),
        },
        {
          label: "Change Icon Color",
          value: iconColor,
          onChange: (value) => setIconColor(value),
        },
        {
          label: "Change Icon Background Color",
          value: iconBackgroundColor,
          onChange: (value) => setIconBackgroundColor(value),
        },
      ]}
    >
      <StyledCollapsible
        width={{
          "@initial": "sm",
          "@md": "md",
          "@lg": "lg",
          "@xl": "xl",
        }}
        open={open}
        onOpenChange={setOpen}
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Flex direction="column">
            <StyledText
              css={{
                color: triggerColor,
                fontWeight: 800,
              }}
              fontSize="2xl"
            >
              {triggerValue}
            </StyledText>
          </Flex>
          <CollapsibleTrigger asChild>
            <IconButton
              css={{
                '&[data-state="closed"]': {
                  backgroundColor: iconBackgroundColor,
                },
                color: iconColor,
              }}
            >
              <ArrowUpIcon />
            </IconButton>
          </CollapsibleTrigger>
        </Flex>
        <CollapsibleContent
          css={{
            textAlign: "center",
          }}
        >
          <>
            <EditableText
              defaultText={caption}
              defaultColor="$mint10"
              defaultFontWeight="lighter"
              defaultFontSize="18px"
            />
            {children}
          </>
        </CollapsibleContent>
      </StyledCollapsible>
    </EditableComponent>
  );
}
