import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

/**
 * STORAGE KEYS
 */
export const CUSTOMER_ORDER: string = "APPS_RECEIPT";

/**
 * ENDPOINTS
 */
export const API_PRODUCT: string = "/api/products";
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
export const ARIA_LEFT_ARROW = "change picture left";
export const ARIA_RIGHT_ARROW = "change picture right";

/**
 * NAV ITEMS
 */

export const navItems = ["products", "news", "contact"];
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
