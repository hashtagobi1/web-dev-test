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
  w,
  h,
  onClick,
  link,
  position,
  left,
  right,
  border,
}) => {
  return (
    <Flex justify={"center"} align="center">
      {text ? <Text>{text.toUpperCase()} </Text> : null}
      <IconButton
        border={border}
        left={left}
        right={right}
        position={position}
        onClick={onClick}
        aria-label={customAriaLabel}
        size={size}
        color={color}
        icon={icon}
        variant={variant}
        w={w}
        h={h}
      />
    </Flex>
  );
};

export default CustomIconButton;
