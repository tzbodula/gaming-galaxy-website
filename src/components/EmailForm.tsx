import { useState } from "react";
import { Icon } from "@magiclabs/ui";
import { MonochromeIcons }  from "@magiclabs/ui";
import Image from "next/image";

import GGLogo from '../../public/img/logo/logo.png'

const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="form-header text-cloudy-day font-oxanium-bold pb-3">Login</h3>
        <div className="input-wrapper text-cloudy-day pb-2 focus-within:shadow-lg">
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
          <a onClick={handleSubmit} >
            <button className="login-submission font-oxanium-medium" data-modal-toggle="defaultModal">Submit</button>
          </a>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
