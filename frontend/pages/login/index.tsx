
import signup_img from "@/public/images/login.svg";
import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/common/Forms"
import Panel from "../components/Panel";
import { loginHeading, loginText, signuplinkText, socialText } from "@/utils/mock";

const Login_Signup_ui = () => {
  
  return (
    <>
      <main className={`flex flex-col items-center  bg-theme h-screen`}>
        <Navbar />
        <div className="relative w-3/5 xl-max:w-4/5 h-auto m-auto shadow-3xl overflow-hidden md-max:shadow-none md-max:w-screen md-max:h-auto">
          <div className="flex justify-center w-full before:left-2/4 before:top-0 before::content-none before:bg-gradient-to-r from-[#71c3fae8] to-[#083452] before:absolute before:w-full before:h-full md-max:before:hidden md-max:w-screen md">
            {/* Signin form start */}
            <Form isSignup={false} heading="Login" btn="Sign in" socialText={socialText} linkText={signuplinkText} href="/signup" link="Sign Up"/>
           
            <Panel heading={loginHeading} text={loginText} href="/signup" linkText="Sign Up" src={signup_img}/>

          </div>
        </div>
      </main>
    </>
  );
};

export default Login_Signup_ui;
