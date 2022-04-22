import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "gu16bjn3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
