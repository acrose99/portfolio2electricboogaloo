import Head from "next/head";
import { styled } from "../stitches.config";
import StitchesLogo from "../components/StitchesLogo";
import Navigation from "../components/Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../components/Bio";
import EditableCollapsible from "../components/editableComponents/EditableCollapsible";
import { Flex } from "../components/Flex";
import EditableText from "../components/editableComponents/EditableText";
import Frameworks from "../components/skills/frameworks";
import Languages from "../components/skills/languages";
import { useState } from "react";
import Switch from "../components/primitives/Switch";
import { Label } from "../components/primitives/Label";

export default function Skills() {
  const [tab, setTab] = useState("Frameworks");
  const [switchChecked, setSwitchChecked] = useState(false);
  return (
    <>
      <Head>
        <title>Alex Rose: Skills</title>
      </Head>
      <Flex
        css={{
          marginTop: "50px",
        }}
        direction="column"
        align="center"
        gap={5}
      >
        <Navigation defaultValue="Skills" />
        <Flex gap={3} align="center" justify='start'>
          <Label
            css={{
              color: tab === "Frameworks" ? '$mint11' : '$sky11',
              fontSize: "24px",
            }}
            htmlFor="switch"
           >{tab === "Frameworks" ? "Frameworks" : "Languages"}</Label>
          <Switch
            value={tab}
            name='switch'
            defaultChecked={tab === "Frameworks"}
            onCheckedChange={(value) =>
              value ? setTab("Frameworks") : setTab("Languages")
            }
          />
        </Flex>
        {tab === "Frameworks" && <Frameworks />}
        {tab === "Languages" && <Languages />}
      </Flex>
    </>
  );
}
