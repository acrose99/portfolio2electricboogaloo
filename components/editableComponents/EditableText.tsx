import { useEffect, useState } from "react";
import { Text } from "../Text";
import EditableComponent from "../EditableComponent";
import create from "zustand";

interface EditableTextProps {
  defaultText: string;
  defaultColor?: string;
  defaultFontSize?: string;
  defaultFontWeight?: string;
}


function EditableText({
  defaultText,
  defaultColor = "$sage11",
  defaultFontSize = "24",
  defaultFontWeight = "400",
}: EditableTextProps) {
  const [text, setText] = useState(defaultText);
  const [color, setColor] = useState(defaultColor);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight);
  useEffect(() => {
    setText(defaultText);
    setColor(defaultColor);
    setFontSize(defaultFontSize);
    setFontWeight(defaultFontWeight);
  }
  , [defaultText, defaultColor, defaultFontSize, defaultFontWeight]);
  return (
    <EditableComponent
      callableFunctions={[
        {
          label: "Alert",
          onClick: () => alert("Alert!"),
        },
        {
          label: "Copy",
          /* copies the text to the clipboard */
          onClick: () => navigator.clipboard.writeText(text),
        },
      ]}
      checkableFunctions={[]}
      changableProps={[
        {
          label: "Text",
          value: text,
          onChange: (value) => setText(value),
        },
        {
          label: "Color",
          value: color,
          onChange: (value) => setColor(value),
        },
        {
          label: "Font Size",
          value: fontSize,
          onChange: (value) => setFontSize(value),
        },
        {
          label: "Font Weight",
          value: fontWeight,
          onChange: (value) => setFontWeight(value),
        },
      ]}
      tooltip="Right Click"
    >
      <Text
        css={{
          color: color,
          fontWeight: fontWeight,
          fontSize: fontSize + "px",
        }}
      >
        {text}
      </Text>
    </EditableComponent>
  );
}

export default EditableText;
