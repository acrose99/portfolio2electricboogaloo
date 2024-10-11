import {
  StyledThumb,
  StyledSlider,
  StyledRange,
  StyledTrack,
} from "../primitives/Slider";
import { Label } from "../primitives/Label";
import { Spacer } from "../Spacer";
import { Flex } from "../Flex";
import { useEffect, useState } from "react";
import EditableComponent from "../EditableComponent";

interface BioSliderProps {
  length: number;
  setLength: (length: number) => void;
}

function BioSlider({ length, setLength }: BioSliderProps) {
  const [lengthLabel, setLengthLabel] = useState("Concise");
  const [trackColor, setTrackColor] = useState("$mint12");
  const [thumbColor, setThumbColor] = useState("$mint5");
  const [activeThumbColor, setActiveThumbColor] = useState("$mint10");
  const [rangeColor, setRangeColor] = useState("$mint11");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (length < 25) {
      setLengthLabel("Only the basics");
    }
    if (length >= 25 && length < 50) {
      setLengthLabel("Concise");
    }
    if (length >= 50 && length < 75) {
      setLengthLabel("Detailed");
    }
    if (length >= 75) {
      setLengthLabel("Comprehensive");
    }
    if (length === 100) {
      setLengthLabel("Stalker Mode");
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
            "@media (max-width: 375px)": {
              width: "70%",
              margin: "0 auto",
            },
          }}
          direction="row"
          align="center"
          justify="center"
          gap={5}
        >
          <Label
            css={{
              "@media (max-width: 375px)": {
                fontSize: 12,
              },
            }}
          >
            Length: {lengthLabel}
          </Label>
          <StyledSlider
            disabled={disabled}
            defaultValue={[length]}
            max={100}
            orientation="horizontal"
            step={2}
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
            />
          </StyledSlider>
        </Flex>
      </form>
    </EditableComponent>
  );
}

export default BioSlider;
