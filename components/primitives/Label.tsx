import { styled } from "../../stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";

const StyledLabel = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  color: "$mint11",
  userSelect: "none",
  paddingX: 24
});

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  asChild?: boolean;
  htmlfor?: string;
}

function Label({
  children,
  asChild,
  htmlFor,
}: LabelProps) {
  return (
    <StyledLabel
      asChild={asChild ? true : false}
      htmlFor={htmlFor ? htmlFor : null}
    >
      {children}
    </StyledLabel>
  );
}

export default Label;
