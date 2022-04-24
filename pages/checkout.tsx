import {
  Box,
  Flex,
  Heading,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import axios from "axios";
import groq from "groq";
import { GetStaticProps } from "next";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import client from "../client";
import { CustomButton, CustomTable, Section } from "../components";
import { API_PRODUCT, CUSTOMER_ORDER } from "../utils/constants";
import { ProductDetails } from "../utils/interfaces/api/productDetails";
import { CartItem } from "../utils/interfaces/cart";
import { Checkout, SectionType } from "../utils/interfaces/components";
import theme from "../utils/theme";

const Checkout: FC<Checkout> = ({ productData }) => {
  const [userCart, setUserCart] = useState<CartItem[]>([]);
  const [submittedData, setSubmittedData] = useState<boolean>(false);
  const [reciept, setReciept] = useState<boolean>(false);
  const [storageData, setStorageData] = useState<string | null>("");
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");
  const toast = useToast();

  function urlFor(src: SanityImageSource) {
    return imageUrlBuilder(client).image(src);
  }

  useEffect(() => {
    if (window.localStorage.getItem(CUSTOMER_ORDER)) {
      setReciept((prev) => {
        return true;
      });
      setStorageData(window.localStorage.getItem(CUSTOMER_ORDER));
      return;
    }
    setReciept((prev) => {
      return false;
    });

    if (productData) {
      /**
       * we create a fake basket using certain details pulled from the API
       */
      setUserCart((prev) => {
        let cartArr: any[] = [];
        productData.map(({ defaultProductVariant }, i) => {
          let newCart: CartItem = {};
          newCart.name = defaultProductVariant.title;
          newCart.price = defaultProductVariant.price;
          newCart.sku = defaultProductVariant.sku;
          newCart.stockLevel = defaultProductVariant.stock;
          let randomQuantity =
            Math.floor(Math.random() * (defaultProductVariant.stock - 0 + 1)) +
            0;
          newCart.quantity = randomQuantity;
          newCart.picture = urlFor(defaultProductVariant.images[0]).url();

          if (randomQuantity === 0) {
            return;
          }

          cartArr.push(newCart);
        });
        return cartArr;
      });
    }
  }, [productData]);

  const tableHeadings = ["Product", "Price", "Quantity", "Cost"];

  const handleChange = (item: CartItem, value_num: number, sku: string) => {
    setUserCart((prev) => {
      let oldArray = [...prev];
      const product = oldArray.find((product) => product.sku === item.sku);

      if (item.quantity && item.stockLevel && product?.quantity) {
        if (item.quantity > item.stockLevel) {
          product.quantity = item.stockLevel;
        }
      }

      if (product) {
        product.quantity = value_num;
      }

      return oldArray;
    });
  };

  /**
   *
   * @param item we set the quantity to zero then remove it from the users basket
   */
  const deleteRow = (item: CartItem) => {
    setUserCart((prev) => {
      let oldArray = [...prev];
      // let indexOfProduct: number;

      let product = oldArray.find((product) => product.sku === item.sku);

      if (product) {
        let indexOfProduct = oldArray.indexOf(product);
        product.quantity = 0;
        oldArray.splice(indexOfProduct, 1);
      }

      toast({
        title: "Removed.",
        description: `Poof, we've removed '${item.name}' from your cart.`,
        status: "info",
        duration: 3500,
        isClosable: true,
      });
      return oldArray;
    });
  };
  const incrementQTY = (recievedProduct: CartItem, newQuantity: number) => {
    /**
     * we take a copy of the current state, find the item selected then increment the amount in the users cart.
     *
     * if max has been reached, we notify them
     */
    setUserCart((prev) => {
      let oldArray = [...prev];
      if (recievedProduct.quantity && recievedProduct.stockLevel) {
        if (recievedProduct.quantity > recievedProduct.stockLevel + 1) {
          return oldArray;
        }

        oldArray.forEach((element, index) => {
          if (
            element.sku === recievedProduct.sku &&
            element.quantity &&
            element.stockLevel
          ) {
            if (element.quantity < element.stockLevel) {
              return (element.quantity = newQuantity);
            }
            toast({
              title: "MAX LIMIT.",
              description: `The max amount for '${element.name}' is ${element.stockLevel} items!`,
              status: "warning",
              duration: 3500,
              isClosable: true,
            });
          }
        });
      }

      return oldArray;
    });
  };

  const decrementQTY = (recievedProduct: CartItem, newQuantity: number) => {
    /**
     * we take a copy of the current state, find the item selected then decrement the amount in the users cart.
     *
     * if min has been reached, we notify them
     *
     */

    setUserCart((prev) => {
      let oldArray = [...prev];
      let indexOfProduct: number;
      const product = oldArray.find(
        (product) => product.sku === recievedProduct.sku
      );
      if (product) {
        indexOfProduct = oldArray.indexOf(product);
      }

      oldArray.forEach((element, index) => {
        if (
          element.sku === recievedProduct.sku &&
          element.quantity &&
          element.stockLevel
        ) {
          if (element.quantity) {
            return (element.quantity = newQuantity);
          }
        }
      });
      return oldArray;
    });
  };

  const handleNewOrder = () => {
    window.localStorage.removeItem(CUSTOMER_ORDER);
    window.location.reload();
  };

  const checkDisabled = () => {
    if (!userCart.length) {
      return true;
    }
    return submittedData;
  };
  const handleBuyNow = () => {
    setSubmittedData((prev) => {
      return !prev;
    });

    /**
     * we fake an transaction by waiting 5 seconds then emptying state.
     *
     * we then show the user what they ordered and save this to their local storage.
     *
     * We give them the option to make  new transaction, (remove the item from storage)
     *
     */
    setTimeout(() => {
      setSubmittedData((prev) => {
        return !prev;
      });

      toast({
        title: "Checkout Complete",
        description: `Woo! Your items have been ordered! 🛍. Sit back and relax 😎`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setReciept((prev) => {
        return true;
      });
      setUserCart((prev) => {
        let oldArray = [...prev];
        window.localStorage.setItem(CUSTOMER_ORDER, JSON.stringify(oldArray));
        const postData = async () => {
          await axios
            .post(API_PRODUCT, {
              oldArray,
            })
            .then((res) => {
              console.log(res.data);
            });
        };
        let emptyCart: CartItem[] = [];
        postData();

        return emptyCart;
      });
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }, 5000);
  };

  /**
   * @returns subtotal after reducing the cartItems Object
   */
  const subtotal: number = userCart.reduce(
    (accumulator: any, { price, quantity }) => {
      if (price && quantity) {
        return accumulator + price * quantity;
      } else return 0;
    },
    0
  );

  const vat: number = userCart.reduce(
    (accumulator: any, { price, quantity }) => {
      if (price && quantity) {
        const vatCalc: string = (quantity * price * 0.2).toFixed(2);
        return Number(vatCalc);
      } else return 0;
    },
    0
  );

  /**
   * @returns vat + sub total
   */
  const totalCost: number = Number((vat + subtotal).toFixed(2));

  /**
   *
   * @returns an array of purchased products based on user basket
   */
  const renderReciept = () => {
    let items: CartItem[] = [];
    if (storageData) {
      items = JSON.parse(storageData);
    }
    const values = Object.values(items);
    const productDetails = Object.entries(values);

    if (items) {
      const values = Object.values(items);
      const productDetails = Object.entries(values);

      return (
        <Flex direction={"column"} m={1} justify="center" align={"center"}>
          {reciept ?? (
            <Heading fontSize={"xl"} as="h3" mb={3}>
              Coming your way...
            </Heading>
          )}

          <Flex
            justify="center"
            align="center"
            direction={isSmallerThan600px ? "column" : "row"}
          >
            {productDetails.map((item, i) => {
              return (
                <Flex
                  key={i}
                  direction="row"
                  align="center"
                  m={10}
                  border="1px solid black"
                  p={5}
                >
                  <Text fontSize="lg" mr={5}>
                    {item[1].quantity} pairs of &quot;{item[1].name}&quot;
                  </Text>
                  {item[1].picture ? (
                    <Image
                      width={isSmallerThan600px ? 50 : 250}
                      height={isSmallerThan600px ? 50 : 250}
                      src={item[1].picture}
                      alt={`image of ${item[1].name}`}
                    />
                  ) : null}
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      );
    }
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
      <Flex direction={"column"} justify="center">
        <Flex direction="column" align="center">
          <Heading
            as="h2"
            mt={isSmallerThan600px ? 150 : 5}
            bgGradient="linear(to-l, #869bc6, #399dea)"
            bgClip="text"
            fontSize={{
              base: "3xl",
              lg: "6xl",
            }}
            fontWeight="extrabold"
          >
            {userCart.length > 0
              ? "Your Basket"
              : "Wow! You have an empty basket!"}
          </Heading>
          {userCart.length > 0 ?? (
            <Text>
              Items you have added to your basket are shown below. Adjust the
              quantities or remove items before continuing purchase.
            </Text>
          )}
        </Flex>

        <Flex direction={"column"} align="center" mt={20}>
          <CustomTable
            decrementQTY={decrementQTY}
            incrementQTY={incrementQTY}
            handleChange={handleChange}
            rowData={userCart}
            deleteRow={deleteRow}
            titles={tableHeadings}
          />
        </Flex>

        {userCart.length && !window.localStorage.getItem(CUSTOMER_ORDER) ? (
          <Flex direction={"column"} p={5}>
            {renderCostDetails("Subtotal", subtotal.toFixed(2))}
            {renderCostDetails("VAT at 20%", Number(vat))}
            {renderCostDetails("Total Cost", totalCost)}
          </Flex>
        ) : (
          <Box>
            {renderReciept()}
            <Flex justify={"center"}>
              <CustomButton
                maxW={"30%"}
                width={"30%"}
                size="lg"
                bgColor={"black"}
                shadow={"dark-lg"}
                color="white"
                text="Make a new order"
                _hover={{
                  bgColor: "white",
                  color: "black",
                  border: "1px solid black",
                  transform: "scale(1.3)",
                }}
                onClick={handleNewOrder}
              />
            </Flex>
          </Box>
        )}

        <Flex justify={"end"}>
          <CustomButton
            bgColor={theme.colors.brand.companyBlue}
            color={theme.colors.brand.companyWhite}
            text="BUY NOW"
            onClick={handleBuyNow}
            _hover={{
              color: "black",
            }}
            size="lg"
            disabled={checkDisabled()}
            isLoading={submittedData}
          />
        </Flex>
      </Flex>
    </Section>
  );
};

export default Checkout;
export const getStaticProps: GetStaticProps = async (context) => {
  const getAllProducts = groq`*[_type == "product"]`;
  const productData: ProductDetails = await client.fetch(getAllProducts, {});

  return {
    props: {
      productData,
    },
  };
};
