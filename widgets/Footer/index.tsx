import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import {
  CompanyName,
  CustomIconButton,
  FooterVerbage,
  NavButton,
} from "../../components";
import { navItems, socialIcons } from "../../utils/constants";
import theme from "../../utils/theme";

const Footer = () => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");

  const extraNavItems = [...navItems, "your cart"];
  return (
    <footer>
      <Flex
        boxShadow={"2xl"}
        justify={"space-between"}
        p={5}
        direction={isSmallerThan600px ? "column" : "row"}
      >
        <Flex
          align={isSmallerThan600px ? "start" : "center"}
          direction={isSmallerThan600px ? "column" : "row"}
        >
          <Flex>
            <CompanyName name="apps" />
          </Flex>
          <Flex direction={"column"}>
            {extraNavItems.map((item, i) => {
              const renderLink = () => {
                if (i === extraNavItems.length - 1) {
                  return "checkout";
                }
                return item.toLowerCase();
              };
              return (
                <NavButton
                  p={0}
                  variant={"ghost"}
                  text={item}
                  link={renderLink()}
                  key={i}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex
          align={isSmallerThan600px ? "start" : "end"}
          justify={"center"}
          direction={"column"}
          mt={isSmallerThan600px ? 5 : 0}
          color={theme.colors.brand.companyGreyMain}
        >
          <Flex my={isSmallerThan600px ? 8 : 0}>
            <nav>
              {socialIcons.map((item, i) => (
                <CustomIconButton
                  customAriaLabel={item.aria}
                  aria-label={item.aria}
                  key={i}
                  size="lg"
                  icon={<item.icon />}
                  variant="ghost"
                  link={item.link}
                />
              ))}
            </nav>
          </Flex>
          <Flex>
            <FooterVerbage companyName="APPS" date={new Date()} />
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
