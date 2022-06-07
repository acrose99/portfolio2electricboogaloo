import Image from "next/image";
import {Flex} from "../components/Flex";
import Navigation from "../components/Navigation";

function Resume() {
  return (
    <section
      style={{
        marginBottom: "100px",
      }}
    >
      <Flex
        css={{
          marginY: "50px",
        }}
        gap={5}
        direction="column"
        align="center"
      >
        <Navigation defaultValue="Resume" />
        <Image
         quality={100}
         objectFit="contain"
         priority={true}
         alt="Resume" height={1000} width={800} src="/Resume.jpg" />
      </Flex>
    </section>
  );
}

export default Resume;
