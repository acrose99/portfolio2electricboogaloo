import Head from "next/head";
import { styled } from "../../stitches.config";
import StitchesLogo from "../StitchesLogo";
import Navigation from "../Navigation";
import { mint } from "@radix-ui/colors";
import Bio from "../Bio";
import EditableCollapsible from "../editableComponents/EditableCollapsible";
import {Flex} from "../Flex";
import EditableText from "../editableComponents/EditableText";

export default function Frameworks() {
  return (
    <>
      <EditableCollapsible
        animated={true}
        trigger="React"
        caption="Experience: 3 years"
      >
        <EditableText
          defaultText="Unlike a lot of other people, I actually learned React before I
              really got into Javascript and HTML/CSS to learn how to make
              websites. I'm not sure if this was the correct choice or not,
              but I do know I really love React and it's a fantastic
              framework!"
        />
        <EditableText
          defaultText="I've used it for most of my projects, and I would say
              I'm somewhere in between an intermediate and advanced
              developer. I'm very comfortable with most of the core
              concepts of React, but theres still some things I need to learn
              like Suspense, Redux, and Performance Optimization. This is a side
              effect of React's maturity in comparison to other frameworks
              more then anything. There is a lot to learn."
        />
      </EditableCollapsible>
      <EditableCollapsible trigger="Figma" caption="Experience: 3 years">
        <EditableText
          defaultText="I was a early adopter of Figma and I've been using it for a
              while now before they introduced features like Variants and Auto
              Layout. Figma is a great tool for prototyping and I'm very
              happy with the way it works. I use it for almost any site I make."
        />
      </EditableCollapsible>
      <EditableCollapsible trigger="Next.js" caption="Experience: 2 years">
        <EditableText
          defaultText="Next.js is a framework that I've been using for a while now.
              I think I understand most of its features now because my main two
              projects at the moment are using it."
        />
      </EditableCollapsible>
      <EditableCollapsible trigger="Vue" caption="Experience: 1 year">
        <EditableText
          defaultText="Vue3 and the Quasar framework are what I use on a daily basis at
              my job. I'm still getting used to them at the moment."
        />
      </EditableCollapsible>
    </>
  );
}
