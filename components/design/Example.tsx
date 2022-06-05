import { styled } from "../../stitches.config";

interface ExampleProps {
    children: React.ReactNode;
}

const StyledDiv = styled("div", {
  alignItems: "center",
  padding: "2rem",
  borderTopRightRadius: "0.5rem",
  borderTopLeftRadius: "0.5rem",
  borderTop: "2px solid $sage7",
  borderLeft: "2px solid $sage7",
  borderRight: "2px solid $sage7",
  backgroundColor: "$sage2",
});

function Example({ children }: ExampleProps) {
  return <StyledDiv>{children}</StyledDiv>;
}
export default Example;