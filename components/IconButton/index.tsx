import { Flex, IconButton, IconButtonProps, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { CustomIcon } from "../../utils/interfaces/components";

interface CustomIconProps extends CustomIcon, IconButtonProps {}

const CustomIconButton: FC<CustomIconProps> = ({
  size,
  color,
  icon,
  customAriaLabel,
  variant,
  text,
}) => {
  return (
    <Flex justify={"center"} align="center">
      {text ? <Text>{text.toUpperCase()} </Text> : null}
      <IconButton
        aria-label={customAriaLabel}
        size={size}
        color={color}
        icon={icon}
        variant={variant}
      />
    </Flex>
  );
};

export default CustomIconButton;
