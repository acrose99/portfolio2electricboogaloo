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
      src="/work/hocPreview.png" width={600} height={600} />
    </>
  );
}


function HistoryOfComputing() {
  return (
    <>
      <Head>
        <title>Alex Rose: History Of Computing</title>
      </Head>
      <div
        style={{
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Flex direction="column" alignItems="center" gap={40}>
          <Navigation defaultValue="HistoryOfComputing" />
          <Project
            goal="As a Mulachy Fellow, I was tasked to make a front-end website meant to visualize the History of Computing in a unique way."
            status="Completed, in 2020,  when I finished my Mulachy Fellowship, but I now update it infrequently"
            description="Visualized the History of Computing in a unique way, by highlighting other historical fields like the history of culture, ancient history, etc. The website was built with Next.JS/React, hosted on Vercel, and designed partially on Figma. I managed a team of two students (in cooperation with the Loyola Software Systems Laboratory) for a majority of the fellowship and reported to a professor."
            stack={["Next.JS", "React", "Vercel", "Typescript/Javascript", "Figma"]}
            accomplishments={[
              "Learned to use Next.JS to build a website",
              "Wrote way too much actual history (~40 pages)",
              "The UX of filtering through events, to my knowledge, hasen't been replicated",
              "Learned a ton about Web Development generally",
            ]}
            link="https://history-of-computing.vercel.app/Timeline/all"
            preview={<Preview />}
          />
        </Flex>
      </div>
    </>
  );
}

export default HistoryOfComputing;
