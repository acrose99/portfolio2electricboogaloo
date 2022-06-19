import { useState } from "react";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import { Flex } from "../Flex";
import ToggleGroup from "../primitives/ToggleGroup";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { keyframes } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import ImageComponent from "../Image";
interface BioImageProps {}


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
        <ImageComponent
          src={image}
          alt={images.find((i) => i.value === image)?.label}
          width={width}
          height={height}
          filter={filter}
          priority={true}
        />
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
