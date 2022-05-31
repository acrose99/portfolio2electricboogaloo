import { useState } from "react";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";

interface TagProps {
    defaultTag: string;
}
 
const StyledTag = styled("p", {
  padding: "0.2rem 0.5rem",
  borderRadius: "0.25rem",
  backgroundColor: "$sage5",
  color: "$mint11",
  fontSize: "14px",
  lineHeight: "150%",
  marginX: 10,
  transition: "background-color, color 0.4s ease-in-out",
});

function Tag({ defaultTag }: TagProps) {
  const [tag, setTag] = useState(defaultTag);
  const [color, setColor] = useState("$mint11");
  const [fontSize, setFontSize] = useState("14px");
  const [backgroundColor, setBackgroundColor] = useState("$sage5");
  return (
    <EditableComponent
      tooltipOffset={10}
      tooltip="Edit Tag"
      source="components/work/Tag.tsx"
      callableFunctions={[
        {
          label: "Reset Props",
          icon: "ResetIcon",
          onClick: () => {
            setTag(defaultTag);
            setColor("$mint11");
            setFontSize("14px");
            setBackgroundColor("$sage5");
          },
          toastLabel: "Reset Tag",
        },
      ]}
      changableProps={[
        {
          label: "tag",
          value: tag,
          onChange: (value: string) => setTag(value),
        },
        {
          label: "color",
          value: color,
          onChange: (value: string) => setColor(value),
        },
        {
          label: "fontSize",
          value: fontSize,
          onChange: (value: string) => setFontSize(value),
        },
        {
          label: "backgroundColor",
          value: backgroundColor,
          onChange: (value: string) => setBackgroundColor(value),
        },
      ]}
    >
      <StyledTag
        css={{
          color: color,
          fontSize: fontSize,
          backgroundColor: backgroundColor,
        }}
      >
        {tag}
      </StyledTag>
    </EditableComponent>
  );
}

export default Tag;