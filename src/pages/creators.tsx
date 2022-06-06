import CreatorsBox from "../../public/img/bg/CreatorsBox.png"
import Background2 from "../../public/img/bg/area_bg02.jpg"

import Image from "next/image";
import Link from "next/link";
import Fade from 'react-reveal/Fade';

function Creators() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Fade right>
      <div className="z-10 -mt-12 2xl:-mt-18 text-center">
        <Image src={CreatorsBox} alt="Gaming Galaxy Creators Box "></Image>
      </div>
      </Fade>
      <Fade left>
      <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 -mt-12 2xl:-mt-28 pb-12 ">
        <div className="text-cloudy-day text-center h-fit m-5 ">
          <div className="pt-4 pb-4">
          <Link href="/guides" passHref>
            <svg className="container-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
              <defs>
                <clipPath id="clip1" >
                  <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
                </clipPath>
              </defs>
              <image width="566" height="936" className="gradient transition-all " clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/D0DdNcqh/Guides-Box.png"><Link href="/" passHref><p></p></Link></image>
              <text className="font-oxanium-bold text-cloudy-day  " transform="scale(4, 4)" x="16" y="205" fill="#F1F0F9">GUIDES AND</text>
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="19" y="220" fill="#F1F0F9">TUTORIALS</text>
            </svg>
            </Link>
          </div>
        </div>
        <div className="text-cloudy-day text-center h-fit m-5  ">
          <div className="pt-4 pb-4">
          <Link href="/premade" passHref>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930" >
            <defs>
                <clipPath id="clip1">
                  <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
                </clipPath>
              </defs>
              <image width="566" height="936" className="gradient border-2 border-cloudy-day hover:shadow-2xl hover:shadow-sunset-pink/50" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/pdXhDFFJ/Premade-Box.png"></image>
              
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="23" y="205" fill="#F1F0F9">PREMADE</text>
                <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="19" y="220" fill="#F1F0F9">PRODUCTS</text>
            </svg>
            </Link>
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
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/RZPfpd9D/DIY-Designer-Box.png"></image>
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="48" y="205" fill="#F1F0F9">???</text>
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="31" y="220" fill="#F1F0F9">LOCKED</text>
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
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/DwQpStrb/Talent-Finder-Box.png"></image>
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="48" y="205" fill="#F1F0F9">???</text>
              <text className="font-oxanium-bold text-cloudy-day" transform="scale(4, 4)" x="31" y="220" fill="#F1F0F9">LOCKED</text>
            </svg>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Creators;
