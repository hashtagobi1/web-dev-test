import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/libre-franklin";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
