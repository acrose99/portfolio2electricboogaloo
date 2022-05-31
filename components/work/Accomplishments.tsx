import { styled } from "../../stitches.config";
import EditableText from "../editableComponents/EditableText";
import Accomplishment from "./Accomplishment";
import Tag from "./Tag";

interface AccomplishmentsProps {
  accomplishments: string[];
}

const StyledAccomplishments = styled("div", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  padding: 0,
  alignItems: "center",
  justifyContent: "center",
});
function Accomplishments({ accomplishments }: AccomplishmentsProps) {
  return (
    <StyledAccomplishments>
      {accomplishments.map((item, index) => (
        <Accomplishment
          key={index}
          index={index}
          defaultAccomplishment={item}
        />
      ))}
    </StyledAccomplishments>
  );
}

export default Accomplishments;
