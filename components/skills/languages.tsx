import Navigation from "../Navigation";
import { Flex } from "../Flex";
import EditableCollapsible from "../editableComponents/EditableCollapsible";
import Head from "next/head";
import EditableText from "../editableComponents/EditableText";

interface LanguageProps {
  title: string;
  experience: string;
  description: string;
}
function Language({ title, experience, description }: LanguageProps) {
  return (
    <EditableCollapsible
      css={{
        color: "$sky11",
        border: "1px solid $sky7",
        "&:hover": {
          boxShadow:
            "6px 6px 6px $sky8, -4px -2px 5px $sky9, 4px 6px 3px $sky10",
        },
      }}
      tooltipColor="$sky10"
      animated={true}
      trigger={title}
      caption={experience}
    >
      <EditableText defaultText={description} />
    </EditableCollapsible>
  );
}
function Languages() {
  return (
    <>
      <Language
        title="Typescript"
        experience="Experience: 2 years"
        description="I haven't been using TypeScript for that long of a time,
              but I have fallen in love with it. I have used it for a variety of
              projects, like the Black Panther Narratives project, and this
              website! I would describe my skill level as intermediate.
              I'm comfortable with it and I'm confident I can do a
              tech interview, but I'm by no means an expert (yet)."
      />
      {/* <EditableCollapsible trigger="Javascript" caption="Experience: 3 years">
        <EditableText defaultText="I have been using Javascript for a long time, and I'm very comfortable with it. I first started using it as a sophomore in High School to look up the campaign finances of members of Congress. I really got into web development and the language near the end of my Freshman year in College. Like Typescript, I'm comfortable with it but I won't call myself an expert until later in my career." />
      </EditableCollapsible> */}
      <Language
        title="JavaScript"
        experience="Experience: 3 years"
        description="I've been using Javascript for a long time, and I'm very comfortable with it. I first started using it as a sophomore in High School to look up the campaign finances of members of Congress. I really got into web development and the language near the end of my Freshman year in College. Like Typescript, I'm comfortable with it but I won't call myself an expert until later in my career."
      />
      {/* <EditableCollapsible trigger="Python" caption="Experience: 1 year">
        <EditableText defaultText="Python was the first real language I used, but more recently I've been focused on web development. Regardless, I've used Python for scripting and scraping data and I could pick it back up quicker then other high level programming languages like Java." />
      </EditableCollapsible> */}
      <Language
        title="Python"
        experience="Experience: 1 year"
        description="Python was the first real language I used, but more recently I've been focused on web development. Regardless, I've used Python for scripting and scraping data and I could pick it back up quicker then other high level programming languages like Java."
      />
    </>
  );
}

export default Languages;
