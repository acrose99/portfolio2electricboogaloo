import { mint, mintA, mintDarkA } from "@radix-ui/colors";
import { Text } from "../Text";
import { slides } from "./constants";
import EditableText from "../editableComponents/EditableText";
import { darkTheme, styled } from "../../stitches.config";
import Link from "next/link";
interface BioStyledTextProps {
  length: number;
}

const StyledLink = styled("a", {
  color: "$mint12",
  textDecoration: "none",
  "&:hover": {
    color: "$mint11",
    textDecoration: "underline",
    transition: "all 0.5s ease-in-out",
  },
});

function BioIntroStyledText() {
  return (
    <>
      <EditableText
        defaultFontFamily="$oleoSwash"
        defaultFontSize="$3xl"
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

      <EditableText defaultFontSize="$xl" defaultColor="$mint10">
        <StyledLink href="mailto:acrosmail@gmail.com">
          I&apos;m actively working on large projects on the intersection of
          tech and history.
          <br />
          If you are interested in Digital Humanities, please reach out to me!
        </StyledLink>
      </EditableText>
    </>
  );
}

function BioBasicsText() {
  return (
    <>
      <EditableText defaultFontSize="$lg">
        I&apos;m a Software Engineer at{" "}
        <a href="https://cccis.com/about/">CCC</a>.
        <br />
        <br />
        <Link href="/work">Click here to see examples of my work</Link>.
      </EditableText>
    </>
  );
}
function BioConciseText() {
  return (
    <>
      <EditableText defaultFontSize="$lg">
        I&apos;m an Software Engineer at{" "}
        <a href="https://cccis.com/about/">CCC</a> making products. I went to
        Loyola University Chicago and studied Computer Science. I graduated in
        2021 with a B.S with a Minor in History. I was also the Vice President
        of Loyola’s computer science club for a while.
        <br /> <br />
        I&apos;m extremely passionate about using tech for good, and most of my
        career and side projects have been focused on or are adjacent to this.
        Some of my favorite projects are on <Link href="/work">this page</Link>.
      </EditableText>
    </>
  );
}
function BioComprehensionText() {
  return (
    <>
      <EditableText
        defaultFontSize="$lg"
        defaultText="My long term goals after gathering more experience is to go back to working on the intersection of tech and history, and how to use tech to educate people about history."
      />
    </>
  );
}

function BioDetailedText() {
  return (
    <>
      <EditableText defaultFontSize="$lg">
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
        defaultFontSize="$lg"
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
        defaultFontSize="$lg"
        defaultText="My favorite artists are Daft Punk, The Talking Heads, and The Avalanches.
        My favorite meal is Okonomiyaki at Gaijin. My favorite drink is an Guarana or an Inca Cola. My favorite soccer team is FC Barcelona and I was once a talented goalie in my youth."
      />
    </>
  );
}

function Links() {
  return (
    <EditableText defaultFontSize="$lg">
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
