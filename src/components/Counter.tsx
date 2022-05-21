import React from 'react';
import CountUp from "react-countup";

import Image from 'next/image';

import Fact01 from '../../public/img/icon/fact_icon01.png'
import Fact02 from '../../public/img/icon/fact_icon02.png'
import Fact03 from '../../public/img/icon/fact_icon03.png'
import Fact04 from '../../public/img/icon/fact_icon04.png'

export default function Counter() {
  return (
	    <div className="fact-area pt-20 md:pl-12">
              <div className='grid mx-auto gap-20 md:gap-4 grid-cols-4 grid-rows-1 w-content place-items-center w-8/12 '>

              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <Image src={Fact01} alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={75} /></span></h2>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <Image src={Fact02} alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span> < CountUp end={200} /> </span></h2>
                    <span>Likes</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <Image src={Fact03} alt="" />
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span>< CountUp end={315} /></span></h2>
                    <span>Registred Users</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="fact-item">
                  <div className="fact-icon">
                    <Image src={Fact04} alt=""/>
                  </div>
                  <div className="counter-item">
                    <h2 className="counter"><span >< CountUp end={400} /></span></h2>
                    <span>Designs Made</span>
                  </div>
                </div>
              </div>
              </div>
          </div>
  )
}
