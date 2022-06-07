import { mint, mintA, sage } from "@radix-ui/colors";
import { useState } from "react";
import EditableComponent from "./EditableComponent";
import EditableText from "./editableComponents/EditableText";
import { ThemeToggle } from "./ThemeToggle";
import {Text} from "./Text";
import Tooltip from "./primitives/Tooltip";
import { styled } from "../stitches.config";
import Link from "next/link";
interface NavbarProps {}

const StyledNavbar = styled("nav", {
  display: "flex",
  alignItems: "center",
});

function Navbar({}: NavbarProps) {
  const [height, setHeight] = useState("10vh");
  const [borderBottom, setBorderBottom] = useState("2px solid $sage7");
  const [justifyContent, setJustifyContent] = useState("space-between");
  return (
    <EditableComponent
      source="components/Navbar.tsx"
      tooltip="Edit the Navbar"
      callableFunctions={[
        {
          label: "Reset Props",
          icon: "ResetIcon",
          onClick: () => {
            setHeight("10vh");
            setBorderBottom(`2px solid ${sage.sage7}`);
            setJustifyContent("space-between");
          },
          toastLabel: "Reset Navbar Props",
        },
      ]}
      changableProps={[
        {
          label: "Height",
          value: height,
          onChange: (value) => {
            setHeight(value);
          },
        },
        {
          label: "Border Bottom",
          value: borderBottom,
          onChange: (value) => {
            setBorderBottom(value);
          },
        },
        {
          label: "Justify Content",
          value: justifyContent,
          onChange: (value) => {
            setJustifyContent(value);
          },
        },
      ]}
    >
      <StyledNavbar
        css={{
          height: height,
          borderBottom: borderBottom,
          justifyContent: justifyContent,
        }}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Tooltip side="bottom" trigger="Sorry, you can't edit me!">
          <Text fontSize={"xl"}>
            <Link
              style={{
                textDecoration: "none",
              }}
              href="/"
            >
              <a
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Alex Rose
              </a>
            </Link>
          </Text>
        </Tooltip>
        <ThemeToggle />
      </StyledNavbar>
    </EditableComponent>
  );
}

export default Navbar;
