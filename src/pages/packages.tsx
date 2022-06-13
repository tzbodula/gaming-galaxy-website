import Link from "next/link";

import Image from "next/image";

import PackagesBox from "../../public/img/bg/PackagesBox.png"

import testthumbnail from "../../public/img/bg/testthumbnail.png"

import Fade from 'react-reveal/Fade';

function Packages() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
    <Fade top>
    <div className="z-0 lg:-mt-12 2xl:-mt-18 text-center">
    <Image src={PackagesBox} alt="Gaming Galaxy Packages Box"></Image>
    </div>
    <div className="text-center mb-8 lg:-mt-20 lg:mb-24">
      <h2 className="font-oxanium-medium lg:text-5xl text-xl">PACKAGES EXPIRE IN: <span>0h 0m 0s</span></h2>
      <h2 className="font-oxanium-light lg:text-3xl text-lg">CLICK ON EACH PACKAGE TO VIEW IT!</h2>
    </div>
    </Fade>
    <Fade bottom cascade>

    <div className="grid grid-rows-3 grid-cols-2 md:grid-rows-1 md:grid-cols-6 -mt-12 2xl:-mt-28">
    <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg className="container-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/Qds3Vn5v/Example-Package-Bronze.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="30" y="205" fill="#F1F0F9">BRONZE</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/Qds3Vn5v/Example-Package-Bronze.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="30" y="205" fill="#F1F0F9">BRONZE</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/5t2WSYs3/Example-Package-Silver.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="34" y="205" fill="#F1F0F9">SILVER</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/5t2WSYs3/Example-Package-Silver.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="34" y="205" fill="#F1F0F9">SILVER</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="220" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/W3DRQRLq/Example-Package-Gold.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="40" y="202" fill="#F1F0F9">GOLD</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="217" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
      <div className="text-cloudy-day text-center h-fit m-5 ">
        <div className="pt-4 pb-4">
          <svg id="a" className="animate-pulse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
          <defs>
              <clipPath id="clip1">
                <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
              </clipPath>
            </defs>
            <image width="566" height="936" className="gradient-package border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/fT744jFC/Example-Package-Galactic.png"></image>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="202" fill="#F1F0F9">GALACTIC</text>
            <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="25" y="217" fill="#F1F0F9">PACKAGE</text>
          </svg>
        </div>
      </div>
    </div>
    </Fade>
  </div>

  );
}

export default Packages;
