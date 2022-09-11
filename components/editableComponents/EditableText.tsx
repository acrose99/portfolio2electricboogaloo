import { useContext, useEffect, useState } from "react";
import { Text } from "../Text";
import EditableComponent from "../EditableComponent";
import Tooltip from "../primitives/Tooltip";
import { SettingContext } from "../../pages/_app";
import type * as Stitches from "@stitches/react";

interface EditableTextProps {
  children?: React.ReactNode;
  defaultText?: string;
  defaultColor?: string;
  defaultFontFamily?: string;
  defaultFontSize?: string;
  defaultFontWeight?: string;
  defaultLineHeight?: string;
  css?: Stitches.CSS
}

function EditableText({
  children,
  defaultText,
  defaultColor = "$sage12",
  defaultFontSize = "14px",
  defaultFontFamily = "$inter",
  defaultFontWeight = "400",
  defaultLineHeight = "150%",
  css,
}: EditableTextProps) {
  const [text, setText] = useState(defaultText);
  const [color, setColor] = useState(defaultColor);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [fontFamily, setFontFamily] = useState(defaultFontFamily);
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
              label: "Reset Props",
              /* resets the text to the default */
              onClick: () => {
                setText(defaultText);
                setColor(defaultColor);
                setFontSize(defaultFontSize);
                setFontFamily(defaultFontFamily);
                setFontWeight(defaultFontWeight);
                setFontStyle("normal");
                setLineHeight("150%");
              },
              icon: "ResetIcon",
              toastLabel: "Reset Props",
            },
            {
              icon: "ClipboardCopyIcon",
              label: "Copy Text",
              /* copies the text to the clipboard */
              onClick: () => {
                if (text) {
                  navigator.clipboard.writeText(text);
                } else {
                  navigator.clipboard.writeText(children.toString());
                }
              },
              toastLabel: "Copied to clipboard",
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
              label: "Font Family",
              value: fontFamily,
              onChange: (value) => setFontFamily(value),
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
                  fontFamily: fontFamily,
                  fontWeight: fontWeight,
                  fontStyle: fontStyle,
                  color: color,
                  ...css,
                }}
              >
                {children}
              </Text>
            )}
            <Text
              css={{
                lineHeight: lineHeight,
                fontSize: fontSize,
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                color: color,
                ...css,
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
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                fontStyle: fontStyle,
                color: color,
                ...css,
              }}
            >
              {children}
            </Text>
          )}
          <Text
            css={{
              lineHeight: lineHeight,
              fontSize: fontSize,
              fontFamily: fontFamily,
              fontWeight: fontWeight,
              fontStyle: fontStyle,
              color: color,
              ...css,
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
