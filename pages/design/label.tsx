import Block from "../../components/design/Block";
import Summary from "../../components/design/Summary";
import EditableText from "../../components/editableComponents/EditableText";
import { Flex } from "../../components/Flex";
import { Input } from "../../components/Input";
import { Label } from "../../components/primitives/Label";
import { Separator } from "../../components/primitives/Separator";
import { StyledText } from "../../components/Text";
import { styled } from "../../stitches.config";

function LabelPage() {
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
        name="Label"
        description="Renders an accessible label associated with controls."
      />
      <Block
        title="Default"
        code={`
        <Flex gap={2} align="center">
          <Label htmlFor="color">Color:</Label>
          <Input id="color" />
        </Flex>`}
      >
        <Flex gap={2} align="center">
          <div>
            <Label asChild={false} htmlFor="color">
              Color:
            </Label>
          </div>
          <Input
            css={{
              height: "1.5rem",
              maxWidth: "30%",
            }}
            id="color"
          />
        </Flex>
      </Block>
    </Flex>
  );
}

export default LabelPage;
