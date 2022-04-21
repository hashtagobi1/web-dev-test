import Link from "next/link";
import React, { FC } from "react";
import { NavButton } from "../../utils/interfaces/components";
import CustomButton from "../CustomButton";

const NavButton: FC<NavButton> = ({ link, text, variant, p, m }) => {
  return (
    <Link passHref href={`${link.toLowerCase()}`}>
      <CustomButton m={m} p={p} variant={variant} text={text.toUpperCase()} />
    </Link>
  );
};

export default NavButton;
