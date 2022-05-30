import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { styled } from "../../stitches.config";
import { keyframes } from "@stitches/react";
interface LinkProps {
  href: string;
}

const StyledLink = styled("a", {
  textDecoration: "none",
  cursor: "pointer",
  color: "$mint11",
  fontSize: "18px",
  fontWeight: "900",
  display: "inline-flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: "min-content",
  "&::after": {
    content: "",
    position: "absolute",
    width: "100%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: "$mint11",
    transformOrigin: "bottom left",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover": {
    "&::after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
});

function LinkCom({ href }: LinkProps) {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      Site
      <ExternalLinkIcon
        width={18}
        height={18}
        style={{
          display: "inline-flex",
          marginLeft: "10px",
        }}
      />
    </StyledLink>
  );
}

export default LinkCom;
