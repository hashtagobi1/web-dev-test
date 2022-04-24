import {
  Flex,
  Heading,
  Text,
  useMediaQuery,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Section from "..";
import { ARIA_LEFT_ARROW } from "../../../utils/constants";
import { Info, SectionType } from "../../../utils/interfaces/components";
import theme from "../../../utils/theme";
import CustomButton from "../../CustomButton";
import CustomIconButton from "../../IconButton";
const Info: FC<Info> = ({
  heading,
  subheading,
  buttonLink,
  buttonText,
  withImage,
  images,
  altText,
}) => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px) ");
  const [currentImage, setCurrentImage] = useState<number>(
    images ? images.length : 0
  );
  const prefersReducedMotion = usePrefersReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {}
    : {
        hidden: {
          x: "100px",
          opacity: 0,
          scale: 0,
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.3,
          },
          x: "0px",
          scale: 1,
        },
      };

  return (
    <Section
      pageType={SectionType.Info}
      id="info"
      customBGColor={"brand.colors.companyPageBackground"}
    >
      <Flex
        scrollSnapType={"both mandatory"}
        justify={"center"}
        align="center"
        textAlign={"center"}
        direction={isSmallerThan600px ? "column-reverse" : "row"}
      >
        {withImage && images ? (
          <Flex>
            <CustomIconButton
              icon={<FaArrowCircleLeft />}
              customAriaLabel={ARIA_LEFT_ARROW}
              aria-label={ARIA_LEFT_ARROW}
              left="5%"
              size="md"
              border={"1px solid black"}
              position="absolute"
              onClick={() =>
                setCurrentImage((prev) => {
                  if (prev === 0) {
                    return images.length - 1;
                  }
                  return currentImage - 1;
                })
              }
            />
            <Flex height={500} width={500} zIndex={-1}>
              <AnimatePresence initial={false} exitBeforeEnter>
                <motion.img
                  src={images[currentImage]}
                  height={500}
                  width={500}
                  key={`${currentImage}-${images[currentImage]}`}
                  initial={"hidden"}
                  variants={variants}
                  animate={"show"}
                />
              </AnimatePresence>
            </Flex>
            <CustomIconButton
              icon={<FaArrowCircleRight />}
              customAriaLabel={ARIA_LEFT_ARROW}
              aria-label={ARIA_LEFT_ARROW}
              border={"1px solid black"}
              right="5%"
              size="md"
              position="absolute"
              onClick={() =>
                setCurrentImage((prev) => {
                  if (prev >= images.length - 1) {
                    return 0;
                  }
                  return currentImage + 1;
                })
              }
            />
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
            {heading}
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
