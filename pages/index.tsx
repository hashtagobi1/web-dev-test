import type { NextPage } from "next";
import { Hero, Info } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Info
        heading={`more than just 'clothing'`}
        subheading="APPS understand that clothes carry with them a certain frequency. feeling low vibrations? high vibration? we supply clothes for all moods."
        buttonText="Products"
        buttonLink="/all-products"
      />
      <Info
        heading="The imaginative application of art and science."
        subheading="Apps is an innovation and experience design agency. We exist to create a better future with you."
        buttonText="Read Latest "
        buttonLink=""
        withImage
        altText="picture"
        images={["/images/mountains.png", "/images/hero.png"]}
      />
    </>
  );
};

export default Home;
