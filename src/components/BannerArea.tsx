import React from 'react'
import Slider from 'react-slick';
import Link from 'next/link';

import Image from 'next/image';

import Thumbnail1 from '../../public/img/slider/banner_magazine_thumb01.jpg'
import Thumbnail2 from '../../public/img/slider/banner_magazine_thumb02.jpg'
import Thumbnail3 from '../../public/img/slider/banner_magazine_thumb03.jpg'
import Thumbnail4 from '../../public/img/slider/banner_magazine_thumb04.jpg'
import Thumbnail5 from '../../public/img/slider/banner_magazine_thumb05.jpg'

import Fade from 'react-reveal'

import { IconContext } from "react-icons";

import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";

const BannerArea = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  }

  return (
    <section className="home-six-banner pt-6 " >
      <div className="container mx-auto px-12">
        <div className="row">
          <div className="col-12">
            <div className="banner-content">
              <Fade left>
                <h2 className="font-oxanium-bold text-4xl lg:text-6xl xl:text-7xl text-center mb-2">GROW <span>YOUR</span> KNOWLEDGE</h2>
              </Fade>

              <Fade right>
                <h3 className="font-oxanium-semibold text-2xl lg:text-4xl xl:text-5xl text-center pinkhighlight">WITH OUR GUIDES <span>AND</span> TUTORIALS</h3>
              </Fade>
            </div>
            <div className="flex-none items-center bg-nightsky/25 rounded-xl border-2 border-sunset-pink py-5 my-2 ">
              <div className="mx-auto flex items-center w-4/5 xl:w-full ">
                <div>
                <h5 className='bg-nightsky/50 p-4 border-sunset-pink border-2 font-oxanium-semibold xs:text-base sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl lg:mr-8 text-center lg:text-left 2xl:text-center xs:hidden sm:inline-block xl:ml-4 xl:mt-4 2xl:mt-8 2xl:ml-16'>HEY <span>THERE!</span></h5>
                </div>
                <div>
                <p className='font-oxanium-medium text-cloudy-day xs:text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl text-center lg:text-right 2xl:text-center 2xl:ml-64 2xl:mt-8 2xl:mr-16 xl:pr-8'>Want more exclusive content? Follow us on our social media!</p>
                <div className="lg:ml-2 xl:ml-24">
                <ul className='xs:ml-8 xs:mt-4 lg:ml-96 sm:mr-auto flex items-center xs:space-x-1 sm:space-x-2 md:space-x-6'>
                  <IconContext.Provider value={{ color: "#ce499e", size: "1.5em", className:"icon-padding xl:text-4xl"}}>
                  <li><Link href="/#" passHref><a className="transistion relative"><FaYoutube /></a></Link></li>
                  <li><Link href="/#" passHref><a className="transistion relative"><FaDiscord /></a></Link></li>
                  <li><Link href="/#" passHref><a className="transistion relative"><FaTwitter /></a></Link></li>
                  <li><Link href="/#" passHref><a className="transistion relative"><FaInstagram /></a></Link></li>
                  </IconContext.Provider>
                </ul>
              </div>
                </div>


              </div>

            </div>
            <Slider className="mt-8 banner-magazine-active" {...settings}>
              <div className="banner-magazine-item red">
                <div className="banner-magazine-thumb">
                  <div className="tags"><Link href="/#">sports</Link></div>
                  <Image src={Thumbnail1} alt="Thumbnail 1" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">TWITCH</span>
                  <h5 className="title"><Link href="/#" passHref>How to grow to 1,000 followers on twitch</Link></h5>
                </div>
              </div>

              <div className="banner-magazine-item blue">
                <div className="banner-magazine-thumb">
                  <div className="tags"><Link href="/#" passHref>sports</Link></div>
                  <Image src={Thumbnail2} alt="Thumbnail 2" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">SOCIAL GROWTH</span>
                  <h5 className="title"><Link href="/#" passHref>What makes someone click on your content?</Link></h5>
                </div>
              </div>
              <div className="banner-magazine-item">
                <div className="banner-magazine-thumb">
                  <div className="tags"><Link href="/#" passHref>sports</Link></div>
                  <Image src={Thumbnail3} alt="Thumbnail 3" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">YOUTUBE</span>
                  <h5 className="title"><Link href="/#" passHref>Why your thumbnails suck and dont perform</Link></h5>
                </div>
              </div>
              <div className="banner-magazine-item blue">
                <div className="banner-magazine-thumb">
                  <div className="tags"><Link href="/#">sports</Link></div>
                  <Image src={Thumbnail4} alt="Thumbnail 4" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">RETENTION</span>
                  <h5 className="title"><Link href="/#">Building your brand that people can connect with</Link></h5>
                </div>
              </div>
              <div className="banner-magazine-item">
                <div className="banner-magazine-thumb">
                  <div className="tags"><Link href="/#">sports</Link></div>
                  <Image src={Thumbnail5} alt="Thumbnail 5" />
                </div>
                <div className="banner-magazine-content">
                  <span className="date">TIKTOK</span>
                  <h5 className="title"><Link href="/#">How to capture attention with tiktok videos</Link></h5>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerArea