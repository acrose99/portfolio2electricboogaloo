import React, { useRef, useState } from "react";
import { styled } from "../../stitches.config";
import { blackA } from "@radix-ui/colors";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import EditableComponent from "../EditableComponent";
import { keyframes } from "@stitches/react";
import { Flex } from "../Flex";
import Stitches from "@stitches/react/types/stitches";
import type * as StitchesCSS from "@stitches/react";
const StyledTabs = styled(TabsPrimitive.Root, {
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  borderBottom: `1px solid $sage6`,
  variants: {
    width: {
      sm: {
        flexWrap: "wrap",
      },
      md: {
        flexWrap: "nowrap",
      },
    },
  },
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  padding: "5px 5px",
  "@sm": {
    padding: "5px 10px",
  },
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
  color: "$sage11",
  userSelect: "none",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    color: "$sage12",
  },
  '&[data-state="active"]': {
    color: "$sage12",
    boxShadow: "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
  },
  "&:focus": { position: "relative" },
  variants: {
    fontSize: {
      small: { fontSize: "10px" },
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
  paddingY: "3rem",
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
  content: React.ReactNode | JSX.Element;
};

interface TabsProps {
  orientation?: "horizontal" | "vertical";
  defaultValue: string;
  tabs: Tab[];
  tabTriggerCSS?: StitchesCSS.CSS;
}

export default function Tabs({
  orientation = "horizontal",
  defaultValue,
  tabs,
  tabTriggerCSS,
}: TabsProps) {
  return (
    <>
      <StyledTabs orientation={orientation} defaultValue={defaultValue}>
        <TabsList
          width={{
            "@initial": "sm",
            "@md": "md",
          }}
        >
          {tabs.map(({ value, label, content }) => (
            <TabsTrigger
              fontSize={{
                "@initial": "small",
                "@md": "medium",
                "@lg": "large",
              }}
              css={tabTriggerCSS}
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
          <TabsContent key={value} id={`tab-${value}`} value={value}>
            <Flex
              css={{
                textAlign: "center",
              }}
              key={value}
              direction="column"
              justify="center"
              align="center"
            >
              {content}
            </Flex>
          </TabsContent>
        ))}
      </StyledTabs>
    </>
  );
}
