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
  disabled,
  onClick,
  isLoading,
  width,
}) => {
  return (
    <Button
      width={width}
      textAlign={textAlign}
      disabled={disabled}
      size={size}
      ml={ml}
      mb={mb}
      isLoading={isLoading}
      mt={mt}
      mr={mr}
      m={m}
      p={p}
      onClick={onClick}
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
