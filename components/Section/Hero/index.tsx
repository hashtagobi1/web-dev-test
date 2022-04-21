import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { SectionType } from "../../../utils/interfaces/components";
import theme from "../../../utils/theme";
import Section from "../index";
const Hero = () => {
  return (
    <Section pageType={SectionType.Hero} id={"hero"}>
      <Flex justify={"center"} alignItems="center">
        <Box position="relative">
          <Image
            src={"/images/hero.png"}
            alt="image for main page"
            width={1366}
            height={766}
          />
        </Box>
        <Box
          position="absolute"
          left={{
            base: "5%",
            md: "15%",
            lg: "20%",
          }}
          color={theme.colors.brand.companyWhite}
        >
          <Text mb={2}>APPS unveils new studio</Text>
          <Heading as="h3">Lagom</Heading>
        </Box>
      </Flex>
    </Section>
  );
};

export default Hero;
