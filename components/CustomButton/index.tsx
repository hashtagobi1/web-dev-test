import { Button } from "@chakra-ui/react";
import React, { FC } from "react";
import { CustomButton } from "../../utils/interfaces/components";

interface CustomButtonProps extends CustomButton {}
const CustomButton: FC<CustomButtonProps> = ({
  text,
  variant,
  bgColor,
  color,
  boxShadow,
  _hover,
  textAlign = "center",
  m = 3,
  ml,
  mb,
  mt,
  mr,
  p,
  size,
}) => {
  return (
    <Button
      textAlign={textAlign}
      size={size}
      ml={ml}
      mb={mb}
      mt={mt}
      mr={mr}
      m={m}
      p={p}
      bgColor={bgColor}
      color={color}
      fontSize={"sm"}
      variant={variant}
      boxShadow={boxShadow}
      fontWeight="light"
      _hover={_hover}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
