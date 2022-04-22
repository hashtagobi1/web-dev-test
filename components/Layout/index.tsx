import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { Layout } from "../../utils/interfaces/components";
import { Footer } from "../../widgets";
import NavBar from "../../widgets/NavBar";

const Layout: FC<Layout> = ({ children, withFooter = true }) => {
  const router = useRouter();
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

      {router.pathname.includes("checkout") ? null : <Footer />}
    </Flex>
  );
};

export default Layout;
