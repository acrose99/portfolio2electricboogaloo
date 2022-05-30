import Flex from "../components/Flex";
import Navigation from "../components/Navigation";
import ResumeCom from "../components/resume";

function Resume() {
  return (
    <section style={{
        marginTop: "100px",
        marginBottom: "100px",
    }}>
      <Flex gap={20} direction="column" alignItems="center">
        <Navigation defaultValue="Resume" />
        <ResumeCom />
      </Flex>
    </section>
  );
}

export default Resume;
