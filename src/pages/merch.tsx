import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";

import MerchBox from '../../public/img/bg/MerchBox.png'

function Merch() {
  return (
    <>
    <Fade down>
    <div className="pt-12 text-center pb-6 md:pb-12">
      <Image src={MerchBox} alt="Merch Header"></Image>
    </div>
  </Fade>
    <div className="grid grid-rows-6 grid-cols-1 lg:grid-rows-1 lg:grid-cols-6 text-center px-5">
      <div>
        <Link href="/shirts"><a>Shirts</a></Link>
      </div>
      <div>
        <Link href="/hoodies"><a>Hoodies</a></Link>
      </div>
      <div>
        <Link href="/sweatshirts"><a>Sweatshirts</a></Link>
      </div>
      <div>
        <Link href="/hats"><a>Hats</a></Link>
      </div>
      <div>
        <Link href="/accessories"><a>Accessories</a></Link>
      </div>
      <div>
        <Link href="/home"><a>Home</a></Link>
      </div>
    </div>
    </>
  )
}


export default Merch;
