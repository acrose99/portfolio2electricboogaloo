import { styled } from "../../stitches.config";
import { Text } from "../Text";
import Code from "./Code";
import Example from "./Example";

const StyledDiv = styled("div", {
  display: "flex",
  flexDirection: "column",
});
interface BlockProps {
  title: string
  children: React.ReactNode
  code: string;
}

function Block({ children, code, title }: BlockProps) {
  return (
    <StyledDiv>
      <Text
        fontSize="2xl"
        css={{
          color: "$sage12",
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <Example>{children}</Example>
      <Code>{code}</Code>
    </StyledDiv>
  );
}

export default Block;
