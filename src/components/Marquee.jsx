import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='.2' className="w-full mt-32 py-16 rounded-tl-3xl text-white rounded-tr-3xl bg-[#0f3b28]">
      <div className="text  border-t border-b border-zinc-500 flex   whitespace-nowrap gap-6 overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[24vw] font-bold leading-none text-center -mt-[2.5vw] mb-[1vw] tracking-tight  "
        >
          WE ARE OKHLA
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[24vw] font-bold leading-none -mt-[2.5vw] mb-[1vw] tracking-tight"
        >
          WE ARE OKHLA
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
