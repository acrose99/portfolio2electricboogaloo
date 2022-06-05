import { Flex } from "../../components/Flex";
import Navigation from "../../components/Navigation";
import { StyledText } from "../../components/Text";

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
        <StyledText
          as="h1"
          css={{
            color: "$mint11",
          }}
          fontSize={"5xl"}
        >
          Design
        </StyledText>
        <StyledText
          as="h2"
          css={{
            color: "$sage12",
          }}
          fontSize={"2xl"}
        >
          Design is the art of making a product look and feel like it is meant
          to be.
        </StyledText>
        <StyledText
          as="h1"
          css={{
            color: "$sage12",
          }}
          fontSize={"9xl"}
        >
          Todo
        </StyledText>
      </Flex>
    </>
  );
}

export default DesignIndex;
