import { mintA, sage } from "@radix-ui/colors";
import EditableText from "./editableComponents/EditableText";
import EditableComponent from "./EditableComponent";
import { useState } from "react";
import { styled } from "../stitches.config";
import Link from "next/link";
const StyledFooter = styled("footer", {
  variants: {
    flexDirection: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
        paddingRight: "10rem",
      },
    },
  },
});

function Footer() {
  const [verticalPadding, setVerticalPadding] = useState("2vh");
  const [borderTop, setBorderTop] = useState(`2px solid $sage7`);
  const [justifyContent, setJustifyContent] = useState("space-between");
  return (
    <EditableComponent
      tooltip="Right click to edit the footer"
      changableProps={[
        {
          label: "Vertical Padding",
          value: verticalPadding,
          onChange: (value) => setVerticalPadding(value),
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
            setVerticalPadding("10vh");
            setBorderTop(`2px solid ${sage.sage7}`);
            setJustifyContent("space-between");
          },
        },
      ]}
    >
      <StyledFooter
        flexDirection={{
          "@initial": "column",
          "@md": "row",
        }}
        css={{
          paddingY: verticalPadding,
          borderTop: borderTop,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: justifyContent,
          height: "100%",
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
            href="https://github.com/acrose99"
          >
            Github
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
      </StyledFooter>
    </EditableComponent>
  );
}

export default Footer;
