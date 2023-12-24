import React from "react";
import HighlightText from "../../common/HighlightText";
import { allSem } from "../../../../data/semlinks/allSem";
import { Sem } from "./Sem";




export const Homepage=()=>{
return(
    <>
    <div className=" w-100% h-100%" >

        <h1 className=" text-xl mt-[40px] text-center"><HighlightText text={"In the pursuit of excellence, the Jiit Study Club is your compass"}/></h1>
        <div className=" "><video width={700} className=" mx-auto mt-[70px] " muted loop autoPlay  src="../../../../data/Homepage/homepage.mp4"></video></div>
        <h1 className=" text-xl mt-[40px] text-yellow-200  text-center"><b>From first semester fundamentals to advanced wisdom, find study materials for every step of your academic journey at Jiit Study Club</b></h1>
        
        <div className=" flex gap-3 items-center justify-around">
        {allSem.map((Link, index) => (
            <div key={index} className="w-[100px] h-[100px] bg-yellow">
              {/* Your content for each link goes here */}
              <Sem sem={Link}/>
            </div>
          ))}
        </div>
        

    </div>

    </>
)

}