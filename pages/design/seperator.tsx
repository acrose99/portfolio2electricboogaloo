import Block from "../../components/design/Block";
import Code from "../../components/design/Code";
import Summary from "../../components/design/Summary";
import { Flex } from "../../components/Flex";
import { Separator } from "../../components/primitives/Separator";
import { StyledText } from "../../components/Text";
import { styled } from "../../stitches.config";


function Seperator() {
  const verticalCode = `
  <Flex css={{ height: 50}} gap={3} align="center">
      <StyledText color="$sage12">Lorem ipsum</StyledText>
      <Separator orientation="vertical" />
      <StyledText color="$sage12">dolor sit</StyledText>
  </Flex>`;
  return (
    <Flex
      css={{
        marginX: "10vw",
      }}
      direction="column"
    >
      <Summary
        name="Seperator"
        description="Visually or semantically separates content."
      />
      <Block
        title="Horizontal"
        code={`
        <StyledText color="$sage12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>
        <Separator orientation="horizontal" />
        <StyledText color="$sage12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>`}
      >
        <StyledText
          css={{
            color: "$mint11",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>
        <Separator orientation="horizontal" />
        <StyledText color="$sage12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </StyledText>
      </Block>
      <Block title="Vertical" code={verticalCode}>
        <Flex
          css={{
            height: 50,
          }}
          gap={3}
          align="center"
        >
          <StyledText
            css={{
              color: "$mint11",
            }}
          >
            Lorem ipsum
          </StyledText>
          <Separator orientation="vertical" />
          <StyledText>dolor sit</StyledText>
        </Flex>
      </Block>
    </Flex>
  );
}

export default Seperator;
