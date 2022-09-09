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
          marginTop: 50,
        }}
        gap={6}
        direction="column"
        align="center"
      >
        <Command.Dialog
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: 6,
            boxShadow:
              "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            maxWidth: "450px",
            maxHeight: "85vh",
          }}
          open={open}
          onOpenChange={setOpen}
          label="Command Menu"
        >
          <Command.Input 
            className="command-input"
          />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="Letters">
              <Command.Item>a</Command.Item>
              <Command.Item>b</Command.Item>
              <Command.Separator />
              <Command.Item>c</Command.Item>
            </Command.Group>

            <Command.Item>Apple</Command.Item>
          </Command.List>
        </Command.Dialog>
        <Navigation defaultValue="Bio" />
        <Bio />
      </Flex>
    </>
  );
}
