import React, { useRef, useState } from "react";
import { keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import { violet, mauve, blackA } from "@radix-ui/colors";
import Popover from "./Popover";
import ContextMenuPropItem from "./ContextMenu/ContextMenuItem";
import {
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import * as Icons from "@radix-ui/react-icons";

import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import {
  changableProp,
  callableFunction,
  checkableFunction,
} from "../../constants/editConstants";
import {Flex} from "../Flex";
import Link from "next/link";

const slideDown = keyframes({
  "0%": { opacity: 0, transform: "translateY(-10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(10px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const ContextMenuContent = styled(ContextMenuPrimitive.Content, {
  animationDuration: "0.6s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  animationFillMode: "forwards",
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
  minWidth: 220,
  backgroundColor: "$sage1",
  borderRadius: 6,
  overflow: "hidden",
  padding: 10,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint11",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  // padding: "0 5px",
  position: "relative",
  // paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$sage8",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "$mint10",
    color: "$mint1",
  },
};

const ContextMenuItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const ContextMenuCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  paddingLeft: '10px !important',
  ...itemStyles,
});
const ContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, {
  paddingLeft: 0,
  ...itemStyles,
});
const ContextMenuTriggerItem = styled(ContextMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});

const ContextMenuItemIndicator = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 0,
  marginRight: 12,
  fontSize: 12,
  lineHeight: "25px",
  color: "$sage11",
  ...itemStyles,
});

const ContextMenuLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: "$sage11",
});

const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "$mintA6",
  margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

// Exports
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

// Your app...

interface IconProps {
  icon: string;
}
function Icon({ icon }: IconProps) {
  let IconComponent = Icons[icon];
  return (
    <div
      style={{
        marginRight: "10px",
        height: "25px",
        width: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconComponent />
    </div>
  );
}

interface ContextMenuProps {
  state?: [boolean, (state: boolean) => void];
  children: React.ReactNode;
  changableProps: changableProp[];
  callableFunctions?: callableFunction[];
  checkableFunctions?: checkableFunction[];
  designSystem?: string;
  source?: string;
}

function ContextMenu({
  state,
  children,
  changableProps,
  callableFunctions,
  checkableFunctions,
  designSystem,
  source,
}: ContextMenuProps) {
  return (
    <ContextMenuPrimitive.Root modal>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>
      <ContextMenuContent sideOffset={5}>
        <ContextMenuItem asChild>
          <Popover
            side="bottom"
            sideOffset={-5}
            align="center"
            changeableProps={changableProps}
          >
            <Icon icon="Pencil2Icon" />
            Change Props
          </Popover>
        </ContextMenuItem>

        {callableFunctions &&
          callableFunctions.map((prop, index) => (
            <ContextMenuPropItem
              icon={prop.icon}
              key={index}
              onClick={() => prop.onClick()}
            >
              {prop.label}
            </ContextMenuPropItem>
          ))}
        {checkableFunctions && <ContextMenuSeparator />}
        {checkableFunctions &&
          checkableFunctions.map((prop, index) => (
            <ContextMenuCheckboxItem
              key={index}
              onCheckedChange={() => prop.onClick()}
              checked={prop.checked}
            >
              <ContextMenuItemIndicator>
                <CheckIcon
                  style={{
                    display: prop.checked ? "inline" : "none",
                  }}
                />
              </ContextMenuItemIndicator>
              {prop.label}
            </ContextMenuCheckboxItem>
          ))}
        {designSystem || source ? <ContextMenuSeparator /> : null}
        {designSystem && (
          <ContextMenuPropItem icon="ComponentInstanceIcon">
            <Link href={"/design/" + designSystem}>View Component Design</Link>
          </ContextMenuPropItem>
        )}
        {source && (
          <ContextMenuPropItem icon="GitHubLogoIcon">
            <a
              style={{
                color: "inherit",
              }}
              href={
                "https://github.com/acrose99/portfolio2electricboogaloo/tree/main/" +
                source
              }
              rel="noreferrer"
              target="_blank"
            >
              Go to Source
            </a>
          </ContextMenuPropItem>
        )}
      </ContextMenuContent>
    </ContextMenuPrimitive.Root>
  );
}

export default ContextMenu;
