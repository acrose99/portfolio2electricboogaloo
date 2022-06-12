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
  marginY: 36,
  variants: {
    width: {
      sm: {
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      md: {
        width: 300,
      },
      lg: {
        width: 350,
      },
    },
  },
});

export const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  variants: {
    width: {
      sm: {
        width: 250,
      },
      md: {
        width: 300,
      },
      lg: {
        width: 350,
      },
    },
  },
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
    transform: "rotate(90deg)",
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
    transform: "rotate(90deg)",
  },
});

export const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$mint11",
  boxShadow: `0 2px 10px $sagea7`,
  "&:hover": { backgroundColor: "$mint5" },
  "&:focus": { boxShadow: `0 0 0 2px black` },

  variants: {
    openedClosed: {
      true: {
        '&[data-state="closed"]': {
          animation: `${rotateCloseIcon} .5s ease-in-out`,
          transform: "rotate(90deg)",
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

  const [iconColor, setIconColor] = useState("$mint11");
  return (
    <EditableComponent
      // Prevents overlap between EditableText and Collapsible
      showTooltip={false}
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
          label: "Change Arrow Color",
          value: iconColor,
          onChange: (value) => setIconColor(value),
        },
      ]}
    >
      <StyledCollapsible
        width={{
          "@initial": "sm",
          "@md": "md",
          "@lg": "lg",
        }}
        open={open}
        onOpenChange={(open) => {
          setOpen(open);
          setOpened(true);
        }}
      >
        <CollapsibleTrigger
          width={{
            "@initial": "sm",
            "@md": "md",
            "@lg": "lg",
          }}
          asChild
        >
          <Flex
            gap={9}
            css={{
              borderRadius: "20px",
              border: `2px solid $mint7`,
              background: "$sage3",
              color: triggerColor,
              "&:hover": {
                cursor: "pointer",
                boxShadow:
                  "6px 6px 6px $mint8, -4px -2px 5px $mint9, 4px 6px 3px $mint10",
              },
              transition: "box-shadow .2s ease-in-out",
            }}
            direction="row"
            align="center"
            justify="center"
          >
            <Text
              css={{
                color: "inherit",
                fontWeight: 800,
              }}
              fontSize={{
                "@initial": "md",
                "@md": "lg",
                "@lg": "xl",
                "@xl": "2xl",
              }}
            >
              {triggerValue}
            </Text>
            <IconButton
              openedClosed={opened}
              css={{
                animation: open
                  ? `${rotateOpenIcon} .5s ease-in-out !important`
                  : `${rotateCloseIcon} .5s ease-in-out !important`,
                transform: open ? "rotate(180deg)" : "rotate(90deg)",
                backgroundColor: open ? "iconBackgroundColor" : "none",
                color: iconColor,
              }}
            >
              <ArrowUpIcon height={24} width={24} />
            </IconButton>
          </Flex>
        </CollapsibleTrigger>
        <CollapsibleContent
          css={{
            marginY: 24,
            position: "relative",
            textAlign: "center",
          }}
        >
          <EditableText defaultFontSize={"24px"} defaultColor={"$mint10"}>
            {caption}
          </EditableText>
          <Text>{children}</Text>
        </CollapsibleContent>
      </StyledCollapsible>
    </EditableComponent>
  );
}
