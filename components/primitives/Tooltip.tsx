import * as TooltipPrimitives from "@radix-ui/react-tooltip";
import React, { useContext } from "react";
import { styled } from "../../stitches.config";
import { keyframes } from "@stitches/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { SettingContext } from "../../pages/_app";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  cursor: "context-menu",
  backgroundColor: "transparent",
  border: "none",
  variants: {
    showTooltip: {
      true: {
        "&:hover": {
          backgroundColor: "$mintA3",
          transition: "background-color .2s ease-in-out",
        },
      },
    },
  },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: 4,
  padding: "10px 15px",
  fontSize: 12,
  lineHeight: 1,
  color: "$sage12",
  fontWeight: 800,
  backgroundColor: "$mint5",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: "$mint4",
});

// Exports
interface TooltipProps {
  children: React.ReactNode;
  trigger?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /* The duration from when the mouse enters a tooltip trigger until the tooltip opens. */
  delayDuration?: number;
  /* How much time a user has to enter another trigger without incurring a delay again. */
  skipDelayDuration?: number;
  /* The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. */
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  /* The preferred alignment against the trigger. May change when collisions occur. */
  align?: "start" | "center" | "end";
  alignOffset?: number;
  triggerAsChild?: boolean;
  showTooltip?: boolean;
  toolTipColor?: string;
}

function Tooltip({
  children,
  trigger,
  defaultOpen,
  open,
  onOpenChange,
  delayDuration = 0,
  skipDelayDuration = 300,
  side = "top",
  sideOffset = 0,
  align = "center",
  alignOffset = 0,
  triggerAsChild = true,
  toolTipColor = "mint3",
  showTooltip = true,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider
      delayDuration={0}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root
        defaultOpen={defaultOpen ? true : undefined}
        open={open ? true : undefined}
        onOpenChange={onOpenChange ? (open) => onOpenChange(open) : undefined}
      >
        <StyledTrigger
          css={{
            "&:hover": {
              backgroundColor: toolTipColor ? toolTipColor : null,
            },
          }}
          showTooltip={showTooltip}
          asChild={triggerAsChild}
        >
          {children}
        </StyledTrigger>
        {trigger && (
          <TooltipPrimitive.Content
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <StyledContent
              css={{
                backgroundColor: toolTipColor,
              }}
              sideOffset={sideOffset}
            >
              {trigger}
              <StyledArrow />
            </StyledContent>
          </TooltipPrimitive.Content>
        )}
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
