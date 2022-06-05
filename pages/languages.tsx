import Navigation from "../components/Navigation";
import {Flex} from "../components/Flex";
import EditableCollapsible from "../components/editableComponents/EditableCollapsible";
import Head from "next/head";
import EditableText from "../components/editableComponents/EditableText";
function Languages() {
  return (
    <>
      <Head>
        <title>Alex Rose: Frameworks</title>
      </Head>
        <Flex css={{
          marginTop: "50px",
        }} direction="column" align="center" gap={5}>
          <Navigation defaultValue="Languages" />
          <EditableCollapsible
            animated={true}
            trigger="Typescript"
            caption="Experience: 2 years"
          >
            <EditableText
              defaultText="I haven't been using TypeScript for that long of a time,
              but I have fallen in love with it. I have used it for a variety of
              projects, like the Black Panther Narratives project, and this
              website! I would describe my skill level as intermediate.
              I'm comfortable with it and I'm confident I can do a
              tech interview, but I'm by no means an expert (yet)."
            />
          </EditableCollapsible>
          <EditableCollapsible trigger="Javascript" caption="Experience: 3 years">
            <EditableText defaultText="I have been using Javascript for a long time, and I'm very comfortable with it. I first started using it as a sophomore in High School to look up the campaign finances of members of Congress. I really got into web development and the language near the end of my Freshman year in College. Like Typescript, I'm comfortable with it but I won't call myself an expert until later in my career." />
          </EditableCollapsible>
          <EditableCollapsible trigger="Python" caption="Experience: 1 year">
            <EditableText defaultText="Python was the first real language I used, but more recently I've been focused on web development. Regardless, I've used Python for scripting and scraping data and I could pick it back up quicker then other high level programming languages like Java." />
          </EditableCollapsible>
        </Flex>
    </>
  );
}

export default Languages;
