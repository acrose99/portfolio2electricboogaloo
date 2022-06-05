import {Flex} from "../components/Flex";
import Navigation from "../components/Navigation";
import ResumeCom from "../components/resume";

function Resume() {
  return (
    <section
      style={{
        marginBottom: "100px",
      }}
    >
      <Flex
        css={{
          marginTop: "50px",
        }}
        gap={5}
        direction="column"
        align="center"
      >
        <Navigation defaultValue="Resume" />
        <ResumeCom />
      </Flex>
    </section>
  );
}

export default Resume;
