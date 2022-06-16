import { useState, useEffect, useContext } from "react";
import Router from "next/router";
import { magic } from "../lib/magic";
import { UserContext } from "../context/userContext";
import EmailForm from "../components/EmailForm";
import SocialLogins from "../components/SocialLogins";


const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // Redirect to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push({
      pathname: "/profile"
    });
  }, [user]);


  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      //If user exists, log in the user with the email associated with the account
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        showUI: true,
        redirectURI: new URL("/callback", window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + didToken,
        },
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        let userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        Router.push("/profile");
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
 
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL("/callback", window.location.origin).href, // required redirect to finish social login
    });

  }

  return (
    <div className="login-bkg">
      <div className="login">
        <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
        <SocialLogins onSubmit={handleLoginWithSocial} />
      </div>
    </div>
  );
};


export default Login;
