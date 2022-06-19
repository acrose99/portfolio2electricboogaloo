import Image from "next/image";
import { useState } from "react";
import { styled } from "../../stitches.config";
import EditableComponent from "../EditableComponent";
import { Flex } from "../Flex";
import ToggleGroup from "../primitives/ToggleGroup";

interface BioImageProps {}

let StyledBioImage = styled(Image, {
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
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);
  const [filter, setFilter] = useState(null);
  let images = [
    {
      label: "Aesthetic",
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
      tooltip="Edit Image"
    >
      <Flex direction={"column"}>
        <StyledBioImage
          src={image}
          alt="Computer in a field of grass with trees"
          priority={true}
          width={width}
          height={height}
          quality={100}
          filter={filter}
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
