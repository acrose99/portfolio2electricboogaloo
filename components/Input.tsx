import { mint } from "@radix-ui/colors";
import { styled } from "../stitches.config";

const StyledInput = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
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
  boxShadow: `0 0 0 1px $mint6`,
  height: 25,
});

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props} />;
}

export default Input;
