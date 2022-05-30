import Head from "next/head";
import Navigation from "../components/Navigation";
import Bio from "../components/Bio";
import { StyledText } from "../components/Text";
import EditableComponent from "../components/EditableComponent";
import { useState } from "react";
import Flex from "../components/Flex";
import EditableText from "../components/editableComponents/EditableText";
export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Rose: Bio</title>
      </Head>
      <Flex gap={20} direction="column" alignItems="center">
        <EditableText
          defaultFontSize="24px"
          defaultFontWeight="bolder"
          defaultText="Hover over an element to start changing the site"
          defaultColor="$mint11"
        />
        <Navigation defaultValue="Bio" />
        <Bio />
      </Flex>
    </>
  );
}
