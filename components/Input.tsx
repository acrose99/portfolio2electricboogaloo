import { mint } from "@radix-ui/colors";
import { styled } from "../stitches.config";

export const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "flex",
  alignItems: "center",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint11",
  "&::selection": {
    backgroundColor: "$mint3",
    color: "$sage12",
  },
  "&:hover": {
    boxShadow: "0 0 0 2px $mint8",
  },
  "&:focus": { boxShadow: `0 0 0 2px $mint7` },
  "&active": {
    boxShadow: `0 0 0 2px $mint7`,
  },
  height: 25,
  boxShadow: `0 0 0 1px $mint6`,
  variants: {
    inputType: {
      color: {
        height: "2rem",
        width: "3rem",
        maxWidth: "5rem",
        padding: 0,
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
      date: {
        maxWidth: "20rem",
      },
      number: {
        maxWidth: "10rem",
      }
    },
  },
});
