import { motion } from "framer-motion";
import React from "react";
import Women from '../assets/women.mp4'

function LandingPage() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed='-0.5' className="w-full h-screen  pt-1">
      <div className="textsec mt-[17vh]  px-20">
        <div className="mask">
          <h1 className="text-9xl font-bold tracking-tighter leading-none">
            WE CREATE
          </h1>
        </div>
        <div className="mask flex gap-3 ">
          <motion.div
            
            initial={{ width: 0 }}
            animate={{ width: "7vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="w-[7vw] h-[90px]  mt-7 rounded-md overflow-hidden relative " >
              <video src={Women}  autoPlay loop className=" absolute h-full w-full object-cover" />

          
          
          </motion.div>
          <h1 className="text-9xl font-bold tracking-tighter leading-none">
            EYE-OPENING
          </h1>
        </div>
        <div className="mask">
          <h1 className="text-9xl font-bold tracking-tighter leading-none">
            PRESENTATION
          </h1>
        </div>
        <div className=" border-slate-500 border-t mt-32 mb-20 flex justify-between items-center py-6">
          {["For public And Private Companies", "From First To Last"].map(
            (items, index) => (
              <a key={index} className="text-md font-thin">
                {items}
              </a>
            )
          )}
          <div className="staetbutton">
            <button className="py-1 px-4 text-center border-[1px] border-slate-500 rounded-full">
              START THE PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
