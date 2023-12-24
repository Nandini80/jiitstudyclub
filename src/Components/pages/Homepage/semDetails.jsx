import React from "react";

export const SemDetails= ({Sem,handleClick})=>{
return(
    <>
    <div onClick={()=>{
        handleClick(false)
    }} className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
                <div className="text-white my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-richblack-800">
            <div><b className=" text-yellow-25 text-xl">Sem:-</b>{Sem.sem}</div>
                </div>
                </div>
    
    </>
)

}