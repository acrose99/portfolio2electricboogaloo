import { useState } from "react";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import EditableText from "../editableComponents/EditableText";

interface AccomplishmentProps {
  defaultAccomplishment: string;
  index: number;
}

const StyledAccomplishment = styled("p", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "$sage12",
  fontSize: "14px",
  lineHeight: "150%",
});

const StyledAccomplishmentIndex = styled("span", {
  color: "$mint11",
  marginRight: "0.5rem",
});

function Tag({ defaultAccomplishment, index }: AccomplishmentProps) {
  const [accomplishment, setAccomplishment] = useState(defaultAccomplishment);
  return (
    <>
      <StyledAccomplishment>
        <StyledAccomplishmentIndex>{index + 1}.</StyledAccomplishmentIndex>
        <EditableText defaultText={accomplishment} />
      </StyledAccomplishment>
    </>
  );
}

export default Tag;
