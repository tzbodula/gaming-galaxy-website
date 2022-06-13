import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import MerchBox from '../../public/img/bg/MerchBox.png'
import TestSquare from "../../public/img/images/testsquare.png"
import ShirtIcon from "../../public/img/images/shirticon.png"
import HoodieIcon from "../../public/img/images/hoodieicon.png"
import SweatshirtIcon from "../../public/img/images/sweatshirticon.png"
import HatIcon from "../../public/img/images/haticon.png"
import AccessoriesIcon from "../../public/img/images/accessoriesicon.png"
import HomeIcon from "../../public/img/images/homeicon.png"

function Merch() {
  return (
    <>
      <Fade top>
        <div className="pt-12 text-center">
          <Image src={MerchBox} alt="Merch Header"></Image>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="text-center mb-8 lg:-mt-20 lg:mb-24">
          <h2 className="font-oxanium-medium lg:text-5xl text-xl"><span>FREE</span> SHIPPING & TAX <span>INCLUDED</span> ON <span>ALL MERCHANDISE</span></h2>
          <h2 className="font-oxanium-light lg:text-3xl text-lg">CLICK ON EACH LINK TO VIEW OUR SELECTION!</h2>
        </div>
        <div className="grid grid-rows-6 grid-cols-1 lg:grid-rows-1 lg:grid-cols-6 text-center px-5 pb-6">
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={ShirtIcon} alt="Shirt Icon"></Image>
            </div>
            <div className="">
              <Link href="/shirts" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Shirts</button></Link>
            </div>
          </div>
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={HoodieIcon} alt="Shirt Icon"></Image>
            </div>
            <Link href="/hoodies" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Hoodies</button></Link>
          </div>
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={SweatshirtIcon} alt="Shirt Icon"></Image>
            </div>
            <Link href="/sweatshirts" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Sweatshirts</button></Link>
          </div>
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={HatIcon} alt="Shirt Icon"></Image>
            </div>
            <Link href="/hats" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Hats</button></Link>
          </div>
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={AccessoriesIcon} alt="Shirt Icon"></Image>
            </div>
            <Link href="/accessories" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Accessories</button></Link>
          </div>
          <div className="bg-nightsky/25 mx-auto w-4/5 font-oxanium-bold p-5 mb-2 border-2 border-sunset-pink shadow-md shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all">
            <div className="mb-2">
              <Image src={HomeIcon} alt="Shirt Icon"></Image>
            </div>
            <Link href="/home" passHref><button className="bg-nightsky/10 px-7 py-3 border-sunset-pink border-2 hover:border-cloudy-day transistion-all">Home</button></Link>
          </div>
        </div>
      </Fade>
    </>
  )
}


export default Merch;
