import signup_img from "@/public/images/signup.svg";
import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/common/Forms"
import Panel from "../components/Panel";
import { signupHeading, signupText, socialText } from "@/utils/mock";



const Signup = () => {


  return (

    <>
      <main className={`flex flex-col items-center  bg-theme h-screen`}>
        <Navbar />
        <div className="relative w-3/5 xl-max:w-4/5 h-auto m-auto shadow-3xl overflow-hidden md-max:shadow-none md-max:w-screen md-max:h-auto">
          <div className="flex justify-center w-full before:left-[-50%] before:top-0 before::content-none before:bg-gradient-to-r from-[#083452] to-[#71c3fae8] before:absolute before:w-full before:h-full md-max:before:hidden md-max:w-screen md">
            
            <Panel heading={signupHeading} text={signupText} href="/login" linkText="Sign In" src={signup_img}/>
            {/* Signup form start  */}
            <Form isSignup heading="Sign Up" btn="Sign up" socialText={socialText}/>

          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;



