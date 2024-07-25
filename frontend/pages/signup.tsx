/** @format */
import {
  FaFacebookF,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
  FaUser
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import React from "react";
import Link from "next/link";

function signup() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center min-h-screen bg-gray-200">
      <div className="flex  w-2/3 max-w-4xl rounded-2xl shadow-2xl bg-white">
        <div className="w-2/5 text-white bg-blue-500 py-36 px-12 rounded-tl-2xl rounded-bl-2xl">
          <h2 className="mb-1 text-2xl font-bold">Hello, Friends!</h2>
          <div className="inline-block w-10 mb-2 border-2 border-white"></div>
          <p className="mb-10">
            Fill up personal information and start journey with us.
          </p>
          <Link
            href="/login"
            className="inline-block px-12 py-1 font-semibold border-2 border-white rounded-full hover:bg-white hover:text-blue-500">
            Sign In
          </Link>
        </div>
        <div className="w-3/5">
          <h2 className="mb-1 text-3xl font-bold text-blue-500 pt-14">
            Create Account
          </h2>
          <div className="inline-block w-10 mb-2 border-2 border-blue-500"></div>
          <div className="flex justify-center mb-2 ">
            <a href="#" className="p-3 mx-1 border-2 rounded-full border-grey-200 hover:bg-blue-500 hover:text-white">
                <FaFacebookF className="text-sm"/>
            </a>
            <a href="#" className="p-3 mx-1 border-2 rounded-full border-grey-200 hover:bg-blue-500 hover:text-white">
                <FaLinkedin className="text-sm"/>
            </a>
            <a href="#" className="p-3 mx-1 border-2 rounded-full border-grey-200 hover:bg-blue-500 hover:text-white">
                <FaGoogle className="text-sm"/>
            </a>
        </div>{/*Social Login Section*/}
        <p className="my-3 text-gray-400">or use your email account</p>
        <div className="flex flex-col items-center">
        <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                <FaUser className="mr-2 text-gray-400"/> <input type="username" name="username" placeholder='Username' className="flex-1 text-sm bg-transparent outline-none" />
            </div>
            <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                <FaRegEnvelope className="mr-2 text-gray-400"/> <input type="email" name="email" placeholder='Email' className="flex-1 text-sm bg-transparent outline-none" />
            </div>
            <div className="flex items-center w-64 p-2 mb-3 bg-gray-100">
                <MdLockOutline className="mr-2 text-gray-400"/> <input type="password" name="password" placeholder='Password' className="flex-1 text-sm bg-transparent outline-none" />
            </div>
            <div className='flex justify-between w-64 md-5'>
            <label className='flex items-center text-xs'><input type="checkbox" name="remember" className="mr-1" />Remember me</label>                   
                <a href="#" className='text-xs'>Forget Password?</a>
            </div>
            <a href="" className="inline-block w-64 px-12 py-1 my-5 font-semibold text-white bg-blue-500 border-2 border-blue-500 rounded-full hover:bg-white hover:text-blue-500">Sign Up</a>
        </div>
        </div>

      </div>
    </main>
  );
}

export default signup;
