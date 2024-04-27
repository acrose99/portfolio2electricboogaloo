import Image from "next/image";
import { useState } from "react";
import { darkTheme, styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import { Flex } from "../Flex";
import { Text } from "../Text";
import ToggleGroup from "../primitives/ToggleGroup";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { keyframes } from "@stitches/react";
import { blackA, mintA, mintDarkA } from "@radix-ui/colors";
import EditableText from "../editableComponents/EditableText";

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});
const StyledContent = styled(DialogPrimitive.Content, {
  cursor: "zoom-out",
  position: "fixed",
  zIndex: 1000,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  "&:focus": { outline: "none" },
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogClose = DialogPrimitive.Close;

interface BioImageProps {}

let StyledBioImage = styled(Image, {
  cursor: "zoom-in",
  borderRadius: "50%",
  variants: {
    filter: {
      sepia: {
        filter: "sepia(100%)",
      },
      grayscale: {
        filter: "grayscale(100%)",
      },
      invert: {
        filter: "invert(100%)",
      },
    },
  },
});

let StyledDiv = styled("div", {
  "& span": {
    overflow: "visible !important",
  },
});

function BioImage({}: BioImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(350);
  const [height, setHeight] = useState(350);
  const [filter, setFilter] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <EditableComponent
      source="/components/bio/BioImage.tsx"
      changableProps={[
        {
          label: "Width",
          value: width,
          onChange: (value: number) => setWidth(value),
        },
        {
          label: "Height",
          value: height,
          onChange: (value: number) => setHeight(value),
        },
      ]}
      callableFunctions={[
        {
          label: "Make Sepia",
          onClick: () => setFilter("sepia"),
          toastLabel: "Image is now sepia",
          icon: "BlendingModeIcon",
        },
        {
          label: "Make Grayscale",
          onClick: () => setFilter("grayscale"),
          toastLabel: "Image is now grayscale",
          icon: "OpacityIcon",
        },
        {
          label: "Invert",
          onClick: () => setFilter("invert"),
          toastLabel: "Image is now inverted",
          icon: "RotateCounterClockwiseIcon",
        },
        {
          label: "Reset",
          onClick: () => {
            setWidth(350);
            setHeight(350);
            setFilter(null);
          },
          toastLabel: "Reset image size",
          icon: "ResetIcon",
        },
      ]}
      tooltip={isOpen ? null : "Edit image"}
    >
      <Flex direction={"column"}>
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <DialogTrigger asChild>
            <StyledDiv
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <StyledBioImage
                css={{
                  transition: "all 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                src="/cuenca.jpeg"
                alt="Alex at Cajas National Park in Ecuador"
                priority={true}
                width={width}
                layout={"fixed"}
                height={height}
                quality={100}
                filter={filter}
                objectFit="cover"
              />
              {/* <StyledDiv
                css={{
                  position: "absolute",
                  padding: "2px 2px", // Padding inside the caption
                  borderRadius: "15px",
                  transform: "translate(20%,  -85%)",
                  width: "240px",
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: isHovered ? "$mint6" : "$mint5",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <Text
                  css={{
                    textAlign: "center",
                    color: "$mint11",
                    fontSize: "xs",
                    filter: `drop-shadow(0px 5px 10px ${mintA.mintA10})`,
                    [`.${darkTheme} &`]: {
                      filter: `drop-shadow(0px 5px 10px ${mintDarkA.mintA8})`,
                    },
                  }}
                  fontSize={"xs"}
                >
                  Alex at Cajas National Park in Ecuador
                </Text>
              </StyledDiv> */}
            </StyledDiv>
          </DialogTrigger>
          <Content>
            <DialogClose asChild>
              <Image
                src="/cajas.jpg"
                alt="Alex at Cajas National Park in Ecuador"
                layout={"fill"}
                objectFit={"contain"}
                quality={100}
              />
            </DialogClose>
          </Content>
        </Dialog>
      </Flex>
    </EditableComponent>
  );
}

export default BioImage;
