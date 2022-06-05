import { mint, sage } from "@radix-ui/colors";
import { useState } from "react";
import Block from "../../components/design/Block";
import Summary from "../../components/design/Summary";
import EditableText from "../../components/editableComponents/EditableText";
import { Flex } from "../../components/Flex";
import { Input } from "../../components/Input";
import { Label } from "../../components/primitives/Label";
import { Separator } from "../../components/primitives/Separator";
import { StyledText } from "../../components/Text";
import { styled } from "../../stitches.config";

function InputPage() {
  const [inputColor, setInputColor] = useState("#000000");
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
        name="Input"
        description="Create interactive controls for web-based forms in order to accept data from the user."
      />
      <Block
        title="Text"
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
            placeholder="$mint11"
            css={{
              height: "1.5rem",
              maxWidth: "30%",
            }}
            id="color"
          />
        </Flex>
      </Block>
      <Block
        title="Color"
        code={`
        <Flex gap={2} align="center">
          <Label htmlFor="color">Color:</Label>
          <Input id="color" />
        </Flex>`}
      >
        <Flex gap={2} align="center">
          <Label asChild={false} htmlFor="color">
            Color:
          </Label>

          <Input
            inputType={"color"}
            type="color"
            value={inputColor}
            onChange={(e) => setInputColor(e.target.value)}
            id="color"
          />
        </Flex>
      </Block>
      <Block
        title="Date"
        code={`
        <Flex gap={2} align="center">
          <Label htmlFor="color">Color:</Label>
          <Input id="color" />
        </Flex>`}
      >
        <Flex gap={2} align="center">
          <Label asChild={false} htmlFor="date">
            Date:
          </Label>
          <Input inputType={"date"} type="date" id="date" />
        </Flex>
      </Block>
      <Block
        title="Number"
        code={`
        <Flex gap={2} align="center">
          <Label htmlFor="color">Color:</Label>
          <Input id="color" />
        </Flex>`}
      >
        <Flex gap={2} align="center">
          <Label asChild={false} htmlFor="Count">
            Count:
          </Label>
          <Input inputType={'number'} type="number" id="Count" />
        </Flex>
      </Block>
    </Flex>
  );
}

export default InputPage;
