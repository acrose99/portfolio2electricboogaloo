import Head from "next/head";
import { Flex } from "../components/Flex";
import InlideCode from "../components/InlineCode";
import Navigation from "../components/Navigation";
import { Text } from "../components/Text";
import { styled } from "../stitches.config";

const StyledLi = styled("li", {
  fontSize: "14px",
  lineHeight: "150%",
  color: "$sage12",
  fontFamily: "$inter",
  fontWeight: "lighter",
});

function Credits() {
  return (
    <>
      <Head>
        <title>Alex Rose: Credits</title>
      </Head>
      <Flex
        css={{
          marginTop: "0px",
        }}
        justify="center"
        align="center"
        direction="column"
        gap={5}
      >
        <Navigation defaultValue="Credits" />
        <Flex
          css={{
            marginLeft: "1.5rem",
          }}
          direction="column"
          gap={4}
        >
          <Text
            as="h1"
            css={{
              fontWeight: "bold",
              color: "$mint11",
              marginTop: "5rem",
            }}
            fontSize={"4xl"}
          >
            Credits:
          </Text>
          <section
            style={{
              maxWidth: "70%",
            }}
          >
            <Text
              css={{
                fontWeight: "regular",
                color: "$mint12",
              }}
              fontSize={"xl"}
            >
              Tech Stack:
            </Text>
            <Text fontSize={"sm"}>
              This site would not be possible without the amazing work of the
              team making{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.radix-ui.com/"
              >
                Radix UI
              </a>
              . Radix UI is a library of unstyled components built with ARIA in
              mind. Most of the interactive components for this site are built
              with these primitives. For example, an Editable Text component is
              built with the following Radix primitives:{" "}
              <InlideCode>ContextMenu</InlideCode>,{" "}
              <InlideCode>Popover</InlideCode>, <InlideCode>Tooltip</InlideCode>
              , and <InlideCode>Input</InlideCode>. Finally, I am using{" "}
              <a
                href="https://www.radix-ui.com/colors"
                rel="noreferrer"
                target="_blank"
              >
                Radix Colors
              </a>{" "}
              for styling. for styling. If your curious, the colors are{" "}
              <InlideCode>Mint</InlideCode> and <InlideCode>Sage</InlideCode>.
            </Text>
            <Text fontSize={"sm"}>
              I have to once again thank the team at Modulz for making{" "}
              <a href="https://stitches.dev/">Stitches</a>, a CSS-in-JS
              framework for composable React components. I am using Stitches for
              theming (light and dark mode), variants, and styled components.
            </Text>
            <Text fontSize={"sm"}>
              Thank you the amazing team at Vercel for making{" "}
              <a href="https://nextjs.org/">Next.js</a> and{" "}
              <a href="https://vercel.com/">Vercel</a>. This site is hosted on
              Vercel, and I am using Next.js for the frontend.
            </Text>
            <Text fontSize={"sm"}>
              Finally, thank you to everyone at Meta for making{" "}
              <a href="https://reactjs.org/">React</a>, not just for this site,
              but for being my first introduction to Web Development. The more I
              learn, the more I appreciate it.
            </Text>
          </section>
          <section
            style={{
              maxWidth: "70%",
              marginBottom: "5rem",
            }}
          >
            <Text
              as="h1"
              css={{
                fontWeight: "regular",
                color: "$mint12",
                marginTop: "5rem",
              }}
              fontSize={"xl"}
            >
              Inspiration:
            </Text>
            <Text fontSize={"sm"}>
              {" "}
              By far my greatest inspiration for this site is the amazing work
              of Rauno Freiberg. His site{" "}
              <a target="_blank" rel="noreferrer" href="https://uiw.tf">
                ui.wtf
              </a>{" "}
              is amazing and my main goal behind this site is extend the ideas
              of interactive components into something more personal. Definitely
              check out his work!
            </Text>
            <Text fontSize={"sm"}>
              In no particular order, I would like to thank the following people
              for being general inspirations for web development:
            </Text>
            <ul>
              <StyledLi>
                <a target="_blank" rel="noreferrer" href="https://rsms.me/">
                  Rasmus Andersson
                </a>{" "}
                for the Inter font family
              </StyledLi>
              <StyledLi>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/evilrabbit_"
                >
                  Evil Rabbit
                </a>{" "}
                for the Vercel Design System
              </StyledLi>
              <StyledLi>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/pketh"
                >
                  Pirijan
                </a>{" "}
                for Kinopio
              </StyledLi>
              <StyledLi>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.henryfellerhoff.com/"
                >
                  Henry Fellerhoff
                </a>{" "}
                for being a good friend and helping me
              </StyledLi>
              <StyledLi>
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.refactoringui.com/"
                >
                  Steve Schoger
                </a>{" "}
                for Refactoring UI
              </StyledLi>
              <StyledLi>
                {" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/dan_abramov"
                >
                  Dan Abramov
                </a>{" "}
                for responding to my questions
              </StyledLi>
            </ul>
          </section>
        </Flex>
      </Flex>
    </>
  );
}

export default Credits;
