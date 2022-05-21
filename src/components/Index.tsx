import React from 'react'
import Slider from './Slider'
import About from './About'
import GameGallery from './GameGallery'
import ShopArea from './ShopArea'
import GamesManage from './GamesManage'
import FeaturesArea from './FeaturesArea'


function IndexThree() {
  return (
	  <>
	  	{/* header-area */}
   
        {/* header-area-end */}
        {/* main-area */}
        <main className='mt-12'>
          {/* slider-area */}
          	<Slider/>
          {/* slider-area-end */}
          {/* third-about-area */}
          	<About/>
          {/* third-about-area-end */}
            <GamesManage/>
            <FeaturesArea/>
        {/* shop-area */}
   
         {/* shop-area-end */}

        </main>
       	  {/* main-area-end */}

		</>
		
  )
}

export default IndexThree