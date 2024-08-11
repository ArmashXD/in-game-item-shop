/** @format */

"use client";
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
  FaUser,
  FaLock,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import signin_img from "@/public/images/signin_img.png";
import Signup_css from "/styles/signup.module.css";
import Link from "next/link";
import { ImOffice } from "react-icons/im";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const signup_ui = () => {
  // State to manage the sign-up mode
  // const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Handlers for sign-in and sign-up buttons
  // const handleSignUpClick = () => {
  //   setIsSignUpMode(true);
  // };

  // const handleSignInClick = () => {
  //   setIsSignUpMode(false);
  // };
  const v = Signup_css;
  return (
    <>
      <main className={`${v.main}`}>
        <div className={`${v.container}`}>
          <div className={`${v.wrapped_item}`}>
          <div className={`${v.left_panel}`}>
            <div className={`${v.content}`}>
              <h3 className={`${v.panel_title}`}>Member of Brand?</h3>
              <p className={`${v.panel_text}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                ab nobis at nostrum, reiciendis quae.
              </p>
              <Link href="/signin" className={`${v.btn}`}>
                Sign in
              </Link>
              <Image
              src={signin_img}
              alt={"sign_in"}
              className={`${v.img} ${v.img_signin}`}
            />
            </div>
            
          </div>
            {/* Signin form start */}
            <form action="" className={`${v.sign_up_form}`}>
              <h2 className={`${v.title}`}>Sign up</h2>
              <div className={`${v.input_field}`}>
                <FaUser className={`${v.fa}`} />
                <input
                  className={`${v.inputs}`}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </div>
              <div className={`${v.input_field}`}>
                <FaEnvelope className={`${v.fa}`} />
                <input
                  className={`${v.inputs}`}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className={`${v.input_field}`}>
                <FaLock className={`${v.fa}`} />
                <input
                  className={`${v.inputs}`}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button className={`${v.btn}`}>Sign up</button>
              <p className={`${v.social_text}`}>
                Or Sign up with social platform
              </p>
              <div className={`${v.social_media} flex`}>
                <Link href="" className={`${v.social_icon}`}>
                  <FaFacebookF />
                </Link>
                <Link href="" className={`${v.social_icon}`}>
                  <FaTwitter />
                </Link>
                <Link href="" className={`${v.social_icon}`}>
                  <FaGoogle />
                </Link>
                <Link href="" className={`${v.social_icon}`}>
                  <FaLinkedin />
                </Link>
              </div>
              <p className={`${v.account_text}`}>
                Already have an account? <Link href="/signin" className={`${v.account_link}`}>
                  <span>Sign in</span>
                </Link>
              </p>
            </form>
            {/* Signin form end */}
          </div>
        </div>
      </main>
    </>
  );
};

export default signup_ui;
