import Image from "next/image";

import CompanyMission from "../../public/img/bg/companymission.png"

import Fade from "react-reveal/Fade"
function MissionStatement() {

  return (
    <div className="max-w-6xl mx-auto px-6">
      <Fade top>
        <div className="text-center -mt-12">
          <Image src={CompanyMission} alt="Company Mission Banner" />
        </div>
      </Fade>

      <Fade left>
        <div className="mx-auto text-center">
            <h2 className="font-oxanium-medium pb-12">&ldquo;Gaming Galaxy is dedicated to providing the best support to gamers and gaming creators. <br></br> <br></br>This support will come in the form of news, graphics, videos or any other source of media and we are driven to help creators become the best versions of themselves while simultaneously providing value to video game enjoyers of all backgrounds. <br></br><br></br>We take pride in everything that we do, as we make sure to deliever unique and fresh content and to keep this content large and expansive just like the galaxy above us&ldquo;</h2>
        </div>
      </Fade>

    </div>
  );
}

export default MissionStatement;
