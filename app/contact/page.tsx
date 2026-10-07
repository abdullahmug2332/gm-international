"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [mode, setMode] = useState("contact");
  const img =
    "/jacketc.png";
  const buttonClass = (type: String) =>
    `anton font-bold text-[2vw] px-15 py-2 rounded-xl cursor-pointer transition ${
      mode === type
        ? "bg-primary text-white border border-primary"
        : "bg-white text-primary border border-primary"
    }`;

  return (
    <>
      <div className=" bg-background ">
        <div className="py-30 container mx-auto flex flex-col lg:flex-row  gap-10">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[45%]">
            <div className="flex gap-2">
              <button
                onClick={() => setMode("contact")}
                className={buttonClass("contact")}
              >
                CONTACT
              </button>

              <button
                onClick={() => setMode("careers")}
                className={buttonClass("careers")}
              >
                CAREERS
              </button>
            </div>
            <h1 className="lg:mt-5 text-[9vw] font-black uppercase leading-tight bg-gradient-to-br from-primary to-[#414141] bg-clip-text text-transparent anton">
              DROP US A LINE!
            </h1>
          </div>
          {mode == "contact" && (
            <motion.div className="w-full lg:w-[55%] relative">
              <Image
                src={img}
                width={1000}
                height={1000}
                alt="jacket"
                className="w-full h-auto"
                priority
              />

              {/* FORM */}
              <div className="absolute w-[60%] top-[15%] left-[50%] translate-x-[-50%]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    className="bg-transparent py-4 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="COMPANY"
                    className="bg-transparent py-4 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="bg-transparent py-4 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="PHONE"
                    className="bg-transparent py-4 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                </div>

                <input
                  type="text"
                  placeholder="MESSAGE"
                  className="bg-transparent py-4 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                />

                <button className="text-primary bg-white w-full py-5 rounded-xl anton font-[500] mt-4 hover:scale-105 transition">
                  SHARE
                </button>
              </div>
            </motion.div>
          )}
          {mode == "careers" && (
            <motion.div className="w-full lg:w-[55%] relative">
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
                  placeholder="FULL NAME"
                  className="bg-transparent py-5 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                />

                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="bg-transparent py-5 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="PHONE"
                    className="bg-transparent py-5 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                  />
                </div>

                <input
                  type="text"
                  placeholder="MESSAGE"
                  className="bg-transparent py-5 border-b border-white text-white text-[17px] md:text-[20px] text-center font-[400] focus:outline-none w-full"
                />
                <label className="cursor-pointer text-white bg-blue-400 mt-2 p-3 rounded-lg inline-block text-center text-[13px]">
                  UPLOAD FILE
                  <input type="file" className="hidden" />
                </label>

                <button className="text-primary bg-white w-full py-5 rounded-xl anton font-[500] mt-4 hover:scale-105 transition">
                  SHARE
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
