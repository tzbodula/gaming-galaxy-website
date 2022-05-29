import { PrismaClient } from '@prisma/client'

import Fade from 'react-reveal/Fade'

import Image from 'next/image';

import { GetServerSideProps } from 'next';

const prisma = new PrismaClient();

function ProductDetail({ results: product }) {


    return (
        <div className="">
            <div className="pt-6">
                <Fade top>
                <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                    <div className="hidden aspect-w-3 aspect-h-4 rounded-lg border-4 shadow-md shadow-sunset-pink border-sunset-pink overflow-hidden lg:block">
                        <Image src={product.image_1} alt="Two each of gray, white, and black shirts laying flat." className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden border-4 shadow-md shadow-sunset-pink border-sunset-pink">
                            <Image src={product.image_2} alt="Model wearing plain black basic tee." className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden border-4 shadow-md shadow-sunset-pink border-sunset-pink">
                            <Image src={product.image_3} alt="Model wearing plain gray basic tee." className="w-full h-full object-center object-cover" />
                        </div>
                    </div>
                    <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4 border-4 shadow-md shadow-sunset-pink border-sunset-pink">
                        <Image src={product.image_4} alt="Model wearing plain white basic tee." className="w-full h-full object-center object-cover" />
                    </div>
                </div>
                </Fade>
                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2 lg:border-r lg:border-sunset-pink lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-cloudy-day sm:text-3xl">{product.merch_name}</h1>
                    </div>


                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        <h2 className="sr-only text-cloudy-day">Product information</h2>
                        <p className="text-3xl font-oxanium-bold text-cloudy-day">{product.merch_price}</p>
                        <form className="mt-10">
                            <button type="submit" className="mt-10 w-full bg-nightsky/5 border-2 transition-all border-sunset-pink rounded-md py-3 px-8 flex items-center justify-center text-base font-oxanium-semibold text-cloudy-day hover:bg-sunset-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sunset-orange">ADD TO CART</button>
                        </form>
                    </div>

                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-sunset-pink lg:pr-8">

                        <div>
                            <h3 className="sr-only text-cloudy-day">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base font-oxanium-medium text-cloudy-day">{product.merch_description}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-oxanium-semibold text-sunset-pink">Highlights</h3>

                            <div className="mt-4">
                                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{product.highlight_1}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{product.highlight_2}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{product.highlight_3}</span></li>

                                    <li className="text-cloudy-day font-oxanium-medium"><span className="text-cloudy-day">{product.highlight_4}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-oxanium-semibold text-sunset-pink">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm font-oxanium-medium text-cloudy-day">{product.merch_details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const productDetails = await prisma.merch.findUnique({
        where: {
            merch_id: Number(context.params.productID)
        }
    })
    return {
        props: {
            results: productDetails
        }
    }
}

export default ProductDetail