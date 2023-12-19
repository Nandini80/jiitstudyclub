import React from "react";
import { Link } from "react-router-dom";

export const Login =()=>{

    return(
        <>
        <div className=" ml-[300px] rounded-xl p-7 max-w-[800px] min-h-[300px] mt-[200px] bg-richblack-900 flex text-white text-l">
            <div className=" ">
             <p className=" mt-[20px]"><b className=" text-yellow-200  text-xl">Username - </b> <input className=" text-black" type="text" name="Username" /></p>
             <p className=" mt-[50px]"><b className=" text-yellow-200  text-xl">Password - </b> <input className=" text-black"  type="text" name="Username" /></p>
             <Link to="/forgot-password">
          <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
            Forgot Password
          </p>
        </Link>
            
             <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        <Link to={"/dashboard"}>
        Sign In
        </Link>
       
      </button>
            </div>
            <div>

            </div>

        </div>
        
        </>
    )
}