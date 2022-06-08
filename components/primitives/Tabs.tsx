import React, { useRef, useState } from "react";
import { styled } from "../../stitches.config";
import { blackA } from "@radix-ui/colors";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import EditableComponent from "../EditableComponent";
import { keyframes } from "@stitches/react";
import {Flex} from "../Flex";

const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottom: `1px solid $sage6`,
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  padding: "5px 10px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bolder",
  lineHeight: 1,
  color: "$sage12",
  userSelect: "none",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    color: "$mint11",
  },
  '&[data-state="active"]': {
    color: "$mint11",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
  "&:focus": { position: "relative" },
  variants: {
    fontSize: {
      small: { fontSize: "12px" },
      medium: { fontSize: "14px" },
      large: { fontSize: "16px" },
    },
  },
});

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const StyledContent = styled(TabsPrimitive.Content, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingY: 5,
  marginTops: 5,
  borderTopRightRadius: 6,
  borderBottomRightRadius: 6,
  outline: "none",
  "&:focus": { boxShadow: `0 0 0 2px black` },
  '&[data-state="active"]': {
    animation: `${fadeIn} .5s ease-in`,
  },
});

// Exports
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

// Your app...

type Tab = {
  value: string;
  label: string;
  content: React.ReactNode;
};

interface TabsProps {
  orientation?: "horizontal" | "vertical";
  defaultValue: string;
  tabs: Tab[];
}

export default function Tabs({
  orientation = "horizontal",
  defaultValue,
  tabs,
}: TabsProps) {
  return (
    <>
      <StyledTabs orientation={orientation} defaultValue={defaultValue}>
        <TabsList aria-label="Manage your account">
          {tabs.map(({ value, label, content }) => (
            <TabsTrigger
             fontSize={{
               '@initial': 'small',
                '@md': 'medium',
                '@lg': 'large',
             }}
              key={value}
              value={value}
              aria-label={label}
              aria-controls={`tab-${value}`}
              aria-selected={value === defaultValue}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map(({ value, content }) => (
          <Flex key={value} direction="column" justify="center" align="center">
            <TabsContent key={value} id={`tab-${value}`} value={value}>
              {content}
            </TabsContent>
          </Flex>
        ))}
      </StyledTabs>
    </>
  );
}
