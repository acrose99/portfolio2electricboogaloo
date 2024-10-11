import { useContext, useEffect, useState } from "react";
import BioSlider from "./bio/BioSlider";
import BioText from "./bio/BioText";
import { Flex } from "./Flex";
import { Text } from "./Text";
import Image from "next/image";
import { useWindowSize } from "../hooks/useWindowDimensions";
import { SettingContext } from "../pages/_app";
import BioImage from "./bio/BioImage";
import { mint, mintA, mintDark, mintDarkA } from "@radix-ui/colors";
import { darkTheme } from "../stitches.config";
import EditableText from "./editableComponents/EditableText";
function Bio() {
  const [length, setLength] = useState(0);
  return (
    <Flex
      css={{
        paddingX: "1rem",
        paddingBottom: 100,
        width: "100%",
      }}
      direction="column"
      align="center"
      justify="center"
    >
      <BioSlider length={length} setLength={setLength} />
      <BioText length={length} />
      <BioImage />
    </Flex>
  );
}

export default Bio;
