import React from 'react'
import Slider, {Settings} from "react-slick";
import Link from 'next/link';
import Image from 'next/image';

import Product1 from '../../public/img/product/s_product_img01.jpg'
import Product2 from '../../public/img/product/s_product_img02.jpg'
import Product3 from '../../public/img/product/s_product_img03.jpg'
import Product4 from '../../public/img/product/s_product_img04.jpg'

const ShopArea = () => {

  const settings= {

  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  arrows: false,
  // prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  // nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  slidesToShow: 4,
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
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
	{
		slidesToShow:1
	}
  ]
  }
  return (
    <section className="shop-area home-four-shop-area pt-12 pb-90">
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8">
          <div className="section-title home-four-title text-center mb-35">
            <h2>SHAMELESS <span> MERCH </span> PLUG </h2>
            <p>Want to grab some merchandise that is quality and is either creator or gamer themed? Look no furthur!</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default ShopArea