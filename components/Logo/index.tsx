import { Heading, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";
import { CompanyName } from "../../utils/interfaces/components";

const CompanyName: FC<CompanyName> = ({ name, image }) => {
  const [isSmallerThan600px] = useMediaQuery("(max-width: 600px)");

  const renderLogo = () => {
    if (name) {
      return (
        <Heading fontWeight={"thin"} as={isSmallerThan600px ? "h6" : "h1"}>
          {name.toUpperCase()}
        </Heading>
      );
    }

    if (image) {
      return <Image src={image} alt="company logo" width={75} height={75} />;
    }
    if (!name && !image) return null;
  };

  return <>{renderLogo()}</>;
};

export default CompanyName;
