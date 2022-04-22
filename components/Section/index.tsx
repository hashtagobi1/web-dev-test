import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Section, SectionType } from "../../utils/interfaces/components";
const Section: FC<Section> = ({
  id,
  children,
  pageType,
  customBGColor,
  align = "center",
  justify = "center",
}) => {
  return (
    <section id={id}>
      <Flex
        bgColor={customBGColor ? "brand.colors.companyPageBackground" : "none"}
        width="100vw"
        height={
          pageType === SectionType.Hero || SectionType.Checkout
            ? "90vh"
            : "100vh"
        }
        justify={justify}
        align={align}
      >
        {children}
      </Flex>
    </section>
  );
};

export default Section;
