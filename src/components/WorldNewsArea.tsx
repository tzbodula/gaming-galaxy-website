import React from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import Image from 'next/image';
import WorldNews1 from '../../public/img/blog/world_news_thumb01.jpg'
import WorldNews2 from '../../public/img/blog/world_news_thumb02.jpg'
import BusinessBlog1 from '../../public/img/blog/find_your_brand.jpg'
import BusinessBlog2 from '../../public/img/blog/find_your_reason.jpg'
import TwitchThumb from '../../public/img/blog/twitch_thumb.jpg'
import YoutubeThumb from '../../public/img/blog/youtube_thumb.jpg'
import TrendPost5 from '../../public/img/blog/trand_news_thumb05.jpg'
import TrendPost3 from '../../public/img/blog/trand_news_thumb03.jpg'

// function PrevArrow(props){
//   const {className,onClick} = props;
//   return(
//     <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-left"></i></button>
//   );
// }
// function NextArrow(props){
//   const {className,onClick} = props;
//   return(
//     <button type='button' className ={ className } onClick={ onClick }><i className="fas fa-angle-right"></i></button>
//   );
// }
const WorldNewsArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:<PrevArrow/>,
    // nextArrow: <NextArrow/>,
    appendArrows: '.business-news-nav',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
    <section className="world-news-area">
      <div className="container ml-64">
        <div className='grid grid-rows-1 grid-cols-2'>
          <div className="row mr-8">
              <div className="hf-section-title mb-8 ">
               <h4 className="title">GET YOUR CREATOR JOURNEY STARTED</h4>
              </div>
              <div className='grid grid-rows-1 grid-cols-2 gap-4'>
              <div className="">
                <div className="world-news-item">
                  <div className="banner-magazine-thumb">
                    <div className="tags"><Link href="/#" passHref>sports</Link></div>
                    <Image src={WorldNews1} alt="" />
                  </div>
                  <div className="banner-magazine-content">
                    <span className="date">652,438 Views // Posted: April 19, 2021</span>
                    <h5 className="title"><Link href="/#" passHref>The ultimate guide to becoming a gaming creator</Link></h5>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="world-news-item ">
                  <div className="banner-magazine-thumb">
                    <div className="tags"><Link href="/#" passHref>sports</Link></div>
                    <Image src={WorldNews2} alt="" />
                  </div>
                  <div className="banner-magazine-content">
                    <span className="date">421,925 Views // Posted: April 20, 2021</span>
                    <h5 className="title"><Link href="/#" passHref>The ultimate guide to growing your brand from 0 to a full-time income</Link></h5>
                  </div>
                </div>
              </div>
              </div>
          </div>
          <div className="row">
              
              <div className="hf-section-title mb-8">
                <h4 className="title">FIND YOUR VOICE</h4>
              </div>
              <aside className="home-sidebar-news">
                <Slider className="business-news-active " {...settings}>
                  <div className="business-news-item">
                    <div className="business-news-post">
                      <Link href="/#" passHref><Image src={BusinessBlog1} alt="" /></Link>
                    </div>
                    <div className="-mt-10 trending-news-item mb-8 horizontal-item blue">
                      <div className="trend-news-thumb">
                        <Link href="/#" passHref><Image src={TwitchThumb} alt="" /></Link>
                      </div>
                      <div className="trend-news-content">
                        <div className="tags"><Link href="/#" passHref>Twitch</Link></div>
                        <span className="date">December 19, 2022</span>
                        <h4 className="title"><Link href="/#" passHref>Matching your brand with your livestreams</Link></h4>
                      </div>
                    </div>
                    <div className="trending-news-item mb-8 horizontal-item blue">
                      <div className="trend-news-thumb">
                        <Link href="/#" passHref><Image src={YoutubeThumb} alt="" /></Link>
                      </div>
                      <div className="trend-news-content">
                        <div className="tags"><Link href="/#" passHref>Youtube</Link></div>
                        <span className="date">December 19, 2022</span>
                        <h4 className="title"><Link href="/#" passHref>Matching your brand with your youtube content </Link></h4>
                      </div>
                    </div>

                  </div>
                  <div className="business-news-item">
                    <div className="business-news-post">
                      <Link href="/#" passHref><Image src={BusinessBlog2} alt="" /></Link>
                    </div>
                    <div className="-mt-10 trending-news-item mb-8 horizontal-item blue">
                      <div className="trend-news-thumb">
                        <Link href="/#" passHref><Image src={TrendPost5} alt="" /></Link>
                      </div>
                      <div className="trend-news-content">
                        <div className="tags"><Link href="/#" passHref>GROWTH</Link></div>
                        <span className="date">December 19, 2022</span>
                        <h4 className="title"><Link href="/#" passHref>Finding your &quot;reason&quot; for becoming a creator</Link></h4>
                      </div>
                    </div>
                    <div className="trending-news-item mb-8 horizontal-item blue">
                      <div className="trend-news-thumb">
                        <Link href="/#" passHref><Image src={TrendPost3} alt="" /></Link>
                      </div>
                      <div className="trend-news-content">
                        <div className="tags"><Link href="/#" passHref>GROWTH</Link></div>
                        <span className="date">December 19, 2022</span>
                        <h4 className="title"><Link href="/#" passHref>How to: Transfer your creation passion into your content</Link></h4>
                      </div>
                    </div>
                  </div>
                </Slider>
              </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorldNewsArea