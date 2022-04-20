import Link from "next/link";
import React, { FC } from "react";
import { NavButton } from "../../utils/interfaces/components";
import CustomButton from "../CustomButton";

const NavButton: FC<NavButton> = ({ link, text }) => {
  return (
    <Link passHref href={`/${link.toLowerCase()}`}>
      <CustomButton text={text} />
    </Link>
  );
};

export default NavButton;
