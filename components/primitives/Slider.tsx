import React from "react";
import { styled } from "../../stitches.config";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { mint, sage } from "@radix-ui/colors";
import { CheckIcon } from "@radix-ui/react-icons";


export const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  paddingY: 20,
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 20,
    height: 100,
  },
});

export const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: sage.sage12,
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

export const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  backgroundColor: mint.mint5,
  borderRadius: "9999px",
  height: "100%",
});

export const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  width: 20,
  height: 20,
  backgroundColor: mint.mint9,
  boxShadow: `0 2px 10px ${sage.sage7}`,
  borderRadius: 10,
  transition: "background-color 0.2s ease-in-out",
  "&:hover": { backgroundColor: mint.mint10 },
  "&:focus": { boxShadow: `0 0 0 5px ${sage.sage8}` },
});
