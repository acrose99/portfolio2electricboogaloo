import Navigation from "../components/Navigation";
import { Flex } from "../components/Flex";
import Collapsible from "../components/primitives/Collapsible";
import Head from "next/head";
import EditableText from "../components/editableComponents/EditableText";
import Tabs from "../components/primitives/Tabs";
import Project from "../components/work/Project";
import Image from "../components/Image";

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

function DontPanic() {
  return (
    <>
      <Head>
        <title>Alex Rose: Don&apos;t Panic</title>
      </Head>
      <Flex direction="column" align="center" gap={5}>
        <Project
          goal="The overarching goal of Don't Panic is to create a welcoming environment for Loyola's CS students"
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
    </>
  );
}

export default DontPanic;
