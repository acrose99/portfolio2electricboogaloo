import {
  StyledThumb,
  StyledSlider,
  StyledRange,
  StyledTrack,
} from "../primitives/Slider";
import Label from "../primitives/Label";
import { Spacer } from "../Spacer";
import Flex from "../Flex";
import { useEffect, useState } from "react";
import EditableComponent from "../EditableComponent";

interface BioSliderProps {
  length: number;
  setLength: (length: number) => void;
}

function BioSlider({ length, setLength }: BioSliderProps) {
  const [lengthLabel, setLengthLabel] = useState("Concise");
  const [trackColor, setTrackColor] = useState("$sage12");
  const [thumbColor, setThumbColor] = useState("$mint5");
  const [activeThumbColor, setActiveThumbColor] = useState("$mint10");
  const [rangeColor, setRangeColor] = useState("$mint5");
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
      tooltip="Right Click"
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
    >
      <form>
        <Flex direction="row" alignItems="center" justifyContent="center">
          <Label>Bio Length: {lengthLabel}</Label>
          <StyledSlider
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
                '&:hover': {
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