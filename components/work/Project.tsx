import Tabs from "../primitives/Tabs";
import { styled } from "../../stitches.config";
import EditableText from "../editableComponents/EditableText";
import Stack from "./Stack";
import LinkCom from "./LinkCom";
import Accomplishments from "./Accomplishments";
import React from "react";
import { Separator } from "../primitives/Separator";

type Tab = {
  value: string;
  label: string;
  content: React.ReactNode;
};

interface ProjectProps {
  goal: string;
  status: string;
  description: string;
  stack: string[];
  accomplishments: string[];
  preview: React.ReactNode;
  link?: string;
}

const StyledProject = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "0.5rem",
  backgroundColor: "$sage1",
  boxShadow: `0 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2)`,
  variants: {
    width: {
      sm: {
        width: 400,
      },
      md: {
        width: 500,
      },
      lg: {
        width: 600,
      },
      xl: {
        width: 700,
      },
    },
  },
});

function Project({
  goal,
  status,
  description,
  stack,
  accomplishments,
  preview,
  link,
}: ProjectProps) {
  return (
    <StyledProject
      width={{
        "@initial": "sm",
        "@md": "md",
        "@lg": "lg",
        "@xl": "xl",
      }}
    >
      <Tabs
        defaultValue={goal}
        orientation="horizontal"
        tabs={[
          {
            label: "Goal",
            value: goal,
            content: <EditableText defaultText={goal} />,
          },
          {
            label: "Status",
            value: status,
            content: <EditableText defaultText={status} />,
          },
          {
            label: "Description",
            value: description,
            content: <EditableText defaultText={description} />,
          },
          {
            label: "Preview",
            value: "Preview",
            content: preview,
          },
          {
            label: "Accomplishments",
            value: "Accomplishments",
            content: <Accomplishments accomplishments={accomplishments} />,
          },
        ]}
      />
      <Separator gradient orientation="horizontal" />
      <Stack stack={stack} />
      {link && <LinkCom href={link} />}
    </StyledProject>
  );
}

export default Project;
