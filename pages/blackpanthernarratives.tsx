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
        <title>Alex Rose: Black Panther Narratives</title>
      </Head>
      <Flex
        css={{
          marginY: "50px",
        }}
        direction="column"
        align="center"
        gap={5}
      >
        <Navigation defaultValue="BlackPantherNarratives" />
        <Project
          goal="We want to educate the public and continue the legacy of the Black Panthers"
          status="To be released in 2022 or 2023. Contact me for more information."
          description="To this end, we are making an exhibit with the Chicago History Museum to showcase and educate people about the legacy of the Black Panthers, in Chicago. The website is built using React/Next.JS, using Tailwind for styling, and Figma for prototyping and wireframes."
          stack={["Next.JS", "React", "TailwindCSS", "Typescript"]}
          accomplishments={[
            "Made a no-code workflow for historians to add to the site",
            "Made narrative stories for the site",
            "Mapbox integration to show the location of the stories",
            "A lot more that I can't list",
          ]}
          preview={<Preview />}
        />
      </Flex>
    </>
  );
}

export default BlackPantherNarratives;
