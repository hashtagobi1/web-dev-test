import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Layout } from "../../utils/interfaces/components";
import { Footer } from "../../widgets";
import NavBar from "../../widgets/NavBar";

const Layout: FC<Layout> = ({ children }) => {
  return (
    <Flex
      scrollBehavior={"smooth"}
      direction="column"
      height="100%"
      bgColor="brand.colors.companyWhite"
    >
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <Footer />
    </Flex>
  );
};

export default Layout;
