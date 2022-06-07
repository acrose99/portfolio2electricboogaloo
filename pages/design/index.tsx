import { Flex } from "../../components/Flex";
import Navigation from "../../components/Navigation";
import { Text } from "../../components/Text";

function DesignIndex() {
  return (
    <>
      <Flex
        css={{
          marginTop: "50px",
        }}
        justify="center"
        align="center"
        direction="column"
        gap={5}
      >
        <Navigation defaultValue="Design" />
        <Text
          as="h1"
          css={{
            color: "$mint11",
          }}
          fontSize={"5xl"}
        >
          Design
        </Text>
        <Text
          as="h2"
          css={{
            color: "$sage12",
          }}
          fontSize={"2xl"}
        >
          Design is the art of making a product look and feel like it is meant
          to be.
        </Text>
        <Text
          as="h1"
          css={{
            color: "$sage12",
          }}
          fontSize={"9xl"}
        >
          Todo
        </Text>
      </Flex>
    </>
  );
}

export default DesignIndex;
