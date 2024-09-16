
import React from "react";

const InputFields = ({Icon,type,name,id,placeholder} : {Icon:any, type:string, placeholder:string, name:string, id:string}) => {

  return (
    
    <div className='flex w-[80%] self-center items-center py-2 border border-[#4ea3ee] my-2 sm-max:w-[80%] md-max:justify-items-center'>
      {Icon}
      <input
        className='w-full bg-transparent outline-none text-slate-300'
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputFields
