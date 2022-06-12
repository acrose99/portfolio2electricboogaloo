import { useContext, useEffect, useState } from "react";
import { Text } from "../Text";
import EditableComponent from "../EditableComponent";
import Tooltip from "../primitives/Tooltip";
import { SettingContext } from "../../pages/_app";

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
  const isEditable = useContext(SettingContext).settings.enableEditing;
  return (
    <>
      {isEditable ? (
        <EditableComponent
          // designSystem="Text"
          source="components/editableComponents/EditableText.tsx"
          callableFunctions={[
            {
              icon: "CopyIcon",
              label: "Copy Text",
              /* copies the text to the clipboard */
              onClick: () => {
                navigator.clipboard.writeText(text);
              },
              toastLabel: "Copied to clipboard",
            },
            {
              label: "Reset Props",
              /* resets the text to the default */
              onClick: () => {
                setText(defaultText);
                setColor(defaultColor);
                setFontSize(defaultFontSize);
                setFontWeight(defaultFontWeight);
                setFontStyle("normal");
                setLineHeight("150%");
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
          tooltip="Edit Text"
          triggerAsChild={false}
        >
          <>
            {children && (
              <Text
                css={{
                  lineHeight: lineHeight,
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  fontStyle: fontStyle,
                  color: color,
                }}
              >
                {children}
              </Text>
            )}
            <Text
              css={{
                lineHeight: lineHeight,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                color: color,
              }}
            >
              {text}
            </Text>
          </>
        </EditableComponent>
      ) : (
        <>
          {children && (
            <Text
              css={{
                lineHeight: lineHeight,
                fontSize: fontSize,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                color: color,
              }}
            >
              {children}
            </Text>
          )}
          <Text
            css={{
              lineHeight: lineHeight,
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontStyle: fontStyle,
              color: color,
            }}
          >
            {text}
          </Text>
        </>
      )}
    </>
  );
}

export default EditableText;
