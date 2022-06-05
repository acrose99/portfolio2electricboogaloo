import { styled } from "../../stitches.config";
import * as LabelPrimitive from "@radix-ui/react-label";

export const Label = styled(LabelPrimitive.Root, {
  fontSize: 15,
  fontWeight: 500,
  whiteSpace: "nowrap",
  color: "$mint11",
  userSelect: "none",
  paddingLeft: 16
});
