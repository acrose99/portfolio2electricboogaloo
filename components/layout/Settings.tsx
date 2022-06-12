import { GearIcon } from "@radix-ui/react-icons";
import { Icon } from "@radix-ui/react-select";
import { count } from "console";
import { useTheme } from "next-themes";
import { useContext, useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowDimensions";
import { SettingContext } from "../../pages/_app";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import Dropdown from "../primitives/Dropdown";
import DefaultColors from "./Settings/DefaultColors";

const IconButton = styled("button", {
  border: "none",
  background: "transparent",
  outline: "none",
  "&:hover": {
    cursor: "pointer",
  },
});
interface SettingsProps {}

function Settings({}: SettingsProps) {
  const { setSettings, settings, defaultColors, setDefaultColor } =
    useContext(SettingContext);
  let size = useWindowSize();
  const [settingsDisabled, setSettingsDisabled] = useState(false);
  useEffect(() => {
    let size = window.innerWidth;
    if (size <= 428) {
      setSettings({
        enableEditing: false,
        displayTooltips: false,
      });
      setSettingsDisabled(true);
    }
    else {
      setSettingsDisabled(false);
    }
  }, [setSettings, size]);
  return (
    <Dropdown
      githubLink="https://github.com/acrose99/portfolio2electricboogaloo/"
      checkableFunctions={[
        {
          label: "Enable Editing",
          checked: settings.enableEditing,
          onClick: () =>
            setSettings({
              ...settings,
              enableEditing: !settings.enableEditing,
            }),
          disabled: settingsDisabled,
        },
        {
          label: "Display Tooltips",
          checked: settings.displayTooltips,
          onClick: () => {
            setSettings({
              ...settings,
              displayTooltips: !settings.displayTooltips,
            });
          },
          disabled: settingsDisabled,
        },
      ]}
      extraDropdownMenus={[
        {
          label: "Default Colors",
          children: <DefaultColors setDefaultColor={setDefaultColor} />,
        },
      ]}
    >
      <IconButton
        css={{
          color: "$sage12",
        }}
      >
        <GearIcon width={24} height={24} />
      </IconButton>
    </Dropdown>
  );
}

export default Settings;
