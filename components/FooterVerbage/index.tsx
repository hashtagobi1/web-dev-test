import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React, { FC } from "react";
import { FooterVerbage } from "../../utils/interfaces/components";

const FooterVerbage: FC<FooterVerbage> = ({ companyName, date }) => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");

  return (
    <Flex direction={"column"} textAlign={isSmallerThan600px ? "start" : "end"}>
      <Text>Privacy Policy</Text>
      <Text>
        &copy; {date.getFullYear()} {companyName}. All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default FooterVerbage;
