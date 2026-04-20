"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Home5() {
  const ref = useRef<HTMLDivElement>(null);
  const data = {
    img1: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65bb84997956428c69e9e050_Group%20619.png",
    img2: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65c0c0493d7be624239c82f0_Group%20615%20(1).png",
    img3: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65fc0281d8fc82575148d7bf_Group%20684.png",
    img4: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f3ffd8077798e52e6ea18_Group%20708.png",
    heading: "WE’RE BIG ON SUSTAINABILITY",
    para1:
      "At Samad Apparel, sustainability is at the heart of our production process. We focus on creating premium woven garments in Pakistan, ensuring eco-friendly practices like water conservation through projects such as the Time and Water Efficiency initiative.",
    para2:
      "As an Oeko-Tex 100 certified facility, our Made in Green labeled denim guarantees eco-friendly production, ethical working conditions, and optimal health and safety standards. Our commitment to sustainability is not just a pledge; it's a conscious choice shaping a greener future.",
    para3:
      "Samad Apparel and Zi Solar (Pvt) Ltd established a partnership, unveiling 1.024 MW Solar Project to power a sustainable future and redefine Pakistan’s Energy Landscape.",
    para4:
      "The venture aims to reduce approximately 832 metric tons of carbon emissions annually and generate 1532 MWh of clean energy.",
  };

  // ✅ TEXT ANIMATION VARIANTS
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any, // ✅ SAFE FIX (no TS error)
      },
    },
  };

  // scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🔥 each image gets its own scroll segment
  const img1Y = useTransform(scrollYProgress, [0, 0.25], [900, 0]);
  const img2Y = useTransform(scrollYProgress, [0.25, 0.5], [900, 0]);
  const img3Y = useTransform(scrollYProgress, [0.5, 0.75], [900, 0]);
  const img4Y = useTransform(scrollYProgress, [0.75, 1], [900, 0]);

  const deg1Y = useTransform(scrollYProgress, [0, 0.25], [12, -12]);
  const deg2Y = useTransform(scrollYProgress, [0.25, 0.5], [-12, 12]);
  const deg3Y = useTransform(scrollYProgress, [0.5, 0.75], [24, -24]);
  const deg4Y = useTransform(scrollYProgress, [0.75, 1], [-24, 24]);

  return (
    <>
      <section ref={ref} className="hidden lg:block w-full bg-background py-20 min-h-[400vh]">
        <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between gap-12 sticky top-0 h-screen">
          {/* LEFT CONTENT (ANIMATED) */}
          <motion.div
            className="flex-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight text-[#1f3b6d] anton"
              variants={item}
            >
              {data.heading}
            </motion.h1>

            <div className="mt-8 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400]">
              <motion.p variants={item}>{data.para1}</motion.p>
              <motion.p variants={item}>{data.para2}</motion.p>
              <motion.p variants={item}>{data.para3}</motion.p>
              <motion.p variants={item}>{data.para4}</motion.p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE CARD (UNCHANGED) */}
          <div className="flex-1 flex justify-center relative h-[500px] ">
            <motion.div
              style={{ y: img1Y, rotate: deg1Y }}
              className="absolute  w-full transition-all duration-700"
            >
              <Image
                src={data.img1}
                alt="img1"
                width={500}
                height={500}
                className="w-[70%] mx-auto "
              />
            </motion.div>

            <motion.div
              style={{ y: img2Y, rotate: deg2Y }}
              className="absolute  w-full transition-all  duration-700"
            >
              <Image
                src={data.img2}
                alt="img2"
                width={500}
                height={500}
                className="w-[70%] mx-auto  "
              />
            </motion.div>

            <motion.div
              style={{ y: img3Y, rotate: deg3Y }}
              className="absolute  w-full transition-all  duration-700"
            >
              <Image
                src={data.img3}
                alt="img3"
                width={500}
                height={500}
                className="w-[70%] mx-auto"
              />
            </motion.div>

            <motion.div
              style={{ y: img4Y, rotate: deg4Y }}
              className="absolute  w-full  duration-700"
            >
              <Image
                src={data.img4}
                alt="img4"
                width={500}
                height={500}
                className="w-[70%] mx-auto"
              />
            </motion.div>
          </div>
        
        </div>
      </section>
      <section className="block lg:hidden w-full bg-background py-20">
        <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between gap-5 sticky top-0 ">
          {/* LEFT CONTENT (ANIMATED) */}
          <motion.div
            className="flex-1"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight text-[#1f3b6d] anton"
              variants={item}
            >
              {data.heading}
            </motion.h1>

            <div className="mt-2 space-y-1 text-sm md:text-base text-gray-700 leading-relaxed font-[400]">
              <motion.p variants={item}>{data.para1}</motion.p>
              <motion.p variants={item}>{data.para2}</motion.p>
              <motion.p variants={item}>{data.para3}</motion.p>
              <motion.p variants={item}>{data.para4}</motion.p>
            </div>
          </motion.div>

          
          <div className=" flex-1 flex justify-center relative  w-full">
            <motion.div className="relative w-full">
              <Image
                src={data.img1}
                alt="img1"
                width={500}
                height={500}
                className="w-full mx-auto"
              />
            </motion.div>

            {/* <motion.div className="absolute left-[10%] rotate-[12deg] w-full">
              <Image
                src={data.img2}
                alt="img2"
                width={500}
                height={500}
                className="w-[60%] "
              />
            </motion.div>

            <motion.div className="absolute left-[10%] rotate-[-24deg] w-full">
              <Image
                src={data.img3}
                alt="img3"
                width={500}
                height={500}
                className="w-[60%] "
              />
            </motion.div>

            <motion.div className="absolute left-[10%] rotate-[24deg] w-full">
              <Image
                src={data.img4}
                alt="img4"
                width={500}
                height={500}
                className="w-[60%] "
              />
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  );
}
