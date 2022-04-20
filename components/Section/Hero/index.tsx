import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/components/hero/hero.module.css";
import { SectionType } from "../../../utils/interfaces/components";
import Section from "../index";

const Hero = () => {
  return (
    <Section pageType={SectionType.Hero} id={"hero"}>
      <Flex justify={"center"} alignItems="center">
        <Box className={styles.imageBox} position="relative">
          <Image
            src={"/images/hero.png"}
            alt="image for main page"
            width={1366}
            height={766}
          />
        </Box>
        <Box
          className={styles.textBox}
          position="absolute"
          left={{
            base: "5%",
            md: "15%",
            lg: "20%",
          }}
          color="red"
        >
          <Text mb={2}>APPS unveils new studio</Text>
          <Heading as="h3">Lagom</Heading>
        </Box>
      </Flex>
    </Section>
  );
};

export default Hero;
