import React from "react";
import Nature from "../assets/nature.mp4";
import { motion } from "framer-motion";

function Cardsec() {
    
  return (
    <div className="w-full data-scroll data-scroll-speed='.2' ">
      <h1 className="text-8xl mt-16 ml-[5vw] tracking-tight">Featured projects</h1>

      <div className="w-full h-[1px] bg-black mt-10"></div>


      <div className="scond w-full  flex justify-around ">
        <div className="px-[6vw] mt-[7vh] mb-[5vh]  w-1/2">
            <li className="mb-[1.5vw]">FYDS</li>
            < motion.div whileHover={{scale: 1.1 }} className="w-[42vw] h-[20vw] bg-black rounded-lg overflow-hidden">
                <div  className="card w-full h-full bg-green-500 ">
                    <video src={Nature} muted autoPlay loop />
                </div>
            </motion.div>
            <div className="flex gap-2 mt-[2vh]">
                <h1 className="px-3 py-1 rounded-xl   border mt-2">solo</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">feed</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">OKHLA</h1>
            </div>
            
            
        </div>
        <div className="px-[2vw] mt-[7vh] mb-[5vh] w-1/2">
            <li className="mb-[1.5vw]">FYDS</li>
            < motion.div whileHover={{scale: 1.1 }} className="w-[42vw] h-[20vw] bg-black rounded-lg overflow-hidden">
                <div  className="card w-full h-full bg-green-500 ">
                    <video src={Nature} muted autoPlay loop />
                </div>
            </motion.div>
            <div className="flex gap-2 mt-[2vh]">
                <h1 className="px-3 py-1 rounded-xl   border mt-2">solo</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">feed</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">OKHLA</h1>
            </div>
            
            
        </div>

        


      </div>

      <div className="scond w-full  flex justify-around ">
        <div className="px-[6vw] mt-[7vh] mb-[5vh]  w-1/2">
            <li className="mb-[1.5vw]">FYDS</li>
            < motion.div whileHover={{scale: 1.1 }} className="w-[42vw] h-[20vw] bg-black rounded-lg overflow-hidden">
                <div  className="card w-full h-full bg-green-500 ">
                    <video src={Nature} muted autoPlay loop />
                </div>
            </motion.div>
            <div className="flex gap-2 mt-[2vh]">
                <h1 className="px-3 py-1 rounded-xl   border mt-2">solo</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">feed</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">OKHLA</h1>
            </div>
            
            
        </div>
        <div className="px-[2vw] mt-[7vh] mb-[5vh] w-1/2">
            <li className="mb-[1.5vw]">FYDS</li>
            < motion.div whileHover={{scale: 1.1 }} className="w-[42vw] h-[20vw] bg-black rounded-lg overflow-hidden">
                <div  className="card w-full h-full bg-green-500 ">
                    <video src={Nature} muted autoPlay loop />
                </div>
            </motion.div>
            <div className="flex gap-2 mt-[2vh]">
                <h1 className="px-3 py-1 rounded-xl   border mt-2">solo</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">feed</h1>
                <h1 className="px-3 py-1 rounded-xl  border mt-2">OKHLA</h1>
            </div>
            
            
        </div>

       

        


      </div>


      <button className="bg-black text-white ml-[47vw] mb-8 ml-[44vw] rounded-[50px] px-10 py-2">SEE ALL CONTENT </button>


      
      
    

      

      
      
    </div>
  );
}

export default Cardsec;
