import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Section, SectionType } from "../../utils/interfaces/components";
const Section: FC<Section> = ({ id, children, pageType, customBGColor }) => {
  return (
    <section id={id}>
      <Flex
        bgColor={customBGColor ? "brand.colors.companyPageBackground" : "none"}
        width="100vw"
        height={pageType === SectionType.Hero ? "90vh" : "100vh"}
        justify={"center"}
        align="center"
      >
        {children}
      </Flex>
    </section>
  );
};

export default Section;
