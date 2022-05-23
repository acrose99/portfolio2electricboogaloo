import Head from "next/head";
import Navigation from "../../components/Navigation";
import {Text} from "../../components/Text";
import { styled } from "../../stitches.config";
import Collapsible from "../../components/primitives/Collapsible";
import Flex from "../../components/Flex";
import { Cross2Icon, RowSpacingIcon } from "@radix-ui/react-icons";
import { useState } from "react";
const Box = styled("div", {
  backgroundColor: "$mint1",
  display: "flex",
});

const Container = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minHeight: "100vh",
  variants: {
    size: {
      1: {
        maxWidth: "40vw",
      },
      2: {
        maxWidth: "60vw",
      },
      3: {
        maxWidth: "80vw",
      },
      max: {
        maxWidth: "100vw",
      },
    },
  },
});


export default function Design() {
    const [open, setOpen] = useState(false);
  return (
    <Box>
      <Head>
        <title>Alex Rose: Design System</title>
      </Head>
      <Container aria-label="Page Start" size={"max"}>
        <Text fontSize="5xl">Design System</Text>
        <Text fontSize="3xl">Collapsible</Text>
        <Collapsible trigger="Trigger -->">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl">Content</Text>
          </Flex>
        </Collapsible>
      </Container>
    </Box>
  );
}