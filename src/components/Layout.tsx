import Link from "next/link";
import Image from "next/image";
import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";
import { useContext } from "react";
import { useRouter } from "next/router";

import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaLinkedin,
  FaTiktok,
  FaReddit,
  FaFacebook,

} from "react-icons/fa";

import { IconContext } from "react-icons";

import { UserContext } from "../context/userContext";

import GGLogo from '../../public/img/logo/logo.png'
import FooterFire from '../../public/img/images/footer_fire.png'
import CardIcons from '../../public/img/images/card_img.png'

const Layout = ({ children }) => {

  const router = useRouter();

  const [user, setUser] = useContext(UserContext);

  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="sticky z-50 top-0">
        <nav className="bg-nightsky border-gray-200 p-2">
          <div className=" container mx-auto flex flex-wrap items-center justify-between">

            <Image className="flex-start" src={GGLogo} alt="Gaming Galaxy Logo"></Image>

            <button data-collapse-toggle="mobile-menu" type="button" className="md:hidden ml-3 text-cloudy-day hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="sm:pl-0 md:pl-0 lg:pl-35 xl:pl-40 2xl:pl-45 hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <Link href="/">
                  <a className={`${router.pathname == "/" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative" aria-current="page" `}>
                    HOME</a>
                </Link>
               
                <Link href="/about">
                  <a className={`${router.pathname == "/about" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative`}>
                    ABOUT</a>
                </Link>

                <Link href="/creators">
                  <a className={`${router.pathname == "/creators" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative`}>
                    CREATORS</a>
                </Link>

                <Link href="/gamers">
                  <a className={`${router.pathname == "/gamers" ? "text-sunset-pink" : "text-cloudy-day"}  hover:cloudy-day border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative`}>
                    GAMERS</a>
                </Link>

                <Link href="/packages">
                  <a className={`${router.pathname == "/packages" ? "text-sunset-pink" : "text-cloudy-day"}  hover:cloudy-day-50 border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative`}>
                    PACKAGES</a>
                </Link>

                <Link href="/merch">
                  <a className={`${router.pathname == "/merch" ? "text-sunset-pink" : "text-cloudy-day"}  hover:cloudy-day-50 border-b border-sunset-pink md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-sunset-pink md:p-0 font-oxanium-bold transition relative`}>
                    MERCH</a>
                </Link>
  
              </ul>
            </div>

            <div className="md:w-1/5 flex items-center justify-end space-x-3 -mr-2.5 pt-3 py-2">
              <button
                className="snipcart-checkout appearance-none px-2 text-cloudy-day hover:text-sunset-pink rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="Cart"
              >
                {cartHasItems && (
                  <span className="absolute bg-sunset-pink rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
              <Link href="/wishlist">
                <a
                  className="px-2 text-cloudy-day hover:text-sunset-pink rounded-md cursor-pointer focus:outline-none focus:text-blue-600 relative transition"
                  aria-label="Wishlist"
                >
                  {hasItems && (
                    <span className="absolute bg-sunset-pink rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current"
                  >
                    <path fill="none" d="M0 0H24V24H0z" />
                    <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                  </svg>
                </a>
              </Link>
              <Link href="/login">
              <a
                className="snipcart-customer-signin appearance-none px-2 text-cloudy-day hover:text-sunset-pink rounded-md cursor-pointer focus:outline-none focus:text-blue-600 transition relative"
                aria-label="User login"
              >
      
                <span className="absolute bg-sunset-orange rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
               
 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="bkg1 relative">
        {children}
      </main>
      <footer className="sticky footerbkg bg-nightsky max-w-full mx-auto px-6">
        <div className="py-6 border-t h-5/6 border-sunset-pink text-center flex flex-col md:flex-row items-center justify-between columns-3">
          <Image className="invisible lg:visible " src={FooterFire} alt="Flaming Torch"/>
          <div className="mt-3 md:mr-7 lg:mr-0 place-items-start"> 
            <Image src={GGLogo} alt="Gaming Galaxy Logo"/>
            <p className="text-xs md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">Gaming Galaxy is a registered <br></br>trademark of Gaming Galaxy LLC </p>
            <p className="text-xs md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">This website was made with love <br></br> by Thomas &quot;ZFX&quot; Zbodula</p>
            <p className="text-xs md:text-sm lg:text-base text-cloudy-day font-oxanium-medium text-center mt-2 mb-5">Email: <br></br> sales@gaminggalaxy.gg </p>
          </div>
          <div className="md:mr-7 lg:mr-0" >
            <h1 className="font-oxanium-bold text-lg md:text-xl lg:text-2xl mb-4 border-b border-sunset-pink text-cloudy-day">PRODUCTS</h1>
            <ul>
              <Link href="/creators">
                <a className={`${router.pathname == "/creators" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day block  md:hover:text-sunset-pink md:p-0 font-oxanium-medium transition relative text-xs md:text-sm lg:text-base`}>Creators // 0</a>
              </Link>
              <Link href="/gamers">
                <a className={`${router.pathname == "/gamers" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day block  md:hover:text-sunset-pink md:p-0 font-oxanium-medium transition relative text-xs md:text-sm lg:text-base`}>Gamers // 0</a>
              </Link>
              <Link href="/packages">
                <a className={`${router.pathname == "/packages" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day block md:hover:text-sunset-pink md:p-0 font-oxanium-medium transition relative text-xs md:text-sm lg:text-base`}>Packages // 0</a>
              </Link>
              <Link href="/merch">
                <a className={`${router.pathname == "/merch" ? "text-sunset-pink" : "text-cloudy-day"} hover:cloudy-day block  md:hover:text-sunset-pink md:p-0 font-oxanium-medium transition relative mb-5 text-xs md:text-sm lg:text-base`}>Merchandise // 0</a>
              </Link>
            </ul>
          </div>
          <div className="md:mr-7 lg:mr-0">
            <h1 className="font-oxanium-bold text-lg md:text-xl lg:text-2xl mb-4 border-b border-sunset-pink text-cloudy-day">NEED HELP?</h1>
            <ul>
              <p className="text-cloudy-day font-oxanium-medium">Terms of Service</p>
              <p className="text-cloudy-day font-oxanium-medium">Privacy Policy</p>
              <p className="text-cloudy-day font-oxanium-medium">About Gaming Galaxy</p>
              <p className="text-cloudy-day font-oxanium-medium mb-5">FAQs</p>
            </ul>
          </div>
          <div className="md:mr-0 lg:mr-0">
            <h1 className="font-oxanium-bold text-lg md:text-xl lg:text-2xl mb-5 border-b border-sunset-pink text-cloudy-day">FOLLOW US</h1>
            <IconContext.Provider value={{ color: "white", size: "1.3em" }}>
              <div className="grid gap-4 grid-cols-3 grid-rows-3 border-1 lg:pl-3 mb-2 justify-between border-sunset-pink">
                <Link href="https://www.twitch.tv/gaminggalaxytwitch" passHref>
                  <a className="transistion relative"><FaTwitch /></a>
                </Link>
                <Link href="https://www.youtube.com/channel/UC7478Dq0DDGulBJ-IZ5UVXQ" passHref>
                  <a className="transistion relative"><FaYoutube /></a>
                </Link>
                <Link href="htttps://bit.ly/ggalaxydiscord" passHref>
                  <a className="transistion relative"><FaDiscord /></a>
                </Link>
                <Link href="https://twitter.com/gaminggalaxy21" passHref>
                  <a className="transistion relative"><FaTwitter /></a>
                </Link>
                <Link href="https://www.instagram.com/gaminggalaxyig/" passHref>
                  <a className="transistion relative"><FaInstagram /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/gaming-galaxy-b47911227/" passHref>
                  <a className="transistion relative"><FaLinkedin /></a>
                </Link>
                <Link href="https://www.tiktok.com/@realgaminggalaxy" passHref>
                  <a className="transistion relative"><FaTiktok /></a>
                </Link>
                <Link href="https://reddit.com" passHref>
                  <a className="transistion relative"><FaReddit /></a>
                </Link>
                <Link href="https://facebook.com" passHref>
                  <a className="transistion relative"><FaFacebook /></a>
                </Link>
              </div>
            </IconContext.Provider>
          </div>
          <Image className="w-1/4 h-1/4 invisible lg:visible mb-5 " src={FooterFire} alt="Flaming Torch"/>
        </div>
        <div className="border-3 border-cloudy-day bg-nightsky h-2/3 py-4 w-full text-center flex flex-col md:flex-row items-center grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs sm:text-base text-cloudy-day font-oxanium-medium">Copyright © 2022 Gaming Galaxy All Rights Reserved</p>
          </div>
          <div>
            <Image className="w-px" src={CardIcons} alt="Icons of various credit/debit card companies"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
