"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactUs() {
  const ref = useRef<HTMLDivElement>(null);

  const img =
    "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dc5ac8f2daed0aa686e698_Jacket%20(3).png";

  // ✅ scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  // ✅ animation values
  const y = useTransform(scrollYProgress, [0, 0.7, 1], [900, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <>
      <div ref={ref} className="hidden lg:block bg-background min-h-[300vh]">
        <div className="pt-30 container mx-auto flex flex-col lg:flex-row items-center gap-10 sticky top-0 mb-[-8%]">
          {/* LEFT CONTENT */}
          <div className="md:w-[25%]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight text-[#1f3b6d] anton">
              DROP US A LINE!
            </h1>

            <div className="mt-2 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400] md:w-[250px]">
              <p>
                Connect with us and let's shape your style journey together!
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT (ANIMATED) */}
          <motion.div style={{ y, scale }} className="md:w-[50%] relative">
            <Image
              src={img}
              width={700}
              height={700}
              alt="jacket"
              className="w-full h-auto"
              priority
            />

            {/* FORM */}
            <div className="absolute w-[60%] top-[10%] left-[50%] translate-x-[-50%]">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <input
                type="text"
                placeholder="MESSAGE"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <button className="text-primary bg-white w-full py-2 rounded-xl anton font-[500] mt-4 hover:scale-105 transition">
                SHARE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="block lg:hidden bg-background ">
        <div className="pt-30 container mx-auto flex flex-col lg:flex-row items-center gap-10 mb-[-8%]">
          {/* LEFT CONTENT */}
          <div className="w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight text-[#1f3b6d] anton">
              DROP US A LINE!
            </h1>

            <div className="mt-2 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400] md:w-[250px]">
              <p>
                Connect with us and let's shape your style journey together!
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT (ANIMATED) */}
          <motion.div className="w-full relative">
            <Image
              src={img}
              width={700}
              height={700}
              alt="jacket"
              className="w-full h-auto"
              priority
            />

            {/* FORM */}
            <div className="absolute w-[60%] top-[10%] left-[50%] translate-x-[-50%]">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <input
                type="text"
                placeholder="MESSAGE"
                className="bg-transparent py-2 border-b border-white text-white text-[20px] md:text-[25px] text-center font-[400] focus:outline-none w-full"
              />

              <button className="text-primary bg-white w-full py-2 rounded-xl anton font-[500] mt-4 hover:scale-105 transition">
                SHARE
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
