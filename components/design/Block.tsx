import { styled } from "../../stitches.config";
import { StyledText } from "../Text";
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
      <StyledText
        fontSize="2xl"
        css={{
          color: "$sage12",
          fontWeight: "bold",
        }}
      >
        {title}
      </StyledText>
      <Example>{children}</Example>
      <Code>{code}</Code>
    </StyledDiv>
  );
}

export default Block;
