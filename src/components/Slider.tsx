import React from 'react'
import Fade from 'react-reveal/Fade';

import Image from 'next/image';

import Link from 'next/link';

import ThirdBanner from '../../public/img/slider/third_banner_img.png'

function SliderThree() {
  return (
	 <section className="third-banner-bg">
            <div className="container max-w-full self-center">
              <div className="row">
                <div className="col-12">
                  <div className="third-banner-img wow bounceInDown 2xl:pt-32" data-wow-delay=".2s">
                   <Fade top>
                   <Image src={ThirdBanner} alt="" />
                   </Fade>
                  </div>
                  <div className="relative z-10 text-center wow bounceInUp lg:pb-24 2xl:pb-96" data-wow-delay=".2s">
                    <Fade bottom>
                    <h1 className='text-5xl pt-8 pb-5 md:pb-0 md:pt-0 md:text-8xl lg:text-9xl font-oxanium-bold'>GAMING GALAXY</h1>
                    <h6 className='text-xs md:text-xl font-oxanium-light mb-24 tracking-extralarge'>THE ULTIMATE PLACE FOR GAMERS AND GAMING CREATORS</h6>
                    <div className='bounce-animation mt-8'>
                      <Link href="/#" passHref>
                        <a className="font-oxanium-bold bg-nightsky/50 p-5 text-cloudy-day text-2xl border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all ">LEARN MORE</a>
                      </Link>
                    </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default SliderThree