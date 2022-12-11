import Navigation from "../components/Navigation";
import {Flex} from "../components/Flex";
import Collapsible from "../components/primitives/Collapsible";
import Head from "next/head";
import EditableText from "../components/editableComponents/EditableText";
import Tabs from "../components/primitives/Tabs";
import Project from "../components/work/Project";
import ImageComponent from "../components/Image";

const Preview = () => {
  return (
    <>
      <ImageComponent
        alt="Screenshot of BLack Panther Narratives"
        src="/work/bpPreview.png"
        width={1000}
        height={600}
      />
    </>
  );
};

function BlackPantherNarratives() {
  return (
    <>
      <Head>
        <title>Alex Rose: Digital Exhibit Concept</title>
      </Head>
      <Flex
        css={{
          marginY: "50px",
        }}
        direction="column"
        align="center"
        gap={5}
      >
        <Navigation defaultValue="digitalexhibit" />
        <Project
          goal="We want to raise the storytelling and educational potential of digital exhibits. It should be easy for historians to create digital exhibits, and we want to make it fun for people to learn about history through these sites. "
          status="Completed, but I may add a way to make this easier to use for historians in the future."
          description="To this end, we are making an conceptual exhibit about the Black Panthers in Chicago, with material from the Chicago History Museum. The website is built using React/Next.JS, using Tailwind for styling, and Figma for prototyping and wireframes."
          stack={["Next.JS", "React", "TailwindCSS", "Typescript"]}
          accomplishments={[
            "Contains a no-code workflow for historians to add to the site",
            "Ability to make narrative stories that tie into a museum or archive",
            "Stories can contain images, videos, and text",
            "Mapbox integration to show relevant locations",
            "Accessible design",
          ]}
          preview={<Preview />}
          link="https://digital-humanities-concept-acrose99.vercel.app/"
        />
      </Flex>
    </>
  );
}

export default BlackPantherNarratives;
