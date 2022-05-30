import { useEffect, useState } from "react";
import { styled } from "../stitches.config";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, LaptopIcon } from "@radix-ui/react-icons";
import EditableComponent from "./EditableComponent";
import { sage } from "@radix-ui/colors";
export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState("24px");
  const [color, setColor] = useState('$sage12');
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "dark" ? "light" : "dark";

    setTheme(targetTheme);
    setCount(count + 1);
  }; 
  const Icon = resolvedTheme === "dark" ? MoonIcon : SunIcon;
  return (
    <EditableComponent
      tooltip="Edit Theme Toggle"
      changableProps={[
        {
          label: "Color",
          value: color,
          onChange: (value) => setColor(value),
        },
        {
          label: "Size",
          value: size,
          onChange: (value) => setSize(value),
        },
      ]}
    >
      <div
        aria-label="toggle a light and dark color scheme"
        style={{
          paddingTop: "1rem",
          paddingRight: "1rem",
        }}
        onClick={toggleTheme}
      >
        {count === 0 && (
          <LaptopIcon
            style={{
              color: color,
            }}
            width={size}
            height={size}
          />
        )}
        {count > 0 && (
          <Icon
            style={{
              color: color,
            }}
            width={size}
            height={size}
          />
        )}
      </div>
    </EditableComponent>
  );
}