import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Section from "..";
import { Info, SectionType } from "../../../utils/interfaces/components";
import theme from "../../../utils/theme";
import CustomButton from "../../CustomButton";

const Info: FC<Info> = ({
  heading,
  subheading,
  buttonLink,
  buttonText,
  withImage,
  image = "",
  altText,
}) => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px) ");

  return (
    <Section
      pageType={SectionType.Info}
      id="info"
      customBGColor={"brand.colors.companyPageBackground"}
    >
      <Flex
        justify={"center"}
        align="center"
        textAlign={"center"}
        direction={isSmallerThan600px ? "column-reverse" : "row"}
      >
        {withImage ? (
          <Flex>
            <Image src={image} alt={altText} height={683} width={683} />
          </Flex>
        ) : null}
        <Flex
          justify={isSmallerThan600px ? "start" : "center"}
          align={isSmallerThan600px ? "start" : "center"}
          textAlign={isSmallerThan600px ? "start" : "center"}
          p={isSmallerThan600px ? 5 : 20}
          direction="column"
        >
          <Heading color={theme.colors.text.faded} as="h3" mb={5}>
            {heading}{" "}
          </Heading>
          <Text width={"60%"}>{subheading}</Text>
          <Link href={`/${buttonLink}`} passHref>
            <a>
              <CustomButton
                boxShadow={"dark-lg"}
                bgColor={theme.colors.brand.companyBlue}
                color={theme.colors.brand.companyWhite}
                text={buttonText.toUpperCase()}
                variant="solid"
                _hover={{ color: "black" }}
                mt={10}
                p={5}
              />
            </a>
          </Link>
        </Flex>
      </Flex>
    </Section>
  );
};

export default Info;
