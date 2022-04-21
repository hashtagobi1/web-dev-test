import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { CompanyName, NavButton } from "../../components";
import CustomIconButton from "../../components/IconButton";
import { ARIA_CHECKOUT, ARIA_MENU, navItems } from "../../utils/constants";

const NavBar = () => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");

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
        customAriaLabel={ARIA_CHECKOUT}
        aria-label={ARIA_CHECKOUT}
        size="lg"
        icon={<FaShoppingBasket />}
        variant="ghost"
      />
    );
  };
  return (
    <nav>
      <Flex p={6} justify={"space-between"} align="center" boxShadow={"lg"}>
        {flexPosition("start", "center", <CompanyName name="apps" />)}

        {isSmallerThan600px ? (
          <CustomIconButton
            icon={<FcMenu />}
            boxSize="0px"
            customAriaLabel={ARIA_MENU}
            aria-label={ARIA_MENU}
            variant="ghost"
            text={"menu"}
          />
        ) : (
          <Flex justify={"end"} align={"center"}>
            {navItems.map((link, i) => (
              <NavButton
                variant="ghost"
                key={i}
                link={link}
                text={link.toUpperCase()}
              />
            ))}
            {flexPosition("end", "center", icon())}
          </Flex>
        )}
      </Flex>
    </nav>
  );
};

export default NavBar;
