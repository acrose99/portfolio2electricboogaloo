import Head from "next/head";
import { styled } from "../stitches.config";
import StitchesLogo from "../components/StitchesLogo";
import Navigation from "../components/Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import Collapsible from "../components/primitives/Collapsible";
import Flex from "../components/Flex";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Alex Rose: Skills</title>
      </Head>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <Flex direction="column" alignItems="center" gap={20}>
          <Navigation defaultValue="Skills" />
          <Collapsible trigger="React" caption="Experience: 3 years">
            Unlike a lot of other people, I actually learned React before I
            really got into Javascript and HTML/CSS to learn how to make
            websites. I&apos;m not sure if this was the correct choice or not, but I
            do know I really love React and it&apos;s a fantastic framework!
            <br />
            <br />
            I&apos;ve used it for most of my projects, and I would say I&apos;m somewhere
            in between an intermediate and advanced developer. I&apos;m very
            comfortable with most of the core concepts of React, but theres
            still some things I need to learn like Suspense, Redux, and
            Performance Optimization. This is a side effect of React&apos;s maturity
            in comparison to other frameworks more then anything. There is a lot
            to learn.
          </Collapsible>
          <Collapsible trigger="Figma" caption="Experience: 3 years">
            I was a early adopter of Figma and I&apos;ve been using it for a while
            now before they introduced features like Variants and Auto Layout.
            Figma is a great tool for prototyping and I&apos;m very happy with the
            way it works. I use it for almost any site I make.
          </Collapsible>
          <Collapsible trigger="Next.js" caption="Experience: 2 years">
            Next.js is a framework that I&apos;ve been using for a while now. I think
            I understand most of its features now because my main two projects
            at the moment are using it.
          </Collapsible>
          <Collapsible trigger="Vue" caption="Experience: 1 year">
            Vue3 and the Quasar framework are what I use on a daily basis at my
            job. I&apos;m still getting used to them at the moment.
          </Collapsible>
        </Flex>
      </div>
    </>
  );
}
