/**
 * COMPONENT TYPES
 */
import { ButtonProps } from "@chakra-ui/react";

export interface Layout {
  children: React.ReactNode;
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
}

export interface Section {
  children: React.ReactNode;
  id: string;
  pageType: SectionType;
  customBGColor?: string;
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
