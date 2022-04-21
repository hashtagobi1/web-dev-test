import {
  Button,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { FC, useState } from "react";
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
  images,
  altText,
}) =>
  // {images.map((image, i) => (
  //   <motion.img
  //     key={`${image}-${i}`}
  //     src={image}
  //     alt={altText}
  //     height={683}
  //     width={683}
  //   />
  // ))}
  {
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
              <Button
                position="absolute"
                size="xs"
                onClick={() =>
                  setCurrentImage((prev) => {
                    if (prev === 0) {
                      return images.length - 1;
                    }
                    return currentImage - 1;
                  })
                }
              >
                Left
              </Button>
              <Flex
                height={500}
                width={500}
                zIndex={-1}
                // animation={`animation: ${fadein} 4s`}
              >
                <AnimatePresence initial={false} exitBeforeEnter>
                  <motion.img
                    src={images[currentImage]}
                    height={500}
                    width={500}
                    key={`${currentImage}-${images[currentImage]}`}
                    initial={"hidden"}
                    variants={variants}
                    animate={"show"}
                    // exit={{ opacity: 0 }}
                  />
                </AnimatePresence>
              </Flex>
              <Button
                left="20%"
                size="xs"
                position="absolute"
                onClick={() =>
                  setCurrentImage((prev) => {
                    console.log("Current Number: ", currentImage);
                    console.log("Prev", prev);
                    console.log("Array Length", images.length);
                    if (prev >= images.length - 1) {
                      return 0;
                    }
                    return currentImage + 1;
                  })
                }
              >
                Right
              </Button>
            </Flex>
          ) : null}
          {/* position="absolute" left=
        {{
          base: "5%",
          md: "15%",
          lg: "20%",
        }} */}
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
