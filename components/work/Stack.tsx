import { styled } from "../../stitches.config";
import EditableText from "../editableComponents/EditableText";
import Tag from "./Tag";

interface StackProps {
  stack: string[];
}

const Tags = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
});
function Stack({ stack }: StackProps) {
  return (
    <Tags>
      <EditableText
        defaultColor="$mint11"
        defaultFontWeight="900"
        defaultFontSize="16px"
        defaultText="Stack: "
      />
      {stack.map((item, index) => (
        <Tag key={index} defaultTag={item} />
      ))}
    </Tags>
  );
}

export default Stack;
