import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Libre Franklin, sans-serif",
    body: "Libre Franklin, sans-serif",
  },
  colors: {
    brand: {
      companyBlue: "#448AFF",
      companyBlack: "#000",
      companyWhite: "#FFF",
      companyGreyMain: "##757575",
      companyGreyLight: "#EBEBEB",
      companyPageBackground: "#FAFAFA",
    },
    text: {
      faded: "#727272",
    },
  },
});

export default theme;
