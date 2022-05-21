import Image from "next/image";

import privacypolicy from "../../public/img/bg/privacypolicy.png"

import React from "react";

import Fade from "react-reveal/Fade"

function PrivacyPolicy() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Fade top>
        <div className="text-center -mt-12">
          <Image src={privacypolicy} alt="Privacy Policy Banner" />
        </div>
      </Fade>

      <Fade right>
      <div className="mx-auto text-center pb-12 max-w-3xl">
            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Overview</h2>
            <p className="mb-2 text-cloudy-day">Gaming Galaxy operates the https://www.gaminggalaxy.gg/ website, which provides the SERVICE.</p>
            <p className="mb-2 text-cloudy-day">This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, the Gaming Galaxy website.</p>
            <p className="mb-2 text-cloudy-day">If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            <p className="mb-2 text-cloudy-day">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://www.gaminggalaxy.gg/terms-of-service, unless otherwise defined in this Privacy Policy.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 1 - Information Collection And Use</h2>
            <p className="mb-2 text-cloudy-day">For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 2 - Log Data</h2>
            <p className="mb-2 text-cloudy-day">We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. </p>
            <p className="mb-2 text-cloudy-day">This Log Data may include information such as your computers Internet Protocol (&ldquo;IP&ldquo;) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 3 - Cookies</h2>
            <p className="mb-2 text-cloudy-day">Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer&apos;s hard drive.</p>
            <p className="mb-2 text-cloudy-day">Our website uses these &ldquo;cookies&ldquo; to collection information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
            <p className="mb-2 text-cloudy-day">For more general information on cookies, please read <a href="https://www.privacypolicyonline.com/what-are-cookies/">&ldquo;What Are Cookies&ldquo;.</a> </p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 4 - Service Providers</h2>
            <p className="mb-2 text-cloudy-day">We may employ third-party companies and individuals due to the following reasons:</p>
            <p className="mb-2 text-cloudy-day">To facilitate our Service;</p>
            <p className="mb-2 text-cloudy-day">To provide the Service on our behalf;</p>
            <p className="mb-2 text-cloudy-day">To perform Service-related services</p>
            <p className="mb-2 text-cloudy-day">We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 5 - Security</h2>
            <p className="mb-2 text-cloudy-day">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 6 - Links To Other Sites</h2>
            <p className="mb-2 text-cloudy-day">Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. </p>
            <p className="mb-2 text-cloudy-day">Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 7 - Childern&apos;s Privacy</h2>
            <p className="mb-2 text-cloudy-day">Our Services do not address anyone under the age of 13. </p>
            <p className="mb-2 text-cloudy-day">We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers.</p>
            <p className="mb-2 text-cloudy-day">If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 8 - Changes To This Privacy Policy</h2>
            <p className="mb-2 text-cloudy-day">We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>

            <h2 className="text-5xl bg-nightsky/10 p-5 mb-5 border-2 border-sunset-pink shadow-lg shadow-sunset-pink">Section 9 - Contact Us</h2>
            <p className="mb-2 text-cloudy-day">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at admin@gaminggalaxy.gg</p>
        </div>
    </Fade>
    </div>
  );
}

export default PrivacyPolicy;
