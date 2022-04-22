import { Flex, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { CompanyName, NavButton, Sidebar } from "../../components";
import CustomIconButton from "../../components/IconButton";
import { ARIA_CHECKOUT, ARIA_MENU, navItems } from "../../utils/constants";
import theme from "../../utils/theme";
const NavBar = () => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  const flexPosition = (
    horizontalAlignment: string,
    verticalAlignment: string,
    children: React.ReactNode
  ) => (
    <Flex justify={horizontalAlignment} alignItems={verticalAlignment}>
      {children}
    </Flex>
  );

  const renderBasketIcon = () => {
    return (
      <Link passHref href="/checkout">
        <a>
          <CustomIconButton
            customAriaLabel={ARIA_CHECKOUT}
            aria-label={ARIA_CHECKOUT}
            size="lg"
            icon={<FaShoppingBasket />}
            variant="ghost"
          />
        </a>
      </Link>
    );
  };

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <nav>
      {sidebarVisible ? (
        <Sidebar handleClick={handleMenuClick} isVisible={sidebarVisible} />
      ) : null}

      <Flex
        position={isSmallerThan600px ? "fixed" : "relative"}
        top={isSmallerThan600px ? "0px" : undefined}
        bg={theme.colors.brand.companyWhite}
        // overflow={"hidden"}
        width="100%"
        zIndex={isSmallerThan600px ? 10 : 0}
        p={6}
        justify={"space-between"}
        align="center"
        boxShadow={"lg"}
      >
        {flexPosition("start", "center", <CompanyName name="apps" />)}

        {isSmallerThan600px ? (
          <Flex justify={"end"} align="center">
            <CustomIconButton
              icon={<FcMenu />}
              customAriaLabel={ARIA_MENU}
              aria-label={ARIA_MENU}
              variant="ghost"
              text={"menu"}
              onClick={handleMenuClick}
            />
          </Flex>
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
            {flexPosition("end", "center", renderBasketIcon())}
          </Flex>
        )}
      </Flex>
    </nav>
  );
};

export default NavBar;
