import React, { useState } from "react";
import { SemDetails } from "./semDetails";




export const Sem=({sem})=>{
    const [click,setClick]=useState(false);

    const handleClick=()=>{
        setClick(!click);

    }
   return(
    <>
    {
        click?(
            <>
            <SemDetails Sem={sem} handleClick={setClick} />
            </>
        ):(
            <div onClick={handleClick} className=" w-[200px]  text-center h-[100px] bg-richblack-900 rounded-lg hover:bg-black  text-white">
            <div className=" mt-4 pt-4 rounded-lg"><b className="text-yellow-5">SEM:</b>{sem.sem}
    </div>
        </div>
        
        )
    }
   
    </>

   )




}