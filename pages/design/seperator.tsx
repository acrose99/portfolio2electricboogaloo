import Block from "../../components/design/Block";
import Code from "../../components/design/Code";
import Summary from "../../components/design/Summary";
import { Flex } from "../../components/Flex";
import { Separator } from "../../components/primitives/Separator";
import { Text } from "../../components/Text";
import { styled } from "../../stitches.config";


function Seperator() {
  const verticalCode = `
  <Flex css={{ height: 50}} gap={3} align="center">
      <Text color="$sage12">Lorem ipsum</Text>
      <Separator orientation="vertical" />
      <Text color="$sage12">dolor sit</Text>
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
        <Text color="$sage12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Separator orientation="horizontal" />
        <Text color="$sage12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>`}
      >
        <Text
          css={{
            color: "$mint11",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Separator orientation="horizontal" />
        <Text css={{
          color: "$sage12",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Block>
      <Block title="Vertical" code={verticalCode}>
        <Flex
          css={{
            height: 50,
          }}
          gap={3}
          align="center"
        >
          <Text
            css={{
              color: "$mint11",
            }}
          >
            Lorem ipsum
          </Text>
          <Separator orientation="vertical" />
          <Text>dolor sit</Text>
        </Flex>
      </Block>
    </Flex>
  );
}

export default Seperator;
