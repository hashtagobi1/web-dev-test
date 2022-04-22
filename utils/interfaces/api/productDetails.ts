export interface Blurb {
  _type: string;
  en: string;
}

export interface Child {
  _key: string;
  _type: string;
  marks: any[];
  text: string;
}

export interface En {
  _key: string;
  _type: string;
  children: Child[];
  markDefs: any[];
  style: string;
}

export interface Body {
  _type: string;
  en: En[];
}

export interface Category {
  _key: string;
  _ref: string;
  _type: string;
}

export interface Barcode {
  _type: string;
  format: string;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Image {
  _key: string;
  _type: string;
  asset: Asset;
}

export interface DefaultProductVariant {
  _type: string;
  barcode: Barcode;
  grams: number;
  images: Image[];
  price: number;
  sku: string;
  stock: number;
  title: string;
}

export interface Slug {
  _type: string;
  current: string;
}

export interface Vendor {
  _ref: string;
  _type: string;
}

export interface Result {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  blurb: Blurb;
  body: Body;
  categories: Category[];
  defaultProductVariant: DefaultProductVariant;
  slug: Slug;
  tags: string[];
  title: string;
  vendor: Vendor;
}

export interface ProductDetails {
  ms: number;
  query: string;
  productDetails: Result[];
}
