import { blackA } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";
import { styled } from "../stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState } from "react";
import NextImage from "next/image";

let StyledImage = styled(NextImage, {
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
    cursor: {
      zoomIn: {
        cursor: "zoom-in",
      },
      zoomOut: {
        cursor: "zoom-out",
      },
    },
  },
});

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

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  filter?: "sepia" | "grayscale" | "invert";
}

function Image({ src, alt, width, height, priority, filter }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogTrigger asChild>
          <StyledImage
            src={src}
            alt={alt}
            priority={true}
            width={width}
            height={height}
            quality={100}
            filter={filter}
            cursor={isOpen ? "zoomOut" : "zoomIn"}
          />
        </DialogTrigger>
        <Content>
          <DialogClose asChild>
            <StyledImage
              alt={alt}
              src={src}
              layout={"fill"}
              objectFit={"contain"}
              quality={100}
              cursor={isOpen ? "zoomOut" : "zoomIn"}
              priority={true}
            />
          </DialogClose>
        </Content>
      </Dialog>
    </>
  );
}

export default Image;
