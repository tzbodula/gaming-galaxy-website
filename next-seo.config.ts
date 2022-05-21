const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "Gaming Galaxy";
const url = "https://swag.nextdropshippingstarter.com";

const seo = {
  title,
  titleTemplate: "%s | Creator Superstore",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@notrab",
    site: "@notrab",
  },
};

export { seo as defaultSEO, url as defaultUrl };
