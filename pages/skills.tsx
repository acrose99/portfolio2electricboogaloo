import Head from "next/head";
import Navigation from "../components/Navigation";
import { Icon } from "@iconify/react";
import { Flex } from "../components/Flex";
import Skill from "../components/skills/skill";

export default function Skills() {
  return (
    <>
      <Head>
        <title>Alex Rose: Skills</title>
      </Head>
      <Flex
        css={{
          marginTop: "0px",
        }}
        direction="column"
        align="center"
        gap={5}
      >
        <Navigation defaultValue="Skills" />
        <Flex
          css={{
            padding: "32px",
          }}
          wrap={"wrap"}
          justify={"center"}
          align={"stretch"}
          direction={{ "@sm": "column", "@md": "row" }}
          gap={5}
        >
          <Skill
            title="Vue"
            experience="Advanced"
            description="At CCC, I've exclusively used Vue.js to web applications with efficient data visualization."
            logo={
              <Icon color="#067a6f" width="32" height="32" icon="mdi:vuejs" />
            }
          />

          <Skill
            title="React"
            experience="Advanced"
            description="I've utilized React in creating components and visually appealing websites for the Chicago History Museum, as a Mulcahy Fellow project, and for multiple other projects."
            logo={
              <Icon color="#067a6f" width="32" height="32" icon="mdi:react" />
            }
          />

          <Skill
            title="CSS"
            experience="Advanced"
            description="I've used CSS knowledge across all my front-end development tasks, for complex animations, responsive design, and more."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="mdi:language-css3"
              />
            }
          />

          <Skill
            title="JavaScript"
            experience="Experienced"
            description="In addition to more general work, at CCC I've built complex logic for authentication, state management, and dynamic data visualization."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="mdi:language-javascript"
              />
            }
          />

          <Skill
            title="Typescript"
            experience="Experienced"
            description="All of my current and past projects that I've noted are built with Typescript/TSX, in order to insure type safety and prevent bugs."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="mdi:language-typescript"
              />
            }
          />

          <Skill
            title="Figma"
            experience="Experienced"
            description="At CCC, I helped connect design and development by creating Figma components and prototypes. I also used Figma to create mockups as a Mulcahy Fellow."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="devicon-plain:figma"
              />
            }
          />

          <Skill
            title="Next.JS"
            experience="Intermediate"
            description="Most of my prior/current projects are built with Next.JS, including this website."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="akar-icons:nextjs-fill"
              />
            }
          />

          <Skill
            title="Python"
            experience="Beginner"
            description="I've used Pytorch, Pandas, and Numpy for machine learning and data science projects at College. I plan to use Python more in the future."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="mdi:language-python"
              />
            }
          />

          <Skill
            title="SQL/NoSQL"
            experience="Beginner"
            description="My coursework at Loyola University provides me with a solid understanding of SQL/NoSQL databases, I've also used Oracle Developer and MongoDB."
            logo={
              <Icon
                color="#067a6f"
                width="32"
                height="32"
                icon="mdi:database-search"
              />
            }
          />
        </Flex>
      </Flex>
    </>
  );
}
