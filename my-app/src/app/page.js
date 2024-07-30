
import Navbar from "./modules/Navbar";
import Game from "./pages/Game";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server';
import Footer from "./modules/Footer";
import Sign from "./modules/Sign";

export default async function page() {
    const user = await currentUser();
    // console.log(user.id);
    

  if (user) {
    return (
      <>
        <Navbar></Navbar>
        <Game user={user.id} name={user.fullName}></Game>
        <Footer></Footer>
      </>
    );
  }

  return(
    <>
    
   <Sign></Sign>
   <div className=" w-full h-[91vh] flex justify-center">
    <h1 className="text-2xl text-center my-auto">Please Sign in to Continue</h1>
    </div>
    
    
    </>
  );
}
