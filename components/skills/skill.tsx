import { styled } from "@stitches/react";
import StitchesLogo from "../StitchesLogo";
import React from "react";
import { darkTheme } from "../../stitches.config";

interface Props {
  title: string;
  experience: string;
  description: string;
  logo: React.ReactNode;
}

const StyledDiv = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "$mint2",
  padding: "10px",
  border: "3px solid $mint7",
  borderRadius: "8px",
  width: "20rem",
  boxShadow:
    " 0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
  gap: "5px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$mint3",
    [`.${darkTheme} &`]: {
      backgroundColor: "$mint2",
    },
    border: "3px solid $mint8",
    boxShadow:
      "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.20)",
    transform: "scale(1.01)",
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$mint1",
    border: "3px solid $mint5",
  },
});
const StyledTitle = styled("p", {
  fontSize: "16px",
  fontWeight: "bold",
  color: "$mauve11",
  margin: "0",
  padding: "0",
});
const StyledExperience = styled("p", {
  fontSize: "14px",
  fontWeight: "medium",
  fontStyle: "italic",
  color: "$mauve11",
  margin: "0",
  padding: "0",
});
const StyledDescription = styled("p", {
  fontSize: "14px",
  fontWeight: "medium",
  color: "$mauve10",
  margin: "0",
  padding: "0",
});

function Skill(props: Props) {
  const {} = props;
  return (
    <StyledDiv>
      <div
        style={{
          marginRight: "12px",
        }}
      >
        {props.logo}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <StyledTitle>{props.title}</StyledTitle>
        <StyledExperience>{props.experience}</StyledExperience>
        <StyledDescription>{props.description}</StyledDescription>
      </div>
    </StyledDiv>
  );
}

export default Skill;
