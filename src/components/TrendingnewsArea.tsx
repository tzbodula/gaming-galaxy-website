import React from 'react'
import Slider from "react-slick"

import Link from 'next/link'

import Image from 'next/image'

import TrendPost1 from '../../public/img/blog/trand_news_thumb01.jpg'
import TrendPost2 from '../../public/img/blog/trand_news_thumb02.jpg'
import TrendPost3 from '../../public/img/blog/trand_news_thumb03.jpg'
import TrendPost4 from '../../public/img/blog/trand_news_thumb04.jpg'
import TrendPost5 from '../../public/img/blog/trand_news_thumb05.jpg'

import PopularPost1 from '../../public/img/blog/popular_post_thumb01.jpg'
import PopularPost2 from '../../public/img/blog/popular_post_thumb02.jpg'
import PopularPost3 from '../../public/img/blog/popular_post_thumb03.jpg'

// function PrevArrow(props){
//     const {className,onClick} = props;
//     return(
//       <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-left"></i></button>
//     );
//   }
//   function NextArrow(props){
//     const {className,onClick} = props;
//     return(
//       <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-right"></i></button>
//     );
//   }

const TrendingnewsArea = () => {



  const settings = {

    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    // prevArrow:<PrevArrow/>,
    // nextArrow: <NextArrow/>,
    appendArrows: '.trending-news-nav',
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
          slidesToShow: 3,
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
          dots: false,
        }
      },
    ]
  }

  return (
    <section className="trending-news-area">
      <div className="container ml-64 ">
        <div className="row grid grid-rows-1 grid-cols-2 ">
          <div className="col-lg-8">
            <div className="trending-news-head mb-40">
              <div className="hf-section-title">
                <h4 className="title">MOST RECENT POSTS</h4>
              </div>
              <div className="trending-news-nav bu" />
            </div>
            <div className="grid grid-rows-1 grid-cols-2 ">
              <div className="col-md">
                <div className="trending-news-item overlay-item h-fit mr-3">
                  <div className="trend-news-thumb">
                    <Image src={TrendPost1} alt="" />
                  </div>
                  <div className="trend-news-content">
                    <div className="tags"><Link href="/#">GROWTH</Link></div>
                    <span className="date">June 6, 2022</span>
                    <h4 className="title"><Link href="/#">How to overcome camera shyness when recording</Link></h4>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <Slider className="trending-news-active" {...settings}>
                  <div className="trending-news-item horizontal-item yellow">
                    <div className="trend-news-thumb">
                      <Link href="/#" passHref><Image src={TrendPost2} alt="" /></Link>
                    </div>
                    <div className="trend-news-content">
                      <div className="tags"><Link href="/#">Twitch</Link></div>
                      <span className="date">June 5, 2022</span>
                      <h4 className="title"><Link href="/#">Why it&apos;s impossible to grow as a streamer on just Twitch alone</Link></h4>
                    </div>
                  </div>
                  <div className="trending-news-item horizontal-item blue">
                    <div className="trend-news-thumb">
                      <Link href="/#" passHref><Image src={TrendPost3} alt="" /></Link>
                    </div>
                    <div className="trend-news-content">
                      <div className="tags"><Link href="/#">Youtube</Link></div>
                      <span className="date">June 4, 2022</span>
                      <h4 className="title"><Link href="/#">Turning gaming content creation into an enjoyable career</Link></h4>
                    </div>
                  </div>
                  <div className="trending-news-item horizontal-item">
                    <div className="trend-news-thumb">
                      <Link href="/#" passHref><Image src={TrendPost4} alt="" /></Link>
                    </div>
                    <div className="trend-news-content">
                      <div className="tags"><Link href="/#">Growth</Link></div>
                      <span className="date">June 3, 2022</span>
                      <h4 className="title"><Link href="/#">What is and how to deal with creator burnout?</Link></h4>
                    </div>
                  </div>
                  <div className="trending-news-item horizontal-item blue">
                    <div className="trend-news-thumb">
                      <Link href="/#" passHref><Image src={TrendPost5} alt="" /></Link>
                    </div>
                    <div className="trend-news-content">
                      <div className="tags"><Link href="/#">Growth</Link></div>
                      <span className="date">June 2, 2022</span>
                      <h4 className="title"><Link href="/#">How to stay focused despite living in an hyperactive and online world</Link></h4>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
          <div className="pl-4 col-lg-4 col-md-7">
            <aside className="home-sidebar-news">
              <div className="hf-section-title mb-40">
                <h4 className="title">MOST POPULAR ALL-TIME </h4>
              </div>
              <div className="row grid grid-cols-2 grid-rows-3">
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-thumb">
                      <Link href="/#" passHref><Image src={PopularPost1} alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-content w-1/2 -ml-24 mt-6">
                      <span className="date">1,345,782 views</span>
                      <h6 className="title"><Link href="/#">How to properly network as a content creator</Link></h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-thumb">
                      <Link href="/#" passHref><Image src={PopularPost2} alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-content w-1/2 -ml-24 ">
                      <span className="date">894,231 Views</span>
                      <h6 className="title"><Link href="/#" passHref>The best budget PC setup for livestreaming</Link></h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-thumb">
                      <Link href="/#" passHref><Image src={PopularPost3} alt="" /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sidebar-popular-item">
                    <div className="sp-content w-1/2 -ml-24 ">
                      <span className="date">754,137 Views</span>
                      <h6 className="title"><Link href="/#" passHref>Matching your branding with your personality</Link></h6>
                    </div>
                  </div>
                </div>
              </div>

            </aside>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TrendingnewsArea