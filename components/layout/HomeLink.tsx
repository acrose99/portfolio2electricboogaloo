import Link from "next/link";
import { styled } from "../../stitches.config";
import Tooltip from "../primitives/Tooltip";
import { Text } from "../Text";
interface HomeLinkProps {}

const StyledLink = styled("a", {
  color: "$sage12",
  fontFamily: "$notoSerif",
  fontWeight: "900",
  fontSize: "1.5rem",
  textDecoration: "none",
});

function HomeLink({}: HomeLinkProps) {
  return (
    <Tooltip side="bottom" trigger="Sorry, you can't edit me!">
      <Text fontSize={"xl"}>
        <Link
          style={{
            textDecoration: "none",
          }}
          href="/"
        >
          <StyledLink>Alex Rose</StyledLink>
        </Link>
      </Text>
    </Tooltip>
  );
}

export default HomeLink;
