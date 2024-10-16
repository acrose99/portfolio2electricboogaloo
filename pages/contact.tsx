import Head from "next/head";
import { styled } from "../stitches.config";
import StitchesLogo from "../components/StitchesLogo";
import Navigation from "../components/Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import { Flex } from "../components/Flex";
import EditableText from "../components/editableComponents/EditableText";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Alex Rose: Contact</title>
      </Head>
      <Flex
        gap={5}
        direction="column"
        align="center"
        justify="center"
        css={{
          marginY: "0px",
        }}
      >
        <Navigation defaultValue="Contact" />
        <section
          style={{
            maxWidth: "60%",
            textAlign: "center",
          }}
        ></section>
      </Flex>
    </>
  );
}
