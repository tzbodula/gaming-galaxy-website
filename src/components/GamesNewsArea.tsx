import React from 'react'
import Slider from "react-slick"



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

const GamesNewsArea = () => {
   const settings={
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow:<PrevArrow/>,
    // nextArrow: <NextArrow/>,
    appendArrows: '.community-news-nav',
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
    <div className='search-database text-center'>
    <h1 className='font-oxanium-bold pt-6'>DATABASE SEARCH</h1>
    <h3 className='font-oxanium-medium'>Can&apos;t find that one particular article? Use the form below to search!</h3>
    <h5 className='text-sunset-red'>WORK IN PROGRESS</h5>
    </div>
  )
}

export default GamesNewsArea