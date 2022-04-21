import type { NextPage } from "next";
import { Hero, Info, Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Info
        heading="Innovation and experience design agency."
        subheading="Apps is an innovation and experience design agency. We exist to create a better future with you."
        buttonText="Products"
        buttonLink="/"
      />
      <Info
        heading="The imaginative application of art and science."
        subheading="Apps is an innovation and experience design agency. We exist to create a better future with you."
        buttonText="Read Latest "
        buttonLink="/"
        withImage
        altText="picture"
        images={["/images/mountains.png", "/images/hero.png"]}
      />
    </Layout>
  );
};

export default Home;
