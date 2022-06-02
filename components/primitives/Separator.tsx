import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { styled } from "../../stitches.config";

export const Separator = styled(SeparatorPrimitive.Root, {
  backgroundColor: "$mint6",
  "&[data-orientation=horizontal]": {
    height: 2,
    width: "100%",
  },
  "&[data-orientation=vertical]": {
    height: "100%",
    width: 1,
  },
  variants: {
    gradient: {
      true: {
        "&[data-orientation=horizontal]": {
          background: `linear-gradient(to right, $mint6, $mint7, $mint8)`,
        },
        "&[data-orientation=vertical]": {
          background: `linear-gradient(to bottom, $mint6, $mint7, $mint8)`,
        },
      },
    },
  },
});
