import React, { useState } from 'react';
import Menu from './Menu'
import Link from 'next/link';


export default function GamesManage() {

  const [items, setItems] = useState(Menu);
  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {

      return curElem.category === categItem;
    })
    setItems(updatedItems);
  }
  return (

    <section className="game-manage-area game-mange-bg pb-24">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="pt-10 section-title title-style-two text-center mb-5">
              <span>NO MATTER HOW MANY FOLLOWERS</span>
              <h2>WE HAVE<span> SOMETHING </span>FOR YOU</h2>
            </div>
          </div>
        </div>
        <div className='grid gap-8 md:gap-44 grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 mx-auto place-items-center mb-10 w-8/12 lg:w-full 2xl:w-8/12 lg:px-4 lg:mx-auto '>

          <div className="w-full">

            <div className="coming-match-item ">
              <div className="coming-match-info-two">
                <h5 className='font-oxanium-medium lg:text-lg'>SMALL CREATORS</h5>
              </div>
              <div className='grid grid-cols-1 grid-rows-2 m-4 gap-2'>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit '>If you are a creator who...</h4>
                  <ul className='list-inside list-disc'>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      is just starting your content creator journey
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      has no clue on where to start or begin as a gaming creator
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      feels discouarged with your progress so far
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit'>We provide the following...</h4>
                  <ul className='list-inside list-disc'>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      tips on how to get more impressions overall
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      visual branding assets to improve your look
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      guidance on how various algorithms work
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coming-match-info">
                <h5>If That&apos;s You...</h5>

                <div className="match-info-action">
                  <a className="btn">
                    <Link href="/">
                      CHECK THIS OUT!
                    </Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="coming-match-item">
              <div className="coming-match-info-two">
                <h5 className='font-oxanium-medium lg:text-lg'>MEDIUM CREATORS</h5>
              </div>
              <div className='grid grid-cols-1 grid-rows-2 m-4 gap-2'>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit'>If you are a creator who...</h4>
                  <ul className='list-inside list-disc'>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      has months of experience under your belt
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      is making part-time income from your brand
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      hasn&apos;t reached that next level quite yet
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit'>We provide the following...</h4>
                  <ul className='list-inside list-disc'>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      tips on how to seperate from other creators
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      personalized graphics and editing solutions
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      guides on how to improve your content
                    </li>
                  </ul>
                </div>
              </div>
              <div className="coming-match-info">
                <h5>If That&apos;s You...</h5>

                <div className="match-info-action">
                  <a className="btn">
                    <Link href="/">
                      CHECK THIS OUT!
                    </Link>
                  </a>

                </div>
              </div>

            </div>
          </div>
          <div className="w-full">
            <div className="coming-match-item ">
              <div className="coming-match-info-two">
                <h5 className='font-oxanium-medium lg:text-lg'>LARGE CREATORS</h5>
              </div>
              <div className='grid grid-cols-1 grid-rows-2 m-4 gap-2'>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit'>If you are a creator who...</h4>
                  <ul className='list-inside list-disc '>
                    <li className=' font-oxanium-medium text-cloudy-day'>
                      is making a full time income from your brand
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      has any youtube plaque or large following
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      is verifed on any social media platform
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className='text-left font-oxanium-semibold text-xl h-fit'>We provide the following...</h4>
                  <ul className='list-inside list-disc'>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      articles on how to keep your content unique
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      custom graphics and editing solutions
                    </li>
                    <li className='font-oxanium-medium text-cloudy-day'>
                      tips on how to turn your brand into a business for automation
                    </li>
                  </ul>
                </div>


              </div>
              <div className="coming-match-info">
                <h5>If That&apos;s You...</h5>

                <div className="match-info-action">
                  <a className="btn">
                    <Link href="/#">
                      CHECK THIS OUT!
                    </Link>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="tournament-area mt-30 mx-auto lg:mx-auto w-2/3 2xl:w-8/12">
          <div className="row">
            <div className="col-12">
              <div className="tournament-top-wrap border-2 border-sunset-pink">
                <div className="section-title mx-auto tournament-title ">
                  <h2 className='text-xs md:text-5xl xl:text-8xl 2xl:text-7xl'>LEARN <span>AND </span> GROW</h2>
                </div>
                <div className="tournament-menu pr-12 lg:pt-4 mx-auto text-center place-content-center grid grid-rows-2 grid-cols-2 lg:grid-rows-1 xl:mx-auto lg:grid-cols-4 ">
                  <div className='font-oxanium-medium -mr-10'>
                    <button className="active" data-filter="*" onClick={() => setItems(Menu)}>ALL</button>
                  </div>
                  <div className='font-oxanium-medium'>
                    <button data-filter=".cat-one" onClick={() => filterItem('Streaming')}>STREAMING</button>
                  </div>
                  <div className='font-oxanium-medium'>
                    <button data-filter=".cat-two" onClick={() => filterItem('Youtube')}>YOUTUBE</button>
                  </div>
                  <div className='font-oxanium-medium'>
                    <button data-filter=".cat-three" onClick={() => filterItem('Marketing')}>MARKETING</button>
                  </div>                                                      
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              items.map((elem) => {
                const { id, title, description, platforms, readtime, views, link } = elem;
                return (

                  <div key={id}>
                    <div className="tournament-schedule-wrap">
                      <div className="tournament-active">
                        <div className="single-tournament  grid-item cat-three cat-two">
                          <div className="row no-gutters">
                            <div>
                              <div className="md:tournament-schedule-item 2xl:grid 2xl:gap-2 2xl:grid-rows-1 2xl:grid-cols-4">
                                <div className="match-team-info">
                                  <div className="match-team-logo text-center pb-2 ">
                                    <h2 className='text-xl font-oxanium-semibold'>PLATFORMS</h2>
                                    <h4 className='text-base font-oxanium-light'>{platforms}</h4>
                                  </div>
                                </div>
                                <div className="coming-match-status text-center pb-2 ">
                                  <h2 className='text-xl font-oxanium-semibold'>READ TIME</h2>
                                  <h4 className='text-base font-oxanium-light'>{readtime}</h4>
                                </div>
                                <div className="coming-match-status text-center pb-2">
                                  <h2 className='text-xl font-oxanium-semibold'>VIEWS</h2>
                                  <h4 className='text-base font-oxanium-light'>{views}</h4>
                                </div>
                                <div className="match-team-info text-center pb-2 ">
                                  <div className="match-team-logo">
                                    <h2 className='text-xl font-oxanium-semibold'>LINK</h2>
                                    <Link href={link} passHref>
                                      <a className='text-base font-oxanium-light'>CLICK HERE</a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="tournament-schedule-content text-center">
                                <h3>
                                  <Link href="/">
                                    {title}
                                  </Link>
                                </h3>
                                <p>{description}</p>

                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>
  )
}
