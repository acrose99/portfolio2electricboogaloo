import { styled } from "../../stitches.config";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Flex } from "../Flex";
import { StyledText } from "../Text";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneSea } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { sageA } from "@radix-ui/colors";

interface CodeProps {
  children: React.ReactNode;
}

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  padding: 20,
  marginBottom: 40,
  alignItems: "center",
  //   borderTopRightRadius: "0.5rem",
  //   borderTopLeftRadius: "0.5rem",
  border: "2px solid $sage7",
  backgroundColor: "$sage2",
});

const CollapsibleTrigger = styled(CollapsiblePrimitive.Trigger, {
  cursor: "pointer",
});


const CollapsibleContent = styled(CollapsiblePrimitive.Content, {
  paddingBottom: "2rem",
});


const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  width: 36,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$sage12",
  boxShadow: `0 2px 10px $sagea7`,
  '&[data-state="open"]': {
    transform: "rotate(90deg)",
  },
});


const customSyntaxHighlighterStyles = {
  padding: "1rem",
  border: "2px solid $sage7",
  backgroundColor: "rgb(29, 38, 47)",
  borderRadius: "0.5rem",
  fontSize: "14px",
  fontFamily: "Roboto Mono, monospace",
  lineHeight: "150%",
};


function Code({ children }: CodeProps) {
  const [open, setOpen] = useState(false);
  return (
    // <Collapsible trigger={"View Code"}>
    //   <StyledDiv>{children}</StyledDiv>
    // </Collapsible>
    <StyledCollapsible
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
      }}
    >
      <Flex direction="row" justify="start" align="center">
        <CollapsibleTrigger asChild>
          <IconButton>
            <ArrowRightIcon width={24} height={24} />
          </IconButton>
        </CollapsibleTrigger>
        <StyledText
          css={{
            color: "$sage12",
            fontWeight: 800,
          }}
          fontSize="lg"
        >
          View Code
        </StyledText>
      </Flex>
      <CollapsibleContent css={{}}>
        <SyntaxHighlighter
          customStyle={customSyntaxHighlighterStyles}
          language="jsx"
          wrapLongLines={true}
          style={duotoneSea}
        >
          {children}
        </SyntaxHighlighter>
      </CollapsibleContent>
    </StyledCollapsible>
  );
}

export default Code;
