import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC, useState } from "react";
import client from "../client";
import { CustomButton, CustomTable, Section } from "../components";
import { ProductDetails } from "../utils/interfaces/api/productDetails";
import { Checkout, Product, SectionType } from "../utils/interfaces/components";
import theme from "../utils/theme";

const Checkout: FC<Checkout> = () => {
  const [quantity, setQuantity] = useState(5);

  const tableHeadings = ["Product", "Price", "Quantity", "Cost"];
  const price = 12;
  const rowData = ["T shirt", 12.99, quantity, quantity * price];

  const data = [
    {
      product: "T shirt",
      price: 12.99,
      quantity,
      cost: quantity * price,
    },
    {
      product: "T shirt",
      price: 12.99,
      quantity,
      cost: quantity * price,
    },
    {
      product: "T shirt",
      price: 12.99,
      quantity,
      cost: quantity * price,
    },
  ];

  const increaseQuantity = () => {
    setQuantity((prev) => {
      return prev + 1;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      return prev - 1;
    });
  };

  const renderCostDetails = (title: string, costDetail: number | string) => {
    return (
      <Flex justify={"space-between"} direction="row" mb={5}>
        <Text>{title}</Text>
        <Text>£ {costDetail}</Text>
      </Flex>
    );
  };
  return (
    <Section id="checkout-screen" pageType={SectionType.Checkout}>
      <Flex direction={"column"}>
        <Flex direction="column">
          <Heading mb={3} as="h2">
            Your Basket
          </Heading>
          <Text>
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing purchase.
          </Text>
        </Flex>

        <Flex direction={"column"} align="center" mt={20}>
          <CustomTable
            setQuantity={setQuantity}
            decrementQTY={decreaseQuantity}
            incrementQTY={increaseQuantity}
            // rowData={products}
            titles={tableHeadings}
          />
        </Flex>

        {renderCostDetails("Subtotal", quantity * price)}
        {renderCostDetails("VAT at 20%", (quantity * price * 0.2).toFixed(2))}
        {renderCostDetails(
          "Total Cost",
          (quantity * price + quantity * price * 0.2).toFixed()
        )}

        <Flex justify={"end"}>
          <CustomButton
            bgColor={theme.colors.brand.companyBlue}
            color={theme.colors.brand.companyWhite}
            text="BUY NOW"
            _hover={{
              color: "black",
            }}
            size="lg"
          />
        </Flex>
      </Flex>
    </Section>
  );
};

export default Checkout;

// export const getStaticPaths: GetStaticPaths = async (context) => {
//   const paths: any[] = await client.fetch(
//     `*[_type == "product" && defined(product.current)][].product.current`
//     // `*[_type == "product"]{...}`
//   );

//   // *[_type == "products" && defined(product.current)[].product.current
//   // *[_type == "post" && defined(slug.current)][].slug.current`
//   return {
//     paths: paths.map((product) => ({ params: { product } })),
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { product = "" } = context.params;
//   console.log(context.params);

//   const products: ProductDetails = await client.fetch(`*[_type == "product"]`, {
//     product,
//   });

//   return {
//     props: {
//       products,
//     },
//   };
// };
