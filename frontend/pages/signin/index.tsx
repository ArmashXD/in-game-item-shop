'use client'
import {
    FaFacebookF,FaLinkedin,FaGoogle,
    FaUser,
    FaLock,
    FaTwitter,
  } from "react-icons/fa";
  import signup_img from '@/public/images/signup_img.png';

import Test from "/styles/signin.module.css";
import Link from "next/link";
import React, {useState,  useEffect } from "react";
import Image from 'next/image';

const signin_ui = () => {
  // State to manage the sign-up mode
  //const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Handlers for sign-in and sign-up buttons
  // const handleSignUpClick = () => {
  //       setIsSignUpMode(true)  
      
  // };
  // const handleSignInClick = () => {
  //     setIsSignUpMode(false);
  // };
  const v = Test;    
  return (
    <>
        <main className={`${v.main}` }>
            <div className={`${v.container}`}>
                <div className={`${v.wrapped_item}`}>
                    {/* Signin form start */}
                    <form action="" className={`${v.sign_in_form}`}>
                        <h2 className={`${v.title}`}>
                            Login
                        </h2>
                        <div className={`${v.line}`}></div>
                        <div className={`${v.input_field}`}>
                            <FaUser  className={`${v.fa}`}/>
                            <input className={`${v.inputs}`}  type="text" name="username" id="username" placeholder="Username" />
                        </div>
                        <div className={`${v.input_field}`}>
                            <FaLock className={`${v.fa}`}/>
                            <input className={`${v.inputs}`}  type="password" name="password" id="password" placeholder="Password" />
                        </div>
                        <button className={`${v.btn}`}>Sign in</button>
                        <p className={`${v.social_text}`}>
                            Or Sign in with social platform
                        </p>
                        <div className={`${v.social_media}`}>
                            <Link href="" className={`${v.social_icon}`}>
                                <FaFacebookF/>
                            </Link>
                            <Link href="" className={`${v.social_icon}`}>
                                <FaTwitter/>
                            </Link>
                            <Link href="" className={`${v.social_icon}`}>
                                <FaGoogle />
                            </Link>
                            <Link href="" className={`${v.social_icon}`}>
                                <FaLinkedin />
                            </Link>
                        </div>
                        <p className={`${v.account_text}`}>
                Don't have an account? <Link href="/signup" className={`${v.account_link}`}>
                  <span>Sign up</span>
                </Link>
              </p>
                    </form>
                    {/* Signin form end */}
                      <div className={`${v.right_panel}`}>
                        <div className={`${v.content}`}>
                            <h3 className={`${v.panel_title}`}>Hello, Friend!</h3>
                            <p className={`${v.panel_text}`}>Enter your personal datails and start journey with us </p>
                            <Link href="/signup" className={`${v.btn}`}>Sign up</Link>
                        </div>
                        <Image src={signup_img} alt={"sign_up"} className={`${v.img}`} />
                    </div>
                </div>
                </div>
        </main>     
    </>
  )
}

export default signin_ui