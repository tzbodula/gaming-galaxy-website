import GamersBox from "../../public/img/bg/GamersBox.png"

import Fade from 'react-reveal/Fade';

import {
  FaLock
} from "react-icons/fa";

import { IconContext } from "react-icons";

import Image from "next/image";

function Gamers() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Fade top>
      <div className="z-0 -mt-12 2xl:-mt-18 text-center">
      <Image src={GamersBox} alt="Gaming Galaxy Gamers Box"></Image>
      </div>
      </Fade>
      <Fade bottom>
      <div className="grid grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 -mt-12 2xl:-mt-28">
      <div className="text-cloudy-day text-center h-fit m-5 ">
          <div className="pt-4 pb-4">
            <svg className="container-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 562.57 930">
            <defs>
                <clipPath id="clip1">
                  <polygon stroke="red" points="2.91 927.5 440.41 927.5 559.73 2.5 144.96 2.5 2.91 927.5" />
                </clipPath>
              </defs>
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/pdHfbsYk/Gaming-News-Box.png"></image>
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
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/FzHgKHyT/Everything-E-Sports-Box.png"></image>
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
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/k4fYsZwh/Game-Tracker.png"></image>
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
              <image width="566" height="936" className="gradient border-2 border-cloudy-day" clipPath="url(#clip1)" xlinkHref="https://i.postimg.cc/9QFq6QPM/Creator-Tracker.png"></image>
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

export default Gamers;
