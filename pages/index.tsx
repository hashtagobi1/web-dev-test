import groq from "groq";
import { FC, useEffect, useState } from "react";
import client from "../client";
import { Hero, Info } from "../components";
import { Home } from "../utils/interfaces/components";

const Home: FC<Home> = () => {
  const [slug, setSlug] = useState("");
  useEffect(() => {
    let allPaths: string[] = [];
    const getAllSlugs = groq`*[_type == "product" && defined(slug.current)][].slug.current`;
    const paths: string[] | (() => Promise<void>) = async () => {
      await client
        .fetch(getAllSlugs)
        .then((res: string[]) => {
          allPaths = res;
          return allPaths;
        })
        .finally(() => {
          /**
           * select a random element from the array to use as the page slug
           *  */
          let link: any = allPaths[Math.floor(Math.random() * allPaths.length)];
          setSlug(link);
        });
    };
    paths();
  }, [slug]);

  return (
    <>
      <Hero />
      <Info
        heading={`more than just 'shoes'`}
        subheading="APPS understand that footwear carry with them a certain frequency. feeling low vibrations? high vibration? we supply kicks for all moods."
        buttonText="surpise shoe"
        buttonLink={`products/${slug}`}
      />
      <Info
        heading="The imaginative application of art and science."
        subheading="Apps harness the power of nature to create a sustainable experience for your feet."
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
