import Image from "next/image";

import refundpolicy from "../../public/img/bg/refundpolicy.png"

import React from "react";
import Fade from "react-reveal/Fade"

function RefundPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Fade top>
        <div className="text-center -mt-12">
          <Image src={refundpolicy} alt="Meet The Team Banner" />
        </div>
      </Fade>


      <Fade bottom>
        <div className="h-screen">
            <h3 className="text-center pb-12 font-oxanium-medium">All of our refunds and returns are on a case to case basis, so if you wouldn&apos;t mind please shoot us an email at sales@gaminggalaxy.gg explaning your issue and we&apos;ll get back to you within 48 hours on the next steps.</h3>
        </div>
      </Fade>
    </div>
  );
}

export default RefundPolicy;
