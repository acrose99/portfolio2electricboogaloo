import Head from "next/head";
import Navigation from "../components/Navigation";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import EditableComponent from "../components/EditableComponent";
import { useEffect, useState } from "react";
import { Flex } from "../components/Flex";
import EditableText from "../components/editableComponents/EditableText";
import { useWindowSize } from "../hooks/useWindowDimensions";
import { Command } from "cmdk";
export default function Home() {
  useEffect(() => {
    if (window.innerWidth <= 428) {
      alert(
        "Hi! This website is meant to be edited, but it looks like you're using a mobile device. Consider using a computer :)"
      );
    }
  }, []);
  const [open, setOpen] = useState(false);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && e.metaKey) {
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  return (
    <>
      <Head>
        <title>Alex Rose: Bio</title>
      </Head>
      <Flex
        css={{
          marginTop: 0,
        }}
        gap={6}
        direction="column"
        align="center"
      >
        <Navigation defaultValue="Bio" />
        <Bio />
      </Flex>
    </>
  );
}
