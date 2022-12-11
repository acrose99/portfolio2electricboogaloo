import { mint, mintA, mintDarkA } from "@radix-ui/colors";
import { Text } from "../Text";
import { slides } from "./constants";
import EditableText from "../editableComponents/EditableText";
import { darkTheme } from "../../stitches.config";
interface BioStyledTextProps {
  length: number;
}

function BioIntroStyledText() {
  return (
    <EditableText
      defaultFontFamily="$oleoSwash"
      defaultFontSize="$5xl"
      defaultColor="$mint11"
      css={{
        textAlign: "center",
        filter: `drop-shadow(0px 5px 10px ${mintA.mintA10})`,
        [`.${darkTheme} &`]: {
          filter: `drop-shadow(0px 5px 10px ${mintDarkA.mintA8})`,
        },
      }}
    >
      Hey! My name is Alex Rose.
    </EditableText>
  );
}

function BioBasicsText() {
  return (
    <EditableText>
      I&apos;m a Software Engineer making websites at{" "}
      <a href="https://cccis.com/about/">CCC</a>.
    </EditableText>
  );
}
function BioConciseText() {
  return (
    <EditableText>
      I went to Loyola University Chicago and studied Computer Science. I
      graduated in 2021 with a B.S with a Minor in History.
      I was also the Vice President of Loyola’s computer science club for a
      while. Now, I&apos;m an Software Engineer at{" "}
      <a href="https://cccis.com/about/">CCC</a> doing frontend development.
      <br /> <br />
      I&apos;m extremely passionate about using tech for good, and most of my
      career and side projects have been focused on or are adjacent to this.
    </EditableText>
  );
}
function BioComprehensionText() {
  return (
    <>
      <EditableText
        defaultText="My goal is to make peoples lives better. Much of our lives now is spent on
        the internet, the average screen time for an adult is 8.5 hours per day. 5
        billion people use the internet every day. Thus, even very minimal improvements to an website can have a massive net
        positive impact on other's lives"
      />
    </>
  );
}

function BioDetailedText() {
  return (
    <>
      <EditableText>
        Specifically, my greatest passion is innovation within the digital
        humanities. It’s a way to use programming for good by educating people
        about new subjects. To this end I did a fellowship making a project
        about the{" "}
        <a href="https://www.alexrose.xyz/historyofcomputing">
          History of Computing as a Junior
        </a>
        , and{" "}
        <a href="https://www.alexrose.xyz/digitalexhibit">
          I worked on a large concept project about how to make a digital
          exhibit
        </a>
        .
      </EditableText>
      <EditableText
        defaultText="Otherwise, I think learning by doing is the best way to learn, and it
        helps me feel productive. Thus, I have a few side projects you can check
        out. Finally, I like running and house music."
      />
    </>
  );
}

function BioStalkerText() {
  return (
    <>
      <EditableText
        defaultText="My favorite artists are Daft Punk, The Talking Heads, and The Avalanches.
        My favorite meal is Okonomiyaki at Gaijin. My favorite drink is an Guarana or an Inca Cola. My favorite soccer team is FC Barcelona and I was once a talented goalie in my youth."
      />
    </>
  );
}

function Links() {
  return (
    <EditableText>
      My GitHub is <a href="https://github.com/acrose99">here</a>. My LinkedIn
      is <a href="https://www.linkedin.com/in/alexander-c-rose/">here</a>.
    </EditableText>
  );
}

function BioText({ length }: BioStyledTextProps) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "80%",
      }}
    >
      <BioIntroStyledText />
      {length < 25 && <BioBasicsText />}
      {length >= 25 && length < 50 && <BioConciseText />}
      {length >= 50 && length < 75 && (
        <>
          <BioConciseText />
          <BioDetailedText />
        </>
      )}
      {length >= 75 && length < 100 && (
        <>
          <BioConciseText />
          <BioDetailedText />
          <BioComprehensionText />
        </>
      )}
      {length === 100 && (
        <>
          <BioConciseText />
          <BioDetailedText />
          <BioComprehensionText />
          <BioStalkerText />
        </>
      )}
      <Links />
    </div>
  );
}

export default BioText;
