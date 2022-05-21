import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import Image from "next/image";

import MerchBox from '../../public/img/bg/MerchBox.png'

import Fade from 'react-reveal/Fade';

import ProductGrid from "../components/ProductGrid";

type IndexPageProps = {
  products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
  <>
    <Fade down>
      <div className="pt-12 text-center pb-6 md:pb-12">
        <Image src={MerchBox} alt="Merch Header"></Image>
      </div>
    </Fade>
    <Fade up>
      <ProductGrid products={products} />
    </Fade>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default IndexPage;
