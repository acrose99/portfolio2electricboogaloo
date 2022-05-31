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
        src="/work/threeJSPreview.webp"
        width={400}
        height={400}
        quality={100}
      />
    </>
  );
};

function BlackPantherNarratives() {
  return (
    <>
      <Head>
        <title>Alex Rose: ThreeJS Snippets</title>
      </Head>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Flex direction="column" alignItems="center" gap={40}>
          <Navigation defaultValue="threeJSSnippets" />
          <Project
            goal="Create a VScode Extension for React Three Fiber and Vanilla Three.JS"
            status="Finished in 2021. Available on the VScode Marketplace."
            description="A VSCode extension that provides Three.JS snippets to speed up  Three.JS development. Snippets exist for the popular framework React Three Fiber (R3F) and Three.js on its own, for Typescript and Javascript. Specifically, it is the only extension on the marketplace that provides general functions for Three.JS, both for R3F as well as for the core library. The snippets contain initial starter functions as well as general constructors/objects."
            stack={["ThreeJS", "React", "Typescript", "Javascript"]}
            accomplishments={[
              "~5,500 installs",
              "Only extension for React Three Fiber (or at least last time I checked)",
              "I can now flex to my friends that I have a VS Code Extension that people use",
            ]}
            link="https://marketplace.visualstudio.com/items?itemName=aerokaido.three-js-snippets"
            preview={<Preview />}
          />
        </Flex>
      </div>
    </>
  );
}

export default BlackPantherNarratives;
