import { Text } from "../Text";

interface SummaryProps {
  name: string;
  description: string;
}

function Summary({ name, description }: SummaryProps) {
  return (
    <>
      <Text
        fontSize="4xl"
        css={{
          color: "$mint11",
          fontWeight: "bolder",
        }}
      >
        {name}
      </Text>
      <Text
        fontSize="xl"
        css={{
          color: "$sage11",
          fontWeight: "bold",
        }}
      >
        {description}
      </Text>
    </>
  );
}

export default Summary;
