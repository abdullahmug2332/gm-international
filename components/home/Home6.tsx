"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Home6() {
  const ref = useRef<HTMLDivElement>(null);
  const data = {
    img1: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dc518f1f78d3c300678ebe_Group%20645.png",
    img2: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65fc029c746b8c70d0686834_Group%20680.png",
    img3: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65bba6d19a963171c196fb97_Group%20617.png",

    heading: "AND SOCIAL RESPONSIBILITY",
    para1:
      "Our initiatives extend beyond fashion, reaching into the heart of communities. Building on the foundations laid by our CSR programs at Samad Group, we continue to champion causes that matter. Whether supporting education, healthcare, or environmental sustainability, our commitment remains unwavering. We believe in fashion with a purpose, and our CSR endeavors echo our dedication to making a positive impact on the world, one stitch at a time.",
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
  const img1Y = useTransform(scrollYProgress, [0, 0.3], [900, 0]);
  const img2Y = useTransform(scrollYProgress, [0.3, 0.6], [900, 0]);
  const img3Y = useTransform(scrollYProgress, [0.6, 1], [900, 0]);

  const deg1Y = useTransform(scrollYProgress, [0, 0.3], [12, -12]);
  const deg2Y = useTransform(scrollYProgress, [0.3, 0.6], [-12, 12]);
  const deg3Y = useTransform(scrollYProgress, [0.6, 1], [24, -24]);

  return (
    <>
      <section ref={ref} className="hidden lg:block w-full bg-background py-20 min-h-[750vh]">
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
            </div>
          </motion.div>

          {/* RIGHT IMAGE CARD (UNCHANGED) */}
          <div className=" flex-1 flex justify-center relative h-[500px] ">
            <motion.div
              style={{ y: img1Y, rotate: deg1Y }}
              className="absolute  w-full"
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
              className="absolute  w-full"
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
              className="absolute  w-full"
            >
              <Image
                src={data.img3}
                alt="img3"
                width={500}
                height={500}
                className="w-[70%] mx-auto"
              />
            </motion.div>
          </div>
          
        </div>
      </section>
      <section className="block lg:hidden w-full bg-background py-20  ">
        <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between gap-2 sticky top-0 ">
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

            <div className="mt-2 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400]">
              <motion.p variants={item}>{data.para1}</motion.p>
            </div>
          </motion.div>

        
          <div className="block lg:hidden flex-1 flex justify-center relative mt-2 w-full">
            <motion.div className="relative mt-1 w-full">
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
                className="w-[80%] "
              />
            </motion.div>

            <motion.div className="absolute left-[10%] rotate-[-24deg] w-full">
              <Image
                src={data.img3}
                alt="img3"
                width={500}
                height={500}
                className="w-[80%] "
              />
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  );
}
