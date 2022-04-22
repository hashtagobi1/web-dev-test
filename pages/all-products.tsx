import { GetStaticProps } from "next";
import React, { FC } from "react";
import client from "../client";
import { ProductDetails } from "../utils/interfaces/api/productDetails";
import { AllProducts } from "../utils/interfaces/components";

const AllProducts: FC<AllProducts> = ({ products }) => {
  if (products) {
    products.productDetails.map((detail, i) => {
      console.log(detail);
    });
  }
  return <div>AllProducts</div>;
};

export default AllProducts;

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { product = "" } = context.params;

//   // console.log("Paths", paths);

//   const products: ProductDetails = await client.fetch(
//     `*[_type == "product"]`,
//     product
//   );

//   //   console.log("slug", context);

//   return {
//     props: {
//       products,
//     },
//   };
// };
