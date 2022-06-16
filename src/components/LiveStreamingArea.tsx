import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import Stream1 from '../../public/img/images/stream_thumb01.jpg'
import Stream2 from '../../public/img/images/stream_thumb02.jpg'
import Stream3 from '../../public/img/images/stream_thumb03.jpg'

import PlayBTN from '../../public/img/icon/w_play.png'

const LiveStreamingArea = () => {
  return (
    <section className="live-streaming-area live-streaming-two ">
    <div className="container xs:mx-auto sm:ml-12 md:ml-12 2xl:ml-64">
      <div className="row">
        <div className="col-sm-6">
          <div className="hf-section-title mb-50">
            <h4 className="title">VIDEO TUTORIALS</h4>
          </div>
        </div>
      </div>
      <div className="row grid xl:grid-rows-1 xl:grid-cols-2">
        <div className="xs:mb-4">
          <div className="live-stream-item ">
            <div className="thumb popup-video" >
              <Image src={Stream1} alt="" />
              <div className="content pop-up-video -ml-4 ">
                  <div className='ml-36 sm:ml-64 sm:-mt-8 md:ml-80 md:-mt-72 md:pb-28'>
                    <Link href="https://www.youtube.com/watch?v=ssrNcwxALS4" passHref><Image src={PlayBTN} alt="" /></Link>
                  </div>
                  <div className="live-stream-meta">
                    <ul>
                      <li className="cat"><Link href="/#" passHref>DESIGN</Link></li>
                      <li>2 months ago</li>
                    </ul>
                  </div>
                  <h4 className="title"><Link href="/#" passHref>Basics: Making clickable thumbnails </Link></h4>
                </div>
            </div>

          </div>
        </div>
        <div className="xs:mb-4">
          <div className="row xl:ml-20">
            <div className="col-lg-12 col-md-6">
              <div className="live-stream-item style-two xl:mb-3">
                <div className="thumb popup-video">
                  <Image src={Stream2} alt="" />
                </div>
                <div className="content pop-up-video -ml-4">
                  <div className='ml-36'>
                    <Link href="https://www.youtube.com/watch?v=ssrNcwxALS4" passHref><Image src={PlayBTN} alt="" /></Link>
                  </div>
                  <div className="live-stream-meta">
                    <ul>
                      <li className="cat"><Link href="/#" passHref>DESIGN</Link></li>
                      <li>2 months ago</li>
                    </ul>
                  </div>
                  <h4 className="title"><Link href="/#" passHref>Basics: Making clickable thumbnails </Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-6">
              <div className="live-stream-item style-two ">
                <div className="thumb popup-video">
                  <Image src={Stream3} alt="" />
                </div>
                <div className="content popup-video -ml-4">
                  <div className='ml-36'>
                    <Link href="https://www.youtube.com/watch?v=ssrNcwxALS4" passHref><Image src={PlayBTN} alt="" /></Link>
                  </div>
                  <div className="live-stream-meta">
                    <ul>
                      <li className="cat"><Link href="/#" passHref>EDITING</Link></li>
                      <li>1 month ago</li>
                    </ul>
                  </div>
                  <h4 className="title"><Link href="/#" passHref>Basics: How to edit YouTube Videos</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default LiveStreamingArea