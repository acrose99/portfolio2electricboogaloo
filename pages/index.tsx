import Head from "next/head";
import Navigation from "../components/Navigation";
import Bio from "../components/Bio";
import { Text } from "../components/Text";
import EditableComponent from "../components/EditableComponent";
import { useState } from "react";
import Flex from "../components/Flex";
export default function Home() {
  const initialInstructions = {
    text: "Hover over an element to start changing the site",
    color: "$mint11",
    fontSize: "24",
    fontWeight: "bold",
    displayChild: true,
  };
  const [instructions, setInstructions] = useState({
    text: "Hover over an element to start changing the site",
    color: "$mint11",
    fontSize: "24",
    fontWeight: "bold",
    displayChild: true,
  });
  return (
    <>
      <Head>
        <title>Alex Rose: Bio</title>
      </Head>
      <Flex gap={20} direction="column" alignItems="center">
        <EditableComponent
          source="https://github.com/acrose99/portfolio2electricboogaloo/blob/main/components/EditableText.tsx"
          callableFunctions={[
            {
              label: "Reset Props",
              icon: "ResetIcon",
              onClick: () => {
                setInstructions(initialInstructions);
              },
            },
            {
              label: "Copy",
              icon: "CopyIcon",
              /* copies the text to the clipboard */
              onClick: () => navigator.clipboard.writeText(instructions.text),
            },
          ]}
          changableProps={[
            {
              label: "Text",
              value: instructions.text,
              onChange: (value) =>
                setInstructions({ ...instructions, text: value }),
            },
            {
              label: "Color",
              value: instructions.color,
              onChange: (value) =>
                setInstructions({ ...instructions, color: value }),
            },
            {
              label: "Font Size",
              value: instructions.fontSize,
              onChange: (value) =>
                setInstructions({ ...instructions, fontSize: value }),
            },
            {
              label: "Font Weight",
              value: instructions.fontWeight,
              onChange: (value) =>
                setInstructions({ ...instructions, fontWeight: value }),
            },
          ]}
          tooltip="Right Click"
        >
          <Text
            css={{
              color: instructions.color,
              fontWeight: instructions.fontWeight,
              fontSize: instructions.fontSize + "px",
              display: instructions.displayChild ? "block" : "none",
            }}
          >
            {instructions.text}
          </Text>
        </EditableComponent>
        <Navigation defaultValue="Bio" />
        <Bio />
      </Flex>
    </>
  );
}
