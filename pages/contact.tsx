import Head from "next/head";
import { styled } from "../stitches.config";
import StitchesLogo from "../components/StitchesLogo";
import Navigation from "../components/Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import {Flex} from "../components/Flex";
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
          marginY: "50px",
        }}
      >
        <Navigation defaultValue="Contact" />
        <section
          style={{
            maxWidth: "60%",
            textAlign: "center",
          }}
        >
          <EditableText
            defaultFontSize="16px"
            defaultText="I am always open to new opportunities. Contact me if you think I may
            be a good fit for your team. Additionally, if you are interested in
            the digital humanities, I would really love to work with you on a
            project. Please reach out!"
          ></EditableText>
          <EditableText defaultFontSize="16px">
            <a href="mailto:acrosmail@gmail.com">Shoot me an email!</a>
          </EditableText>
        </section>
      </Flex>
    </>
  );
}
