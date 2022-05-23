import Head from "next/head";
import { styled } from "../stitches.config";
import StitchesLogo from "../components/StitchesLogo";
import Navigation from "../components/Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
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

export default function Contact() {
  return (
    <Box>
      <Head>
        <title>Alex Rose: Contact</title>
      </Head>
      <Container aria-label="Page Start" size={"max"}>
        <Navigation defaultValue="Contact" />
        <section
          style={{
            maxWidth: "60%",
          }}
        >
          <Text>
            I am always open to new opportunities. Contact me if you think I may
            be a good fit for your team. Additionally, if you are interested in
            the digital humanities, I would really love to work with you on a
            project. Please reach out!
          </Text>
          <Text>
            <a href="mailto:acrosmail@gmail.com">Shoot me an email</a>
          </Text>
        </section>
      </Container>
    </Box>
  );
}
