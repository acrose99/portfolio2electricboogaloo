import { sageA } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Flex } from "../Flex";
import { Text } from "../Text";
import ContextMenu from "../primitives/ContextMenu";
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
    },
  },
});

export const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  cursor: "pointer",
});

let fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
  },
});

export const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  '&[data-state="open"]': {
    animation: `${fadeIn} 0.5s ease-in-out !important`,
  },
});

let rotateOpenIcon = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(180deg)",
  },
});

let rotateCloseIcon = keyframes({
  "0%": {
    transform: "rotate(180deg)",
  },
  "100%": {
    transform: "rotate(0deg)",
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
  '&[data-state="open"]': {
    backgroundColor: "$mint3",
    animation: `${rotateOpenIcon} .5s ease-in-out`,
    transform: "rotate(180deg)",
  },
  '&[data-state="closed"]': {
    backgroundColor: "white",
  },
  "&:hover": { backgroundColor: "$mint5" },
  "&:focus": { boxShadow: `0 0 0 2px black` },

  variants: {
    openedClosed: {
      true: {
        '&[data-state="closed"]': {
          animation: `${rotateCloseIcon} .5s ease-in-out`,
          transform: "rotate(0deg)",
        },
      },
    },
  },
});

interface CollapsibleProps {
  trigger: string;
  caption?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export default function EditableCollapsible({
  trigger,
  caption,
  children,
  animated = true,
}: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [triggerValue, setTriggerValue] = useState(trigger);
  const [triggerColor, setTriggerColor] = useState("$mint11");
  const [iconBackgroundColor, setIconBackgroundColor] = useState("white");
  const [iconColor, setIconColor] = useState("$mint11");
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
            setTriggerColor("$mint11");
            setIconBackgroundColor("white");
            setIconColor("$mint11");
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
        onOpenChange={(open) => {
          setOpen(open);
          setOpened(true);
        }}
      >
        <Flex direction="row" justify="between" align="center">
          <Flex direction="column">
            <Text
              css={{
                color: triggerColor,
                fontWeight: 800,
              }}
              fontSize="2xl"
            >
              {triggerValue}
            </Text>
          </Flex>
          <CollapsibleTrigger asChild>
            <IconButton
              openedClosed={opened}
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
          <EditableText
            defaultFontSize={"24px"}
            defaultColor={"$mint10"}
          >
            {caption}
          </EditableText>
          <Text
          // defaultText={caption}
          // defaultColor="$mint10"
          // defaultFontWeight="lighter"
          // defaultFontSize="18px"
          >
            {children}
          </Text>
        </CollapsibleContent>
      </StyledCollapsible>
    </EditableComponent>
  );
}
