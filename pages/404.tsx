import { Flex, Heading, Text } from "@chakra-ui/react";
import { Section } from "../components";
import { SectionType } from "../utils/interfaces/components";

export default function Custom404() {
  return (
    <Section id="404" pageType={SectionType.FourOhFour}>
      <Flex direction={"column"}>
        <Heading>
          <s>obi didn&apos;t build that yet!</s>
          <br /> Oops! We couldn&apos;t find that page!
        </Heading>
        <Text mt={5}>
          Hire Obi to reap all the value he can add to the Company! 😆
        </Text>
      </Flex>
    </Section>
  );
}
