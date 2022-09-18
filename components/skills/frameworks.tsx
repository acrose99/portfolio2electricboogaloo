import Head from "next/head";
import { styled } from "../../stitches.config";
import StitchesLogo from "../StitchesLogo";
import Navigation from "../Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../Bio";
import EditableCollapsible from "../editableComponents/EditableCollapsible";
import {Flex} from "../Flex";
import EditableText from "../editableComponents/EditableText";
import { Label } from "../primitives/Label";
import { useState, useEffect } from "react";
import EditableComponent from "../EditableComponent";
import { StyledSlider, StyledTrack, StyledRange, StyledThumb } from "../primitives/Slider";

interface FrameworkProps {
  title: string;
  experience: number;
}
function Framework({ title, experience }: FrameworkProps) {
  const [length, setLength] = useState(experience);
  const [lengthLabel, setLengthLabel] = useState("Concise");
  const [trackColor, setTrackColor] = useState("$sage12");
  const [thumbColor, setThumbColor] = useState("$mint9");
  const [activeThumbColor, setActiveThumbColor] = useState("$mint10");
  const [rangeColor, setRangeColor] = useState("$mint7");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (length < 1) {
      setLengthLabel("Novice");
    }
    if (length >= 1 && length < 2) {
      setLengthLabel("Beginner");
    }
    if (length >= 2 && length < 3) {
      setLengthLabel("Intermediate");
    }
    if (length >= 3) {
      setLengthLabel("Experienced");
    }
    if (length === 4) {
      setLengthLabel("Advanced");
    }
  }, [length]);
  return (
    <EditableComponent
      source="components/bio/BioSlider.tsx"
      tooltip="Edit Slider"
      changableProps={[
        {
          label: "Thumb Color",
          value: thumbColor,
          onChange: (value) => setThumbColor(value),
        },
        {
          label: "Active Thumb Color",
          value: activeThumbColor,
          onChange: (value) => setActiveThumbColor(value),
        },
        {
          label: "Track Color",
          value: trackColor,
          onChange: (value) => setTrackColor(value),
        },
        {
          label: "Range Color",
          value: rangeColor,
          onChange: (value) => setRangeColor(value),
        },
      ]}
      callableFunctions={[
        {
          label: "Reset Props",
          onClick: () => {
            setTrackColor("$sage12");
            setThumbColor("$mint5");
            setActiveThumbColor("$mint10");
            setRangeColor("$mint5");
            setDisabled(false);
          },
          icon: "ResetIcon",
          toastLabel: "Reset Slider Props",
        },
      ]}
      checkableFunctions={[
        {
          label: "Disable Slider",
          checked: disabled,
          onClick: () => setDisabled(!disabled),
        },
      ]}
    >
      <form>
        <Flex
          css={{
            // shadowLg: "$sky6",
            // backgroundColor: "$sky2",
            padding: "$4",
            width: "30rem",
            "@media (max-width: 475px)": {
              maxWidth: "300px",
              paddingX: "$2",
              paddingY: "$4",
              width: "100%",
              margin: "0 auto",
            },
          }}
          direction="row"
          align="center"
          justify="between"
          gap={5}
        >
          <Flex
            css={{
              minWidth: 100,
            }}
            direction={"column"}
            align="start"
            justify="center"
            gap={2}
          >
            <Label
              css={{
                fontSize: "$2xl",
                fontWeight: "bold",
                "@media (max-width: 375px)": {
                  fontSize: 12,
                },
              }}
            >
              {title}
            </Label>
            <Label
              css={{
                color: "$sky12",
                "@media (max-width: 375px)": {
                  fontSize: 12,
                },
              }}
            >
              {lengthLabel}
            </Label>
          </Flex>
          <StyledSlider
            disabled={disabled}
            defaultValue={[length]}
            max={4}
            orientation="horizontal"
            step={1}
            id="slider"
            name="Bio Length"
            onValueChange={(value) => {
              setLength(value[0]);
            }}
            aria-label="Bio Length"
          >
            <StyledTrack
              css={{
                backgroundColor: trackColor,
              }}
            >
              <StyledRange
                css={{
                  backgroundColor: rangeColor,
                }}
              />
            </StyledTrack>
            <StyledThumb
              css={{
                backgroundColor: thumbColor,
                "&:hover": {
                  backgroundColor: activeThumbColor,
                },
              }}
            ></StyledThumb>
          </StyledSlider>
        </Flex>
      </form>
    </EditableComponent>
  );
}

export default function Frameworks() {
  return (
    <>
      <Framework
        title="React"
        experience={4}
      />
      <Framework title="Figma" experience={3} />
      {/* <EditableCollapsible trigger="Next.js" caption="Experience: 2 years">
        <EditableText
          defaultText="Next.js is a framework that I've been using for a while now.
              I think I understand most of its features now because my main two
              projects at the moment are using it."
        />
      </EditableCollapsible> */}
      <Framework title="Next.js" experience={2} />
      <Framework title="Vue" experience={2} />
      <Framework title="Tailwind" experience={2} />
      <Framework title="Svelte" experience={1} />
    </>
  );
}
