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
                  <div className="third-banner-content text-center wow bounceInUp lg:pb-24 2xl:pb-96" data-wow-delay=".2s">
                    <Fade bottom>
                    <h1 className='text-5xl pt-8 pb-5 md:pb-0 md:pt-0 md:text-8xl lg:text-9xl font-oxanium-bold'>GAMING GALAXY</h1>
                    <h6 className='text-xs md:text-xl'>THE ULTIMATE PLACE FOR GAMERS AND GAMING CREATORS</h6>
                    <Link href="/#" passHref>
                      <a className="btn rotated-btn">LEARN MORE</a>
                    </Link>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default SliderThree