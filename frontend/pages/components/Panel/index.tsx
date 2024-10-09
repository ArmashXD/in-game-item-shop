import React from "react";
import Image from "next/image";
import Link from "../common/Link";


const Panel = ({heading,text,href,src,linkText}:{heading:string,text:string,href:string,src:string,linkText:string}) => {
  return (
    <div
      className={`flex flex-col w-2/4 z-10 h-70vh justify-center items-center text-center text-white overflow-hidden md-max:hidden`}
    >
      <h3 className="text-3xl font-bold my-3">{heading}</h3>
      <p className="text-lg text-center">
        {text}
      </p>
      <div className="my-3 place-content-center justify-items-center font-bold w-32 h-10 border-2 border-[#4ea3ee] bg-[#041836] text-[#4ea3ee] hover:border-2 hover:border-white hover:text-white transition">
        <Link href={href}>{linkText}</Link>
      </div>
      <Image src={src} alt={"sign_up"} width={450} />
    </div>
  );
};

export default Panel;
