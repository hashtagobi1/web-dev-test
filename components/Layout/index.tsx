import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Layout } from "../../utils/interfaces/components";
import NavBar from "../../widgets/NavBar";

const Layout: FC<Layout> = ({ children }) => {
  return (
    <Flex
      scrollBehavior={"smooth"}
      direction="column"
      height="100%"
      bgColor="brand.companyWhite"
    >
      <header>
        <NavBar />
      </header>

      <main>{children}</main>

      <footer>footer</footer>
    </Flex>
  );
};

export default Layout;
