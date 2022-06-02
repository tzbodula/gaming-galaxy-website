import { prisma, PrismaClient } from '@prisma/client'

import Fade from 'react-reveal/Fade'

import Image from 'next/image';

import CardIcons from '../../../public/img/images/card_img.png'

import { GetServerSideProps } from 'next';
import { printful } from '../../lib/printful-client';

import useWishlistDispatch from "../../hooks/useWishlistDispatch";
import useWishlistState from "../../hooks/useWishlistState";

import Link from 'next/link';

import { useState } from 'react';

import VariantPicker from "../../components/VariantPicker";

function ProductDetail({ results: product, data: productData }) {

    const { addItem } = useWishlistDispatch();
    const { isSaved } = useWishlistState();

    const id = product.result.sync_product.id

    const name = product.result.sync_product.name

    const variants = product.result.sync_variants

    const [firstVariant] = variants;
    const oneStyle = variants.length === 1;

    const [activeVariantExternalId, setActiveVariantExternalId] = useState(
        firstVariant.external_id
    );

    const activeVariant = variants.find(
        (v) => v.external_id === activeVariantExternalId
    );

    const activeVariantFile = activeVariant.files.find(
        ({ type }) => type === "preview"
    );

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: activeVariant.currency,
    }).format(activeVariant.retail_price);

    const addToWishlist = () => addItem(product);

    const onWishlist = isSaved(id);

    return (
        <div className="">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                        <li>
                            <div className="flex items-center">
                                <div>
                                    <Link href="/merch"><a className="mr-2 text-sm font-oxanium-bold text-sunset-pink"> Merch </a></Link>
                                </div>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                    <Link href={productData.slug}><a className="pt-1 mr-2 text-sm font-oxanium-bold text-sunset-pink"> {productData.linkname} </a></Link>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-4 h-5 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                </svg>
                            </div>
                        </li>

                        <li className="text-sm">
                            <a  aria-current="page" className="font-oxanium-bold text-sunset-pink hover:text-cloudy-day"> {name}</a>
                        </li>
                    </ol>
                </nav>
                    <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <Fade left>
                        <div className="hidden lg:block aspect-w-4 aspect-h-5 overflow-hidden lg:aspect-w-3 lg:aspect-h-4 border-4 shadow-lg shadow-sunset-pink border-sunset-pink h-fit">
                            <Image src={activeVariantFile.preview_url} width="1000" height="1960" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                        </div>
                        </Fade>
                        <Fade top>
                        <div className="hidden lg:block aspect-w-4 aspect-h-5 rounded-lg overflow-hidden lg:aspect-w-3 lg:aspect-h-4 border-4 shadow-lg shadow-sunset-yellow border-sunset-yellow h-fit">
                            <Image src={activeVariantFile.preview_url} width="1000" height="1960" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 border-4 shadow-lg shadow-sunset-orange border-sunset-orange h-fit">
                            <Image src={activeVariantFile.preview_url} width="1000" height="1960" alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                        </div>
                        </Fade>
                    </div>
  
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-sunset-pink lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-cloudy-day sm:text-3xl">{name}</h1>
                    </div>


                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only text-cloudy-day">Product information</h2>
                        <p className="text-3xl font-oxanium-bold text-cloudy-day pb-5">{formattedPrice}</p>
                        {oneStyle  
                            ? null
                            : <p className="text-xl font-oxanium-medium text-cloudy-day pb-5">Pick a variant below!</p>
                        }
                        <VariantPicker
                            value={activeVariantExternalId}
                            onChange={({ target: { value } }) =>
                                setActiveVariantExternalId(value)
                            }
                            variants={variants}
                            disabled={oneStyle}
                        />
                        <h1 className='font-oxanium-extrabold py-5 text-sunset-pink '>FREE SHIPPING!</h1>
   
                        <form className="pb-10">
                            <button 
                            type="submit" 
                            className="w-full bg-nightsky/5 border-2 transition-all border-sunset-pink rounded-md py-3 px-8 flex items-center justify-center text-base font-oxanium-semibold text-cloudy-day hover:bg-sunset-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sunset-orange"
                            data-item-id={activeVariantExternalId}
                            data-item-price={activeVariant.retail_price}
                            data-item-url={`/api/products/${activeVariantExternalId}`}
                            data-item-description={activeVariant.name}
                            data-item-image={activeVariantFile.preview_url}
                            data-item-name={name}
                            >ADD TO CART</button>
                        </form>
                        <Image src={CardIcons} alt="Images of various card companies"></Image>
                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-sunset-pink lg:pr-8">

                        <div>
                            <h3 className="sr-only text-cloudy-day">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base font-oxanium-medium text-cloudy-day">{productData.description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-oxanium-semibold text-sunset-pink">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{productData.highlight1}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{productData.highlight2}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{productData.highlight3}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{productData.highlight4}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-oxanium-semibold text-sunset-pink">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm font-oxanium-medium text-cloudy-day">All our merchandise is made in Charlotte, NC and the material is gathered from various places around the world <br></br> Our designs on all of our merchandise/products are made with the love for content creation in mind <br></br>Out of love for our community, everything will ALWAYS ship free, just  pay the tax for your respective country!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const printfulProductInfo = await printful.get(`sync/products/${context.params.productID}`)

    let productName = printfulProductInfo.result.sync_product.name

    let productType = ""

    if (productName.includes("Poster")) {
        productType="Poster"
    } else if (productName.includes("T-Shirt")) {
        productType="Shirt"
    } else if (productName.includes("Hoodie")) {
        productType="Hoodie"
    } else if (productName.includes("Sweatshirt")) {
        productType="Sweatshirt"
    } else if (productName.includes("Case")) {
        productType="Case"
    } else if (productName.includes("Hat")) {
        productType="Hat"
    } else if (productName.includes("Notebook")) {
        productType="Notebook"
    } else if (productName.includes("Mouse Pad")) {
        productType="Mouse Pad"
    } else if (productName.includes("Crop Top")) {
        productType="Crop Top"
    } else if (productName.includes("Tank Top")) {
        productType="Tank Top"
    } else if (productName.includes("Long Sleeve")) {
        productType="Long Sleeve"
    } else if (productName.includes("Polo Shirt")) {
        productType="Polo Shirt"
    } else if (productName.includes("Mouse Pad")) {
        productType="Mouse Pad"
    } 
    else {
        productType="ERROR"
    }

    const prisma = new PrismaClient()

    const productData = await prisma.merch.findUnique({
        where: {
            id: String(productType)
        }
    })

    prisma.$disconnect()

    return {
        props: {
            results: printfulProductInfo,
            data: productData
        }
    }
}

export default ProductDetail