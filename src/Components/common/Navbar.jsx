import React from "react";
import { useSelector } from "react-redux";
import { NavLink,Link } from "react-router-dom";

export const Navbar=()=>{
    const{user,token}=useSelector((state)=>state.auth);

    return(
        <div className=" text-white text-l min-w-[100vw] p-2 pt-3 bg-richblack-900 min-h-[50px]">
            <ul className=" gap-3 flex relative">

                
                

                <li className=" ml-[40px] text-2xl"> <Link to={"/"}>JIITSTUDYCLUB</Link></li>
                <li className="mx-auto text-2xl"> <Link to={"/"}>Home</Link></li>
                {
                    token?(
                        <>

                        </>

                    ):(
                        <>
                        <NavLink to={"/signup"}><li className=" text-xl mr-2 bg-richblack-800 rounded-2xl pl-5 min-h-[40px] pt-1 min-w-[100px]"><button>Sign up</button></li></NavLink>
                             
                        <NavLink to={"/login"}><li className=" text-xl mr-2 bg-richblack-800 rounded-2xl pl-5 min-h-[40px] pt-1 min-w-[100px]"><button>Log in</button></li></NavLink>
                        </>
                        
                     
                        

                    )
                }
               
            </ul>
        </div>
    )




}