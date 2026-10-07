"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const data = {
    img1: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f227bc6be11362e2eb61e_Rectangle%20240.svg",
    img2: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f228044032b6054fe9f9d_Rectangle%20196.svg",
    img3: "/shirt.png",
  };

  // 🔥 TEXT ANIMATION
  const textVariant = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // 🔥 IMAGE VARIANT FACTORY
  const imageVariant = (rotate: number, delay: number) => ({
    hidden: { y: 300, rotate: 0 },
    show: {
      y: 0,
      rotate: rotate,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <div className=" min-h-screen flex justify-center">
      <div className="container flex flex-col lg:flex-row lg:items-center justify-center ">
        {/* TEXT */}
        <motion.p
          variants={textVariant}
          initial="hidden"
          animate="show"
          className="lg:flex-1 text-[15vw] lg:text-[10vw] font-black uppercase leading-tight bg-gradient-to-br from-primary to-[#414141] bg-clip-text text-transparent anton border "
        >
          DENIM SPOTLIGHT
        </motion.p>

        {/* IMAGES */}
        <div className="hidden lg:flex flex-1  flex-col justify-center items-center relative">
          {/* IMAGE 1 */}
          <motion.div
            variants={imageVariant(12, 0.3)}
            initial="hidden"
            animate="show"
            className="w-[48%] relative top-10 z-[1]"
          >
            <Image
              src={data.img1}
              width={500}
              height={500}
              alt="img1"
              className="w-full aspect-square object-cover rounded-2xl border border-primary"
            />
          </motion.div>

          {/* IMAGE 2 */}
          <motion.div
            variants={imageVariant(-12, 0.6)}
            initial="hidden"
            animate="show"
            className="w-[48%] absolute top-[6%] right-[50%] translate-x-[40%] z-[2]"
          >
            <Image
              src={data.img2}
              width={500}
              height={500}
              alt="img2"
              className="w-full aspect-square object-cover rounded-2xl border border-primary"
            />
          </motion.div>

          {/* IMAGE 3 */}
          <motion.div
            variants={imageVariant(12, 0.9)}
            initial="hidden"
            animate="show"
            className="w-[48%] absolute top-[9%] right-[50%] translate-x-[60%] z-[3]"
          >
            <Image
              src={data.img3}
              width={500}
              height={500}
              alt="img3"
              className="w-full aspect-square object-cover rounded-2xl border border-primary"
            />
          </motion.div>

          {/* VIOLET IMAGE (NO ANIMATION) */}
          <Image
            src="/violet.png"
            width={500}
            height={500}
            alt="violet"
            className="w-[60%] z-[4]"
          />
        </div>
        <div className="block lg:hidden ">
          <Image
            src="/mob-shirts.png"
            width={500}
            height={500}
            alt="violet"
            className="w-[90%] z-[4] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
