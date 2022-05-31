import Navigation from "../components/Navigation";
import Flex from "../components/Flex";
import Collapsible from "../components/primitives/Collapsible";
import Head from "next/head";
import EditableText from "../components/editableComponents/EditableText";
import Tabs from "../components/primitives/Tabs";
import Project from "../components/work/Project";
import Image from "next/image";

const Preview = () => {
  return (
    <>
      <Image
        alt="Screenshot of site"
        src="/work/dpPreview.png"
        width={500}
        height={700}
      />
    </>
  );
};

function BlackPantherNarratives() {
  return (
    <>
      <Head>
        <title>Alex Rose: Don&apos;t Panic</title>
      </Head>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Flex direction="column" alignItems="center" gap={40}>
          <Navigation defaultValue="DontPanic" />
          <Project
            goal="Create a welcoming environment for Loyola's CS students"
            status="I left the club when I graduated in 2021."
            description="I organized events, was responsible for most communication and co-created the main website for Loyola University Chicago’s main Computer Science club on campus."
            stack={["Next.JS", "React", "TailwindCSS", "Typescript"]}
            accomplishments={[
              "Redid the website to be self-hosted, and much cleaner looking",
              "Transitioned to fully online events/discussions during COVID-19",
              "Helped coordinate with speakers/students/etc",
              "Made new friends :)",
            ]}
            link="https://dont-panic-luc.github.io/"
            preview={<Preview />}
          />
        </Flex>
      </div>
    </>
  );
}

export default BlackPantherNarratives;