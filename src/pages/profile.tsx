import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { magic } from "../lib/magic";
import Router from "next/router";
import Loading from './loading';



const Profile = () => {
  const [user, setUser] = useContext(UserContext);


  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push("/login");
    });
  };



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
          <div className="header grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 text-center">
            <div className='md:w-1/2 md:p-20 md:pl-48'>
              <h2 className='font-oxanium-bold text-left'>USERNAME</h2>
              <h5 className='font-oxanium-medium italic text-left'>Brand Name</h5>
            </div>

            <div className='md:p-20 '>
            <h5 className='font-oxanium-medium italic text-right  '>Member Since: 5/15/2021</h5>
            <div className='grid grid-cols-1 gap-4 grid-rows-4 md:grid-cols-4 md:grid-rows-1 max-w-2xl justify-end mr-auto'>
            <div className=''>
              <button onClick={logout} className="mb-2 border-sunset-pink border-2 block text-white font-oxanium-semibold bg-nightsky/50 hover:bg-sunset-pink focus:ring-4 mx-auto mt-5 focus:outline-none focus:ring-cloudy-day font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="defaultModal">ACCOUNT</button>       
            </div>  
            <div className=''>
              <button onClick={logout} className="mb-2 border-sunset-pink border-2 block text-white font-oxanium-semibold bg-nightsky/50 hover:bg-sunset-pink focus:ring-4 mx-auto mt-5 focus:outline-none focus:ring-cloudy-day font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="defaultModal">ORDERS</button>       
            </div>  
            <div className=''>
              <button onClick={logout} className="mb-2 border-sunset-pink border-2 block text-white font-oxanium-semibold bg-nightsky/50 hover:bg-sunset-pink focus:ring-4 mx-auto mt-5 focus:outline-none focus:ring-cloudy-day font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="defaultModal">CONNECTIONS</button>       
            </div>  
            <div className=''>
              <button onClick={logout} className="mb-2 border-sunset-pink border-2 block text-white font-oxanium-semibold bg-nightsky/50 hover:bg-sunset-pink focus:ring-4 mx-auto mt-5 focus:outline-none focus:ring-cloudy-day font-medium rounded-lg text-sm px-5 py-2.5 text-center " type="button" data-modal-toggle="defaultModal">LOGOUT</button>       
            </div>  
          </div>
            </div> 
       
  
          </div>

          <div className="content h-screen">
            <h1 className='text-center'>STILL IN DEVELOPMENT, CONTENT WILL GO HERE</h1>
          </div>

          </>
        )
      )}
      <style jsx>{`
        .label {
          font-size: 12px;
          color: #6851ff;
          margin: 30px 0 5px;
        }
        .profile-info {
          font-size: 17px;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default Profile;
