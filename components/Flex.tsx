import { styled } from "../stitches.config";

interface flexProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  wrap?: "wrap" | "nowrap";
  basis?: string;
  grow?: number;
  shrink?: number;
  gap?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
}

const StyledDiv = styled("div", {
  display: "flex",
});

function Flex({
  children,
  direction = "row",
  wrap = "nowrap",
  basis = "auto",
  grow = 0,
  shrink = 1,
  justifyContent = "flex-start",
  alignItems = "flex-start",
  gap = 0,
  ...props
}: flexProps) {
  return (
    <StyledDiv
      css={{
        flexDirection: direction,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
        ...props
      }}
    >
      {children}
    </StyledDiv>
  );
}

export default Flex;
