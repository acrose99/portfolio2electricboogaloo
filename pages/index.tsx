import Head from "next/head";
import Navigation from "../components/Navigation";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import EditableComponent from "../components/EditableComponent";
import { useState } from "react";
import {Flex} from "../components/Flex";
import EditableText from "../components/editableComponents/EditableText";
export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Rose: Bio</title>
      </Head>
      <Flex css={{
        marginTop: 100,
      }} gap={6} direction="column" align="center">
        <Navigation defaultValue="Bio" />
        <Bio />
      </Flex>
    </>
  );
}
