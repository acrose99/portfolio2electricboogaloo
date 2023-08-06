import React, { useState } from "react";
import HistoryOfComputing from "./historyofcomputing";
import DigitalExhibit from "./digitalexhibit";
import ThreeJS from "./threejssnippets";
import DontPanic from "./dontpanic";
import { Flex } from "../components/Flex";
import Head from "next/head";
import { Separator } from "../components/primitives/Separator";
import Tabs from "../components/primitives/Tabs";
import EditableText from "../components/editableComponents/EditableText";
import Accomplishments from "../components/work/Accomplishments";
import Stack from "../components/work/Stack";
import Navigation from "../components/Navigation";
import { styled } from "../stitches.config";
interface Props {}

type Tab = {
  value: string;
  label: string;
  content: React.ReactNode;
};

const StyledContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  borderRadius: "0.5rem",
});

function Work(props: Props) {
  const {} = props;
  const project = useState("historyofcomputing");
  return (
    <StyledContainer>
      <Head>
        <title>Alex Rose: Skills</title>
      </Head>
      <Flex
        css={{
          paddingX: "1rem",
          "@lg": {
            paddingX: "8rem",
          },
        }}
        direction="column"
        align="center"
        gap={5}
      >
        <Navigation defaultValue="Work" />
        <Flex
          css={{
            width: "100%",
            backgroundColor: "$mint3",
            margin: "1.5rem",
            borderRadius: "0.5rem",
            border: "2px solid $mint11",
          }}
        >
          <Tabs
            defaultValue="historyofcomputing"
            orientation="vertical"
            tabTriggerCSS={{
              color: "$sage12",
              fontWeight: "bolder",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                color: "$mint11",
              },
              '&[data-state="active"]': {
                color: "$mint11",
                boxShadow:
                  "inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor",
              },
            }}
            tabs={[
              {
                label: "History of Computing",
                value: "historyofcomputing",
                content: <HistoryOfComputing />,
              },
              {
                label: "Digital Exhibit",
                value: "digitalexhibit",
                content: <DigitalExhibit />,
              },
              {
                label: "Don't Panic",
                value: "dontpanic",
                content: <DontPanic />,
              },
              {
                label: "ThreeJS Snippets",
                value: "threejssnippets",
                content: <ThreeJS />,
              },
            ]}
          />
        </Flex>
      </Flex>
    </StyledContainer>
  );
}

export default Work;
