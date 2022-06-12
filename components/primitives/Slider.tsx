import React from "react";
import { darkTheme, styled } from "../../stitches.config";
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
  backgroundColor: '$sage12',
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",
  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
});

export const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  backgroundColor: '$mint5',
  borderRadius: "9999px",
  height: "100%",
});

export const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  cursor: "default",
  width: 20,
  height: 20,
  backgroundColor: "$mint9",
  boxShadow: `0 2px 10px $mint7`,
  borderRadius: 10,
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$mint10",
    boxShadow: `0 0 0 2px $mint8`,
  },
  "&:focus": { boxShadow: `0 0 0 5px $sage8}` },
});
