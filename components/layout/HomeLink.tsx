import Link from "next/link";
import { styled } from "../../stitches.config";
import Tooltip from "../primitives/Tooltip";
import { Text } from "../Text";
interface HomeLinkProps {}

const StyledLink = styled("a", {
  color: "$mint11",
  fontFamily: "$notoSerif",
  fontWeight: "900",
  fontSize: "1.5rem",
  textDecoration: "none",
  cursor: "pointer",
});

function HomeLink({}: HomeLinkProps) {
  return (
    <Text css={{
      marginLeft: "1rem",
    }} fontSize={"xl"}>
      <Link
        style={{
          textDecoration: "none",
        }}
        href="/"
      >
        <StyledLink>Alex Rose</StyledLink>
      </Link>
    </Text>
  );
}

export default HomeLink;
