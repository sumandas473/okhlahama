import React, { useEffect,useRef, useState ,Math, atan2} from "react";
import png1 from "../assets/png1.jpg";
import pixel from '../assets/pexels.mp4'


function Ankhee() {

 
  return (
    <div  className="w-full h-screen overflow-hidden items-center flex justify-center  "> 
      <div data-scroll data-scroll-speed='-.5' className="w-[100vh] h-[30vh] bg-black mb-[25vh] ">
        <video src={pixel}  muted autoPlay loop   />
      </div>
    </div>
  );
}

export default Ankhee;
