import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/app.css";
import "../styles/animate.min.css";
import "../styles/default.css";
import "../styles/meanmenu.css";
import "../styles/odometer.css";
import "../styles/owl.carousel.min.css";
import "../styles/aos.css";
import "../styles/responsive.css";
import "../styles/style.css";
import "../styles/slick.css";
import "../styles/snipcart.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";
import {ErrorBoundary} from 'react-error-boundary'

import { useState, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { magic } from "../lib/magic";


function MyApp({ Component, pageProps }: AppProps) {

  const [user, setUser] = useState(null);

  // If isLoggedIn is true, set the UserContext with user data
  // Otherwise, redirect to /login and set UserContext to { user: null }
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
      } else {
        setUser({ user: null });
      }
    });
  }, []);

  return (
      <WishlistProvider>
        <UserContext.Provider value={[user, setUser]}>
          {console.log("Current User Context is", user)}
          <Layout>
            <DefaultSeo {...defaultSEO} />
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </WishlistProvider>
  );
}

export default MyApp;
