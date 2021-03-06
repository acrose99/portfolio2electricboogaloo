import Image from "next/image";
import { useState } from "react";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import { Flex } from "../Flex";
import ToggleGroup from "../primitives/ToggleGroup";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { keyframes } from "@stitches/react";
import { blackA } from "@radix-ui/colors";

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});
const StyledContent = styled(DialogPrimitive.Content, {
  cursor: "zoom-out",
  position: "fixed",
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
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay  />
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
  aspectRatio: "4/5 !important",
  cursor: "zoom-in",
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

function BioImage({}: BioImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [filter, setFilter] = useState(null);
  let images = [
    {
      label: "Plants",
      value: "/plantyboi.png",
    },
    {
      label: "Alex",
      value: "/Alex.png",
    },
    {
      label: "Mural",
      value: "/panda.png",
    },
    {
      label: "Chicago",
      value: "/Chicago.png",
    },
  ];
  const [image, setImage] = useState("/plantyboi.png");
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
            setWidth(400);
            setHeight(400);
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
            <StyledBioImage
              src={image}
              alt={images.find((i) => i.value === image)?.label}
              priority={true}
              width={width}
              height={height}
              quality={100}
              filter={filter}
            />
          </DialogTrigger>
          <Content>
            <DialogClose asChild>
              <Image
                src={image}
                alt={images.find((i) => i.value === image)?.label}
                layout={"fill"}
                objectFit={"contain"}
                quality={100}
              />
            </DialogClose>
          </Content>
        </Dialog>
        <ToggleGroup
          items={images}
          onChange={(value) => {
            if (value) {
              setImage(images.filter((item) => item.label === value)[0].value);
            }
          }}
        />
      </Flex>
    </EditableComponent>
  );
}

export default BioImage;
