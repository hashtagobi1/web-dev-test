import {
  Flex,
  Heading,
  keyframes,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import groq from "groq";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import client from "../../client";
import { Section } from "../../components";
import { Result } from "../../utils/interfaces/api/productDetails";
import {
  IParams,
  Product,
  SectionType,
} from "../../utils/interfaces/components";
import theme from "../../utils/theme";

function urlFor(src: SanityImageSource) {
  return imageUrlBuilder(client).image(src);
}

const Product: FC<Product> = ({ productData }) => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");

  const router = useRouter();
  console.log("route", router.query);

  const float = keyframes`
	0% {
		box-shadow: 0 5px 15px 0px #56D4D7;
		transform: translatey(0px);
		transform: translatex(0px);

	}
	50% {
		box-shadow: 0 5px 15px 0px #DD00FF;
		transform: translatey(-50px);
		/* transform: translatex(-25px); */
	}
	100% {
		box-shadow: 0 5px 15px 0px #CA19F9
		transform: translatey(0px)
		transform: translatex(0px);

}`;
  const animation = () => `${float} 9s ease-in-out infinite;`;
  const renderPage = () => {
    if (!productData) {
      return (
        <Spinner
          thickness="2px"
          speed="1s"
          emptyColor="gray.200"
          color={theme.colors.brand.companyBlue}
          size="xl"
        />
      );
    }

    return (
      <Flex justify={"space-between"} direction="column" align="center">
        <Flex mb={10}>
          <Heading
            bgGradient="linear(to-l, #733771, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            {productData.defaultProductVariant.title}
          </Heading>
        </Flex>
        <Flex
          _hover={{
            transition: "all 1s ease-in-out;",
          }}
          animation={animation()}
          my={3}
        >
          <Image
            src={urlFor(productData.defaultProductVariant.images[0]).url()}
            alt={`image for ${productData.defaultProductVariant.title}`}
            width={isSmallerThan600px ? 150 : 500}
            height={isSmallerThan600px ? 150 : 500}
          />
        </Flex>

        <Text
          mb={25}
          fontSize={"md"}
          color={theme.colors.brand.companyGreyMain}
          width="50%"
        >
          {productData.body.en[0].children[0].text}
        </Text>
      </Flex>
    );
  };
  return (
    <Section pageType={SectionType.Product} id="product-sale">
      {renderPage()}
    </Section>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async (context) => {
  const getAllSlugs = groq`*[_type == "product" && defined(slug.current)][].slug.current`;
  const paths: string[] = await client.fetch(getAllSlugs);
  return {
    paths: paths.map((product) => ({ params: { product } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { product } = context.params as IParams;
  const getProductViaPathname = groq`*[_type == "product" && slug.current == "${product}"]`;
  const productData: Result[] = await client.fetch(getProductViaPathname, {
    product,
  });

  return {
    props: {
      productData: productData[0],
    },
  };
};
