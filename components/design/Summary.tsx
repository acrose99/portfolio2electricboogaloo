import { StyledText } from "../Text";

interface SummaryProps {
  name: string;
  description: string;
}

function Summary({ name, description }: SummaryProps) {
  return (
    <>
      <StyledText
        fontSize="4xl"
        css={{
          color: "$mint11",
          fontWeight: "bolder",
        }}
      >
        {name}
      </StyledText>
      <StyledText
        fontSize="xl"
        css={{
          color: "$sage11",
          fontWeight: "bold",
        }}
      >
        {description}
      </StyledText>
    </>
  );
}

export default Summary;
