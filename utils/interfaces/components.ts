/**
 * COMPONENT TYPES
 */
import { ButtonProps, Input, TableProps } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import { ProductDetails, Result } from "./api/productDetails";

export interface Layout {
  children: React.ReactNode;
  withFooter?: boolean;
}

export interface CustomButton extends ButtonProps {
  text: string;
}

export interface NavButton extends ButtonProps {
  link: string;
  text: string;
}

export interface CustomIcon {
  customAriaLabel: string;
  text?: string;
}

export enum SectionType {
  Hero = "Hero",
  Info = "Info",
  Checkout = "Checkout",
  Product = "Product",
}

export interface Section {
  children: React.ReactNode;
  id: string;
  pageType: SectionType;
  customBGColor?: string;
  justify?: string;
  align?: string;
}

export interface Info {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonLink: string;
  withImage?: boolean;
  images?: string[];
  altText?: string;
}

export interface CompanyName {
  name?: string;
  image?: string;
}

export interface FooterVerbage {
  companyName: string;
  date: Date;
}

export interface Sidebar {
  isVisible: boolean;
  handleClick: () => void;
}

export interface TableStructure {
  product: string;
  price: number;
  quantity: React.HTMLAttributes<HTMLInputElement> | typeof Input;
  cost: number;
}

// interface UserCost
export interface CustomTable extends TableProps {
  titles: string[];
  // rowData: (number | string)[];
  rowData?: Result[];
  incrementQTY: () => void;
  decrementQTY: () => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export interface Checkout {}

export interface Product {
  productData?: Result;
}

export interface IParams extends ParsedUrlQuery {
  product: string;
}

export interface AllProducts {
  products: ProductDetails;
  productData?: Result;
}

export interface API_ProductData {
  productaData?: Result;
}
