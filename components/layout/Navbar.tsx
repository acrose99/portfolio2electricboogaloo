import { useState } from "react";
import EditableComponent from "../EditableComponent";
import { ThemeToggle } from "./ThemeToggle";
import { styled } from "../../stitches.config";
import HomeLink from "./HomeLink";
import Settings from "./Settings";
import { Flex } from "../Flex";
interface NavbarProps {}

const StyledNavbar = styled("nav", {
  display: "flex",
  alignItems: "center",
});

function Navbar({}: NavbarProps) {
  const [height, setHeight] = useState("10vh");
  const [borderBottom, setBorderBottom] = useState("2px solid");
  const [borderBottomColor, setBorderBottomColor] = useState("$sage7");
  const [justifyContent, setJustifyContent] = useState("space-between");
  const [background, setBackground] = useState("$navbg");
  return (
    <div
      aria-hidden={true}
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <EditableComponent
        source="components/Navbar.tsx"
        tooltip="Edit the Navbar"
        triggerAsChild={true}
        callableFunctions={[
          {
            label: "Reset Props",
            icon: "ResetIcon",
            onClick: () => {
              setHeight("10vh");
              setBackground("$mint1");
              setBorderBottom("2px solid");
              setBorderBottomColor(`$sage7`);
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
            label: "Background",
            value: background,
            onChange: (value) => {
              setBackground(value);
            }
          },
          {
            label: "Border Bottom",
            value: borderBottom,
            onChange: (value) => {
              setBorderBottom(value);
            },
          },
          {
            label: "Border Color",
            value: borderBottomColor,
            onChange: (value) => {
              setBorderBottomColor(value);
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
            borderBottomColor: borderBottomColor,
            justifyContent: justifyContent,
            display: "flex",
            alignItems: "center",
            position: "sticky",
            background: background,
          }}
        >
          <HomeLink />
          <Flex gap={5} justify="end">
            <Settings />
            <ThemeToggle />
          </Flex>
        </StyledNavbar>
      </EditableComponent>
    </div>
  );
}

export default Navbar;
