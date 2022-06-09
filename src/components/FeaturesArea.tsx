import React from 'react';
import Counter from './Counter';
import Image from 'next/image';
import Link from 'next/link';

import GameThumbnail01 from '../../public/img/images/featured_game_thumb01.jpg'
import GameThumbnail02 from '../../public/img/images/featured_game_thumb02.jpg'
import GameThumbnail03 from '../../public/img/images/featured_game_thumb03.jpg'
import GameThumbnail04 from '../../public/img/images/featured_game_thumb04.jpg'
import GameThumbnail05 from '../../public/img/images/featured_game_thumb05.jpg'
import GameThumbnail06 from '../../public/img/images/featured_game_thumb06.jpg'

function FeaturesArea() {
  return (
	  <section className="features-area features-bg">
        <div>
          <div className="row justify-content-center">
            <div>
              <div className="title-style-two text-center md:mb-12">
                <span className='font-oxanium-extrabold'>ABOUT THE COMPANY</span>
                <h2 className='font-oxanium-semibold'>Why Choose <span>Gaming Galaxy</span></h2>
              </div>
            </div>
          </div>
          <div className='grid gap-12 pb-6 pt-2 md:gap-44 lg:gap-20 grid-rows-3 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 w-content mx-auto place-items-center w-8/12 lg:w-full 2xl:w-8/12 lg:px-2 md:ml-92'>
            <div className="w-content">
              <div className="features-item ">
                <div className="features-head ">
                  <div className="mb-6 bg-nightsky/50 shadow-sm shadow-sunset-pink border-2 border-sunset-pink text-center">
                    <Link href="/#" passHref>
                      <p className='text-sunset-pink font-oxanium-bold'>REASON 1</p>
                    </Link>
                  </div>
                  <h4 className='font-oxanium-semibold'>We are a people first, profits second oriented company</h4>
                  <p className='font-oxanium-medium'>If there is not enough true value provided in every product then we wont even bother putting it on the website as we strive to truly make a positive impact on creators both big and small</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail01} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>DISCORD</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>We consistently engage with our community in our Discord</Link></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail02} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>GIVEAWAYS</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>We give back to the ones who can&apos;t afford and need help</Link></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-content">
              <div className="features-item ">
                <div className="features-head">
                  <div className="mb-6 bg-nightsky/50 shadow-sm shadow-sunset-pink border-2 border-sunset-pink text-center">
                    <Link href="/#" passHref>
                      <p className='text-sunset-pink font-oxanium-bold'>REASON 2</p>
                    </Link>
                  </div>
                  <h4 className='font-oxanium-semibold'>We are determined to provide one of a kind products</h4>
                  <p className='font-oxanium-medium'>At Gaming Galaxy, we believe that creativity is the brain having fun that is why we love to try things no one has seen before especially when it comes to our own content</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail03} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>FEEDBACK</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>Our creativity relies off the feedback from the community</Link></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail04} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>SOCIALS</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>We try to use our own unique content style to inspire others</Link></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-content">
              <div className="features-item">
                <div className="features-head">
                  <div className="mb-6 bg-nightsky/50 shadow-sm shadow-sunset-pink border-2 border-sunset-pink text-center">
                    <Link href="/#" passHref>
                      <p className='text-sunset-pink font-oxanium-bold'>REASON 3</p>
                    </Link>
                  </div>
                  <h4 className='font-oxanium-semibold'>We are creators ourselves and not some huge corporation </h4>
                  <p className='font-oxanium-medium'>We understand the frustrations that creators have when dealing with out of touch coroporations, so that is why we always make sure to keep our content fresh and relevant</p>
                </div>
                <div className="features-list-wrap">
                  <ul>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail05} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>CREATIVE</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>We believe that creators know their audience best and not us</Link></h6>
                      </div>
                    </li>
                    <li>
                      <div className="features-list-img">
                        <Image src={GameThumbnail06} alt="" />
                      </div>
                      <div className="features-list-content">
                        <div className="font-oxanium-semibold product-tag"><Link href="/#" passHref>TRENDS</Link></div>
                        <h6 className='font-oxanium-semibold'><Link href="/#" passHref>Whenever there&apos;s a popular trend, we put our own spin on it!</Link></h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  )
}
export default FeaturesArea;
