import React from "react";
import Dance from '../assets/dance2.mp4'

function About() {
  return (
    <div className="w-full p-20 bg-[#d6ff63] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[4vw] text-black  leading-[4vw] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non eveniet,
        ut ducimus assumenda mollitia ipsam.ut ducimus assumenda mollitia ipsam.
    
      </h1>
      <div className="w-full  border-t-[1px] border-[#2f3a10] mt-20 flex">
        <div className=" w-1/2 mt-10">
          <h1 className="text-[5vw]">Our Approach:</h1>
          <button className="px-5 py-3 uppercase bg-black text-white rounded-full flex gap-10 items-center  tracking-tight">Read More
            <div className="w-2 h-2   bg-white rounded-full">
            </div>
          </button>

        </div>
        <div className="w-1/2 h-[40vw] bg-[#04241c7e] rounded-2xl mt-10 overflow-hidden relative">
          <video src={Dance}  autoPlay loop className=" absolute h-full w-full object-cover" />
        </div>
      </div>


    

        

    </div>
  );
}

export default About;
