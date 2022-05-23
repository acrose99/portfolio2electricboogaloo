import { useState } from "react";
import BioSlider from "./bio/BioSlider";
import BioText from "./bio/BioText";
import Flex from "./Flex";
function Bio() {
  const [length, setLength] = useState(35);
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <BioSlider length={length} setLength={setLength} />
      <BioText length={length} />
    </Flex>
  );
}

export default Bio;
