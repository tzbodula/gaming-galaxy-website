import Image from "next/image";

import ThomasGGPhoto from "../../public/img/images/thomas.png"
import MeetTheTeam from "../../public/img/images/meettheteam.png"

import Link from "next/link";

import Fade from "react-reveal/Fade"

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Fade top>
        <div className="text-center -mt-12">
          <Image src={MeetTheTeam} alt="Meet The Team Banner" />
        </div>
      </Fade>

      <Fade top>
        <div className="grid gap-4 md:grid-cols-8 md:grid-rows-1 xl:grid-cols-5 xl:grid-rows-2 text-center">
          <div className="border-2 border-cloudy-day bg-nightsky md:h-60 ">
            <div className="overflow-visible mt-7 z-10">
              <Image src={ThomasGGPhoto} alt="Image of Thomas" />
              <a target="_blank" href="https://tzbodula.com" rel="noopener noreferrer">
                <button className="transition-all block text-sunset-pink font-oxanium-bold bg-nightsky border-2 border-sunset-pink hover:bg-sunset-pink hover:text-cloudy-day focus:ring-4 mx-auto mt-5 focus:outline-none focus:ring-cloudy-day font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="defaultModal">Thomas Zbodula</button>
              </a>
            </div>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="grid gap-4 grid-cols-4 grid-rows-1 text-center pb-5">
          <div className="h-content">
            <Link href="/missionstatement" passHref>
              <button className="btn" type="button" data-modal-toggle="defaultModal">Company Mission</button>
            </Link>
          </div>
          <div className="h-contnet">
            <Link href="/termsofservice" passHref>
              <button className="btn" type="button" data-modal-toggle="defaultModal">Terms of Service</button>
            </Link>
          </div>
          <div className="h-contnet">
            <Link href="/privacypolicy" passHref>
              <button className="btn" type="button" data-modal-toggle="defaultModal">Privacy Policy</button>
            </Link>
          </div>
          <div className="h-contnet">
            <Link href="/refundpolicy" passHref>
              <button className="btn " type="button" data-modal-toggle="defaultModal">Refund Policy</button>
            </Link>
          </div>


        </div>

      </Fade>
    </div>
  );
}

export default About;
