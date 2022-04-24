import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Layout } from "../../utils/interfaces/components";
import { Footer, NavBar } from "../../widgets";

const Layout: FC<Layout> = ({ children, withFooter = true }) => {
  const router = useRouter();
  return (
    <Flex
      maxW={"100vw"}
      direction="column"
      height="100%"
      bgColor="brand.colors.companyWhite"
    >
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      {router.pathname.includes("checkout") ? null : <Footer />}
    </Flex>
  );
};

export default Layout;
