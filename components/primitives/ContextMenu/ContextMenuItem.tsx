import { styled } from "../../../stitches.config";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import * as Icons from "@radix-ui/react-icons";
import { Flex } from "../../Flex";
const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "$mint11",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  // paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "$sage8",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "$mint10",
    color: "$mint1",
  },
};

const LeftSlot = styled("div", {
  marginLeft: 5,
});

const ContextMenuItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });

interface IconProps {
  icon: string;
}
function Icon({ icon }: IconProps) {
  let IconComponent = Icons[icon];
  return (
    <div
      style={{
        marginRight: "5px",
        height: "25px",
        width: "25px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconComponent />
    </div>
  );
}

interface ContextMenuPropItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
}

function ContextMenuPropItem({
  icon,
  children,
  onClick,
}: ContextMenuPropItemProps) {
  return (
    <ContextMenuItem onClick={onClick}>
      <Flex align="center">
        {icon && (
          <LeftSlot>
            <Icon icon={icon} />
          </LeftSlot>
        )}
        {children}
      </Flex>
    </ContextMenuItem>
  );
}

export default ContextMenuPropItem;
