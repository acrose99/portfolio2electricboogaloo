import { sageA } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Flex from "../Flex";
import { StyledText } from "../Text";
import ContextMenu from "./ContextMenu";
import EditableComponent from "../EditableComponent";
import EditableText from "../editableComponents/EditableText";
const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-collapsible-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-collapsible-content-height)" },
  to: { height: 0 },
});

export const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: 400,
  transition: "background-color 0.2s ease-in-out",
  paddingY: 10,
  paddingX: 46,
  marginY: 36,
  borderRadius: 12,
});

export const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  cursor: "pointer",
});

export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  overflow: "hidden",
  variants: {
    animated: {
      true: {
        "@media (prefers-reduced-motion: no-preference)": {
          '&[data-state="open"]': {
            animation: `${open} 300ms ease-out forwards`,
          },
          '&[data-state="closed"]': {
            animation: `${close} 300ms ease-out forwards`,
          },
        },
      },
    },
  },
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
  '&[data-state="closed"]': { backgroundColor: "white"},
  '&[data-state="open"]': { backgroundColor: "$mint3" },
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
  const [captionValue, setCaptionValue] = useState(caption);
  return (
    <EditableComponent
      // Prevents overlap between EditableText and Collapsible
      tooltip={open ? null : "Right click to edit Collapsible"}
      source="components/primitives/Collapsible.tsx"
      designSystem="collapsible"
      callableFunctions={[
        {
          label: "Reset Props",
          icon: "ResetIcon",
          onClick: () => {
            setTriggerValue(trigger);
            setCaptionValue(caption);
            setOpen(false);
          },
          toastLabel: "Reset Collapsible Props",
        }
      ]}
      changableProps={[
        {
          label: "Change Title",
          value: triggerValue,
          onChange: (value) => setTriggerValue(value),
        },
        {
          label: "Change Caption",
          value: captionValue,
          onChange: (value) => setCaptionValue(value),
        },
      ]}
    >
      <StyledCollapsible open={open} onOpenChange={setOpen}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex direction="column">
            <StyledText
              css={{
                color: "$mint11",
                fontWeight: 800,
              }}
              fontSize="2xl"
            >
              {triggerValue}
            </StyledText>
          </Flex>
          <CollapsibleTrigger asChild>
            <IconButton>
              {open ? <Cross2Icon /> : <RowSpacingIcon />}
            </IconButton>
          </CollapsibleTrigger>
        </Flex>
        <CollapsibleContent css={{
          textAlign: "center",
        }} animated={animated}>
          <>
            <EditableText
              // css={{
              //   color: "$mint10",
              //   fontWeight: "lighter",
              // }}
              // fontSize="xl"
              defaultText={captionValue}
              defaultColor="$mint10"
              defaultFontWeight="lighter"
              defaultFontSize="24px"/>
            {children}
          </>
        </CollapsibleContent>
      </StyledCollapsible>
    </EditableComponent>
  );
}
