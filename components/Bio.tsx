import { useContext, useEffect, useState } from "react";
import BioSlider from "./bio/BioSlider";
import BioText from "./bio/BioText";
import { Flex } from "./Flex";
import Image from "next/image";
import { useWindowSize } from "../hooks/useWindowDimensions";
import { SettingContext } from "../pages/_app";
function Bio() {
  const [length, setLength] = useState(25);
  const size = useWindowSize();
  const settings = useContext(SettingContext);
  useEffect(() => {
    if (size.width < 400) {
      alert(
        "Hi! This website is meant to be edited, but it looks like you're using a mobile device. Consider using a computer :)"
      );
    }
  }, [size]);
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
      <Image
        src="/plantyboi.png"
        alt="Computer in a field of grass with trees"
        priority={true}
        width={400}
        height={400}
        quality={100}
      />
    </Flex>
  );
}

export default Bio;
