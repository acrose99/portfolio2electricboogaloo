import { useEffect, useState } from "react";
import Text from "../Text";
import EditableComponent from "../EditableComponent";
import Tooltip from "../primitives/Tooltip";

interface EditableTextProps {
  children?: React.ReactNode;
  defaultText?: string;
  defaultColor?: string;
  defaultFontSize?: string;
  defaultFontWeight?: string;
  defaultLineHeight?: string;
}

function EditableText({
  children,
  defaultText,
  defaultColor = "$sage12",
  defaultFontSize = "14px",
  defaultFontWeight = "400",
  defaultLineHeight = "150%",
}: EditableTextProps) {
  const [text, setText] = useState(defaultText);
  const [color, setColor] = useState(defaultColor);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight);
  const [fontStyle, setFontStyle] = useState("normal");
  const [lineHeight, setLineHeight] = useState(defaultLineHeight);
  return (
    <EditableComponent
      // designSystem="Text"
      source="components/editableComponents/EditableText.tsx"
      callableFunctions={[
        {
          icon: "CopyIcon",
          label: "Copy Text",
          /* copies the text to the clipboard */
          onClick: () => {navigator.clipboard.writeText(text)},
          toastLabel: "Copied to clipboard",
        },
        // {
        //   icon: "PlusIcon",
        //   label: "Duplicate",
        //   /* Duplicates the Component in the DOM */
        //   onClick: () => {
        //     const newElement = document.createElement("div");
        //     newElement.innerHTML = text;
        //     newElement.style.color = color;
        //     newElement.style.fontSize = fontSize;
        //     newElement.style.fontWeight = fontWeight;
        //     document.getElementById("editable-text").appendChild(newElement);
        //   },
        // },
        {
          label: "Reset Props",
          /* resets the text to the default */
          onClick: () => {
            setText(defaultText);
            setColor(defaultColor);
            setFontSize(defaultFontSize);
            setFontWeight(defaultFontWeight);
            setFontStyle("normal");
            setLineHeight("24px");
          },
          icon: "ResetIcon",
          toastLabel: "Reset Props",
        },
      ]}
      changableProps={[
        !children && {
          label: "Text",
          value: children ? children : text,
          onChange: (value: string) => setText(value),
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
        {
          label: "Font Style",
          value: fontStyle,
          onChange: (value) => setFontStyle(value),
        },
        {
          label: "Line Height",
          value: lineHeight,
          onChange: (value) => setLineHeight(value),
        },
      ]}
    >
      <Tooltip sideOffset={10} triggerAsChild={false} trigger="Edit Text">
        {children && (
          <Text
            lineHeight={lineHeight}
            fontStyle={fontStyle}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
          >
            {children}
          </Text>
        )}
        <Text
          lineHeight={lineHeight}
          fontStyle={fontStyle}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={color}
        >
          {text}
        </Text>
      </Tooltip>
    </EditableComponent>
  );
}

export default EditableText;
