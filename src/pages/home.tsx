import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import Image from "next/image";

import Link from "next/link";

import MerchBox from '../../public/img/bg/MerchBox.png'

import Fade from 'react-reveal/Fade';

import ProductGrid from "../components/ProductGrid";

import { GetServerSideProps } from 'next'


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
      <div className="text-center mb-8 lg:-mt-20 lg:mb-24">
        <h2 className="font-oxanium-medium lg:text-5xl text-xl"><span>FREE</span> SHIPPING & TAX <span>INCLUDED</span> ON <span>ALL MERCHANDISE</span></h2>
      </div>
      <div className="pr-80">
      <nav aria-label="Breadcrumb place-items-center">
        <ol role="list" className="max-w-2xl mx-auto px-4 flex place-items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li className="">
            <div className="flex place-items-center">
              <div className="">
                <Link href="/merch"><a className="mr-2 text-sm font-oxanium-bold text-sunset-pink"> Merch </a></Link>
              </div>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li className="text-sm pt-0.5">
            <a aria-current="page" className="font-oxanium-bold text-sunset-pink hover:text-cloudy-day"> Home </a>
          </li>
        </ol>
      </nav>
      </div>

      <ProductGrid products={products} filter={["Poster", "Notebook", "Mouse Pad"]} />
    </Fade>
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { result: productIds } = await printful.get("sync/products?limit=100");

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
