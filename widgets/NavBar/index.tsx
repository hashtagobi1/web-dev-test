import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { NavButton } from "../../components";
import CustomIconButton from "../../components/IconButton";
import { navItems } from "../../utils/constants";

const NavBar = () => {
  const CHECKOUT_ariaLabel = "checkout";
  const MENU_ariaLabel = "menu";

  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px) ");

  const flexPosition = (
    horizontalAlignment: string,
    verticalAlignment: string,
    children: React.ReactNode
  ) => (
    <Flex justify={horizontalAlignment} alignItems={verticalAlignment}>
      {children}
    </Flex>
  );

  const icon = () => {
    return (
      <CustomIconButton
        customAriaLabel={CHECKOUT_ariaLabel}
        aria-label={CHECKOUT_ariaLabel}
        bgColor="blue"
        size="lg"
        icon={<FaShoppingBasket />}
        variant="ghost"
      />
    );
  };
  return (
    <nav>
      <Flex p={6} justify={"space-between"} align="center" boxShadow={"lg"}>
        {flexPosition("start", "center", <Heading as="h1">APPS</Heading>)}

        {isSmallerThan600px ? (
          <CustomIconButton
            icon={<FcMenu />}
            boxSize="0px"
            customAriaLabel={MENU_ariaLabel}
            aria-label={MENU_ariaLabel}
            variant="ghost"
            text={"menu"}
          />
        ) : (
          <Flex justify={"end"} align={"center"}>
            {navItems.map((link, i) => (
              <NavButton key={i} link={link} text={link.toUpperCase()} />
            ))}
            {flexPosition("end", "center", icon())}
          </Flex>
        )}
      </Flex>
    </nav>
  );
};

export default NavBar;
