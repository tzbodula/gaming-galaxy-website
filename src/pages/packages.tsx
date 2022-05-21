import Link from "next/link";

import {
  FaLock

} from "react-icons/fa";

import { IconContext } from "react-icons";

import Fade from 'react-reveal/Fade';

function Packages() {
  return (

    <div className="mx-auto pb-5 pt-12 text-center h-screen">
      <div className="grid gap-4 xs:grid-cols-2 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-2 p-8">
        <Fade top>
          <div className=" max-h-36 bg-nightsky/50 p-3 max-w-5xl border-2 border-sunset-pink shadow-lg shadow-sunset-pink drop-shadow-xl">
            <div className="grid gap-4 xs:grid-cols-1 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-8">
              <div className="lg:text-left text-center">
                <h1 className="font-oxanium-bold">FEATURED PACKAGES</h1>
              </div>
              <div className="lg:text-right text-center ">
                <h1 className="font-oxanium-light text-sunset-red">IN DEVELOPMENT</h1>
              </div>
            </div>
          </div>
        </Fade>
        <Fade top>
          <div className="max-h-36 bg-nightsky/50 p-3 max-w-5xl border-2 border-sunset-pink shadow-lg shadow-sunset-pink drop-shadow-xl">
            <div className="grid gap-4 xs:grid-cols-1 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-8">
              <div className="lg:text-left text-center">
                <h1 className="font-oxanium-bold">DAILY PACKAGES</h1>
              </div>
              <div className="lg:text-right text-center ">
                <h1 className="font-oxanium-light text-sunset-red">IN DEVELOPMENT</h1>
              </div>
            </div>
          </div>
        </Fade>
        <div className="p-3 max-w-5xl">
          <Fade left>
          <div className="grid gap-4 xs:grid-cols-1 xs:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-8">
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3">
              <h1 className="font-oxanium-medium">Featured Package 1</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3">
              <h1 className="font-oxanium-medium">Featured Package 2</h1>
            </div>
          </div>
          </Fade>
        </div>
        <div className="p-3 max-w-5xl ">
          <Fade right>
          <div className="grid gap-4 xs:grid-cols-1 xs:grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 p-8">
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3 ">
              <h1 className="font-oxanium-medium">Featured Package 1</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3 ">
              <h1 className="font-oxanium-medium">Featured Package 2</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3">
              <h1 className="font-oxanium-medium">Featured Package 3</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3 ">
              <h1 className="font-oxanium-medium">Featured Package 4</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3">
              <h1 className="font-oxanium-medium">Featured Package 5</h1>
            </div>
            <div className="text-center bg-nightsky border-2 border-sunset-pink p-3 ">
              <h1 className="font-oxanium-medium">Featured Package 6</h1>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Packages;
