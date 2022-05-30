import { mintA, sage } from "@radix-ui/colors";
import EditableText from "./editableComponents/EditableText";
import EditableComponent from "./EditableComponent";
import { useState } from "react";
import { styled } from "../stitches.config";
import Link from "next/link";

function Footer() {
  const [height, setHeight] = useState("10vh");
  const [borderTop, setBorderTop] = useState(`2px solid ${sage.sage7}`);
  const [justifyContent, setJustifyContent] = useState("space-between");
  return (
    <EditableComponent
      tooltip="Right click to edit the footer"
      changableProps={[
        {
          label: "Height",
          value: height,
          onChange: (value) => setHeight(value),
        },
        {
          label: "Border Top",
          value: borderTop,
          onChange: (value) => setBorderTop(value),
        },
        {
          label: "Justify Content",
          value: justifyContent,
          onChange: (value) => setJustifyContent(value),
        },
      ]}
      callableFunctions={[
        {
          label: "Reset Props",
          toastLabel: "Reset Footer Props",
          icon: "ResetIcon",
          onClick: () => {
            setHeight("10vh");
            setBorderTop(`2px solid ${sage.sage7}`);
            setJustifyContent("space-between");
          },
        },
      ]}
    >
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: justifyContent,
          borderTop: borderTop,
          height: typeof height === "string" ? height : `${height}px`,
          position: "relative",
          zIndex: 10,
        }}
      >
        <EditableText defaultText="Made with React, Next.JS, Vercel, and Love." />
        <EditableText>
          <a
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            href=""
          >
            Github
          </a>
        </EditableText>
        <EditableText>
          <a
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
            href=""
          >
            Design System
          </a>
        </EditableText>
        <EditableText>
          <Link href="/credits">
            <a
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Credits
            </a>
          </Link>
        </EditableText>
      </footer>
    </EditableComponent>
  );
}

export default Footer;
