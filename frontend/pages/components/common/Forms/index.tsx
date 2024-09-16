import React from "react";
import InputField from "../InputFields";
import SocialMediaIcon from "../SocialMedia";
import Button from "../Button";
import Link from "../Link";
import {
  FaFacebookF,
  FaLinkedin,
  FaEnvelope,
  FaGoogle,
  FaUser,
  FaLock,
  FaTwitter,
} from "react-icons/fa";

const Form = ({heading,btn,socialText,isSignup,linkText,href,link}:{heading:string,btn:string,socialText:string,isSignup:boolean,linkText:string,href:string,link:string}) => {
  return (
    <form
      action=""
      className='w-2/4 flex flex-col self-center text-white md-max:w-full sm-max:self-center ' 
    >
      <h2 className={`text-4xl text-white my-3 self-center font-bold py-2  sm-max:text-center`}>{heading}</h2>
      <div
        className={`border-2 rounded border-white self-center w-12 mb-3 `}
      ></div>

      <InputField
        Icon={<FaUser className=" mx-3 text-zinc-200 text-lg" />}
        type="text"
        name="username"
        id="username"
        placeholder="Username"
      />
      {isSignup && <InputField
        Icon={<FaEnvelope className="mx-3 text-zinc-200 text-lg" />}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
      />}
      <InputField
        Icon={<FaLock className="mx-3 text-zinc-200 text-lg" />}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      <Button
        className={`font-bold self-center my-12 w-32 h-10 border-2 border-[#4ea3ee] bg-[#041836] text-[#4ea3ee] hover:border-2 hover:border-white hover:text-white transition`}
      >
        {btn}
      </Button>
      <p className={'self-center text-lg text-white'}> {socialText}</p>
      <div className={`flex my-3 justify-center`}>
        <SocialMediaIcon Icon={<FaFacebookF />} />
        <SocialMediaIcon Icon={<FaTwitter />} />
        <SocialMediaIcon Icon={<FaGoogle />} />
        <SocialMediaIcon Icon={<FaLinkedin />} />
      </div>
      <p className='text-center mt-4 text-lg hidden md-max:block'>
        {linkText}
        
        <Link href={href} className="text-[#4ea3ee] ml-2  hover:text-white ">
          {link}
        </Link>
      </p>
    </form>
  );
};

export default Form;
