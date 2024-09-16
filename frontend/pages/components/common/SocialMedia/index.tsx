import React from "react";
import Link from "next/link";

const InputField = ({Icon} : {Icon:any}) => {

  return (

    <Link href="" className='flex items-center justify-center bg-[#041836] text-[#4ea3ee] border-2 border-solid border-[#4ea3ee] rounded-[50px] my-0 mx-1 h-11 w-11 hover:border-2 hover:border-solid hover:border-white hover:text-white'>
        {Icon}
    </Link>

    
  );
};

export default InputField;
