import { mintA, sage } from "@radix-ui/colors";
import EditableText from "../editableComponents/EditableText";
import EditableComponent from "../EditableComponent";
import { useState } from "react";
import { styled } from "../../stitches.config";
import Link from "next/link";
import { Flex } from "../Flex";
const StyledFooter = styled("footer", {
  variants: {
    flexDirection: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
  },
});

function Footer() {
  const [verticalPadding, setVerticalPadding] = useState("2vh");
  const [borderTop, setBorderTop] = useState("2px solid");
  const [borderTopColor, setBorderTopColor] = useState(`$sage7`);
  const [justifyContent, setJustifyContent] = useState("center");
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
          label: "Border Top Color",
          value: borderTopColor,
          onChange: (value) => setBorderTopColor(value),
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
            setVerticalPadding("2vh");
            setBorderTop(`2px solid ${sage.sage7}`);
            setBorderTopColor(`$sage7`);
            setJustifyContent("center");
          },
        },
      ]}
    >
      <StyledFooter
        css={{
          paddingY: verticalPadding,
          borderTop: borderTop,
          borderTopColor: borderTopColor,
          position: "relative",
        }}
      >
        <Flex
          direction={{
            "@initial": "column",
            "@md": "row",
          }}
          align="center"
          /* @ts-ignore */
          justify={justifyContent}
          gap={{
            "@initial": "4",
            "@md": "9",
          }}
        >
          <EditableText defaultText="Made with React, Next.JS, Vercel, and Love." />
          <EditableText>
            <Link href="/design">
              <a
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  whiteSpace: "nowrap",
                }}
              >
                Design System
              </a>
            </Link>
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
        </Flex>
      </StyledFooter>
    </EditableComponent>
  );
}

export default Footer;
