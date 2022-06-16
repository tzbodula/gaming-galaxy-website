import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/userContext';
import { magic } from "../lib/magic";
import { GetServerSideProps } from 'next';
import { prisma, PrismaClient } from '@prisma/client'

import Router from "next/router";
import Loading from './loading';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

import GGWallpaper from '../../public/img/bg/GGWallpaper.jpg'
import GGLogoCircle from '../../public/img/bg/GGLogoCircleSmall.png'

const Profile = () => {
  const [user, setUser] = useContext(UserContext);

  console.log("Two!")

  const [selection, setSelection] = useState("Accounts")

  const [accSelection, setaccSelection] = useState("Account Info")

  const affilatePerms = false;
  const editorPerms = false;
  const designerPerms = false;
  const adminPerms = false;

  const isAccounts = selection === "Accounts"
  const isOrders = selection === "Orders"
  const isFavorites = selection === "Favorites"
  const isGGAccount = selection === "GGAccount"

  const isAccountInfo = accSelection === "Account Info"
  const isProfileDesign = accSelection === "Profile Design"

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push("/login");
    });
  };

  const wishlist = () => {
    Router.push("/wishlist")
  }

  console.log("Three!")
  return (
    <>
      {user?.loading ? (
        <Loading />
      ) : (
        user?.issuer && (
          <>
            {/*

          If the user is viewing this page, that means they have an account and are succesfully logged in.

          The "Header" section will pull the user's username, tagline and location

          The "Tabs" section will allow the user to switch between the information displayed on their profile
            TODO: Setup the "Orders" Tab when commerce.js gets installed

          The "Content" section is where the component is displayed respective to the tab currently selected

          */}

            {/* Header, contains username, pfp, background, brand name, account creation date and country*/}

            <div className='relative'>
              <div className='gradient-profile'>
                <Image src={GGWallpaper} alt="User's background" layout='responsive'></Image>
              </div>
              <div>
                <div className='absolute left-28 top-24'>
                  <Image src={GGLogoCircle} alt="GG Logo Circle"></Image>
                </div>
                <div className='absolute text-cloudy-day left-48 top-24 flex'>
                  <h1 className='font-oxanium-semibold text-5xl'>TZBODULA18</h1>
                </div>
                <div className='absolute text-cloudy-day left-48 top-36 flex mb-8'>
                  <h1 className='font-oxanium-light text-2xl mr-2'>Gaming Galaxy</h1>
                  <h1 className='font-oxanium-light text-2xl'>| Member Since: 11/12/20</h1>
                </div>
                <div className='absolute text-cloudy-day right-28 top-36 flex mb-8'>
                  <h1 className='font-oxanium-light text-2xl mr-2'>Location:</h1>
                  <ReactCountryFlag className='' countryCode='US' svg style={{width: '2em', height: '2em'}}/>
                </div>
              </div>
            </div>
            {/* Tabs for navigating the profile screen */}
            <div className='absolute ml-4 left-44 top-44 mt-12 flex'>
              {isAccounts //If the acccount button is selected
                  ? <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Accounts")}>ACCOUNTS</button>
                  : <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Accounts")}>ACCOUNTS</button>
              }
              {isOrders //If the order button is selected
                  ? <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink  text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Orders")}>ORDERS</button> 
                  : <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Orders")}>ORDERS</button> 
              } 
              {isFavorites //If the favorite button is selected
                  ? <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink  text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Favorites")}>FAVORITES</button>
                  : <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("Favorites")}>FAVORITES</button>
              }
              {isGGAccount
                  ? <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("GGAccount")}>GG ACCOUNT</button>
                  : <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setSelection("GGAccount")}>GG ACCOUNT</button>
              }
              <button className='text-3xl font-oxanium-bold py-5 mr-4 bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={wishlist}>WISHLIST</button>
              <button className='text-3xl font-oxanium-bold py-5  bg-nightsky/25 text-cloudy-day px-16 border-2 rounded-lg border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={logout}>LOGOUT</button>
            </div>
            {/* Account information */}
            { isAccounts //If the accounts button is selected, display the accounts data
              ? 
              <div className='absolute ml-12 left-44 top-96 mt-12 gap-12 mx-auto grid-rows-2 grid-cols-4 grid'>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR </h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>YOUTUBE</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR</h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>TWITCH</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR</h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>INSTAGRAM</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR</h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>DISCORD</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR </h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>TIKTOK</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR </h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>TWITTER</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR </h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>FACEBOOK</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
                <div className='bg-nightsky/50 border-2 border-sunset-pink shadow-lg shadow-sunset-pink hover:border-cloudy-day hover:shadow-cloudy-day transition-all w-full mx-auto p-20'>
                  <h1 className='text-center font-oxanium-medium text-2xl mt-2'>CONNECT YOUR </h1>
                  <h1 className='text-center font-oxanium-bold text-4xl mt-2 mb-4'>STEAM</h1>
                  <h3 className='text-center font-oxanium-extrabold text-2xl text-sunset-pink'>IN DEVELOPMENT</h3>
                </div>
              </div>
              : null
            }
            { isOrders
              ? 
              <div className='absolute left-72 top-96'>
                <h1 className='bg-nightsky/25 p-3 border-sunset-pink border-2 shadow-lg shadow-sunset-pink font-oxanium-bold'>This feature is currently in development, but your order data will go here!</h1>
              </div>
              : null
            }
            { isFavorites
              ? 
              <div className='absolute left-52 top-96'>
                <h1 className='bg-nightsky/25 p-3 border-sunset-pink border-2 shadow-lg shadow-sunset-pink font-oxanium-bold'>This feature is currently in development, but your favorited blog posts will go here!</h1>
              </div>
              : null
            }
            { isGGAccount
              ?
              <>
                <div className='absolute left-48 top-96'>
                  {isAccountInfo
                    ? <button className='text-xl font-oxanium-bold py-2 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setaccSelection("Account Info")}>ACCOUNT INFO</button>
                    : <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setaccSelection("Account Info")}>ACCOUNT INFO</button>
                  }
                  {isProfileDesign
                    ? <button className='text-xl font-oxanium-bold py-2 mr-4 bg-sunset-pink shadow-lg shadow-sunset-pink text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setaccSelection("Profile Design")}>PROFILE DESIGN</button>
                    : <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={() => setaccSelection("Profile Design")}>PROFILE DESIGN</button>
                  }
                  {affilatePerms
                    ? <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={wishlist}>AFFILATE</button>
                    : null
                  }
                  {editorPerms
                    ? <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={wishlist}>EDITOR</button>
                    : null
                  }
                  {designerPerms
                    ? <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={wishlist}>DESIGNER</button>
                    : null
                  }
                  {adminPerms
                    ?  <button className='text-xl font-oxanium-bold py-2 mr-4 bg-nightsky/25 text-cloudy-day px-4 border-2 rounded-xl border-cloudy-day transition-all hover:bg-sunset-pink hover:shadow-lg hover:shadow-sunset-pink' onClick={wishlist}>ADMIN</button>
                    :  null
                  }
                </div>
                {isAccountInfo
                    ?
                    <div className='absolute left-48 top-96 mt-40 pt-12'>
                        <h1>User ID: {user.publicAddress}</h1>
                        <h1>User Email: {user.email}</h1>
                    </div>
                    : null
                }
                {isProfileDesign
                    ?
                    <div className='absolute left-48 top-96 mt-40 pt-12'>
                        <h1 className='font-oxanium-bold text-sunset-red'>IN DEVELOPMENT</h1>
                        <h1>Soon you&apos;ll be able to edit the image above as well as the profile picture!</h1>
                    </div>
                    : null
                }
              </> 
              : null
            }

          </>
        )
      )}
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {

    console.log("One!")

    const prisma = new PrismaClient()
  
    const userData = await prisma.users.findUnique({
        where: {
          id: user.issuer //Can't find the user object that's supposed to be from the state above. 
        }
    })

    prisma.$disconnect()

  return {
    props: {
      //Returns the userData that corresponds with the provided ID
    }
}
}


export default Profile;

