import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

/**
 * ARIA LABELS
 */

export const ARIA_CHECKOUT = "checkout";
export const ARIA_MENU = "menu";
export const ARIA_SOCIAL_GOOGLE_PLUS = "company google plus";
export const ARIA_SOCIAL_FACEBOOK = "company facebook";
export const ARIA_SOCIAL_INSTAGRAM = "company instagram";
export const ARIA_SOCIAL_TWITTER = "company twitter";
export const ARIA_REMOVE_PRODUCT = "remove product";

/**
 * NAV ITEMS
 */

export const navItems = ["Products", "News", "Contact"];
export const socialIcons = [
  {
    aria: ARIA_SOCIAL_GOOGLE_PLUS,
    icon: FaGooglePlusG,
    link: "https://myaccount.google.com/profile",
  },
  {
    aria: ARIA_SOCIAL_FACEBOOK,
    icon: FaFacebook,
    link: "https://en-gb.facebook.com/",
  },
  {
    aria: ARIA_SOCIAL_INSTAGRAM,
    icon: FaInstagram,
    link: "https://www.instagram.com/?hl=en/",
  },
  {
    aria: ARIA_SOCIAL_TWITTER,
    icon: FaTwitter,
    link: "https://twitter.com/?lang=en",
  },
];
