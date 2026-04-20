"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Denim2() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const data = {
    img1: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f227bc6be11362e2eb61e_Rectangle%20240.svg",
    img2: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f228044032b6054fe9f9d_Rectangle%20196.svg",
    img3: "/shirt.png",
    img4: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f2284c0cda9d64a32e9d1_Rectangle%20195.svg",
    info: [
      {
        img: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f227bc6be11362e2eb61e_Rectangle%20240.svg",
        title: "EMPOWERING FLEXIBILITY",
        description:
          "Say goodbye to hassle and hello to convenience as we make large-scale buying a breeze. With our tailored approach, get exactly what you need, when you need it, every time.",
      },
      {
        img: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f228044032b6054fe9f9d_Rectangle%20196.svg",
        title: "TAILORED TO FIT YOUR STYLE",
        description:
          "We don't just follow trends; we set them. With our up-to-date and trend-oriented collections, we redefine the fashion landscape, ensuring our partners always stay ahead of the curve.",
      },
      {
        img: "/shirt.png",
        title: "FASHION THAT’S EASY ON THE PLANET",
        description:
          "Style that's kind to the Earth! Discover fashion that not only looks good but also does good. With our sustainable practices and eco-friendly materials, you can rock the latest trends while reducing your carbon footprint because fashion shouldn't cost the Earth.",
      },
      {
        img: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/664f2284c0cda9d64a32e9d1_Rectangle%20195.svg",
        title: "LASER PRECISION",
        description:
          "With our state-of-the-art laser technology, witness the transformation of fabric into artistry, with every stroke of precision applied in mere seconds. Bid farewell to the agony of anticipation and embrace the joy of instant gratification as your garments are meticulously crafted with the speed and accuracy you deserve.",
      },
    ],
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
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  // Y movement (bottom → top)
  const img1Y = useTransform(scrollYProgress, [0, 0.05], [300, 0]);
  const img2Y = useTransform(scrollYProgress, [0.25, 0.35], [300, 0]);
  const img3Y = useTransform(scrollYProgress, [0.5, 0.65], [300, 0]);
  const img4Y = useTransform(scrollYProgress, [0.75, 0.95], [300, 0]);

  // Rotation (0 → final)
  const deg1 = useTransform(scrollYProgress, [0, 0.05], [0, 12]);
  const deg2 = useTransform(scrollYProgress, [0.25, 0.35], [0, -12]);
  const deg3 = useTransform(scrollYProgress, [0.5, 0.65], [0, 12]);
  const deg4 = useTransform(scrollYProgress, [0.75, 0.95], [0, -12]);

  return (
    <>
      <div className=" min-h-screen hidden lg:flex justify-center">
        <section
          ref={ref}
          className="container flex flex-col lg:flex-row items-start justify-center min-h-[400vh]"
        >
          <div className="flex-1">
            {data.info.map((info, i) => (
              <div
                key={i}
                className="min-h-screen flex flex-col justify-center "
              >
                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight  bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton"
                  variants={item}
                >
                  {info.title}
                </motion.h1>

                <div className="mt-8 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400]">
                  <motion.p variants={item}>{info.description}</motion.p>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGES */}
          <div className="hidden lg:flex flex-1  flex-col justify-center items-center sticky top-15 overflow-hidden">
            {/* IMAGE 1 */}
            <motion.div
              style={{ y: img1Y, rotate: deg1 }}
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
              style={{ y: img2Y, rotate: deg2 }}
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
              style={{ y: img3Y, rotate: deg3 }}
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
            {/* IMAGE 4 */}
            <motion.div
              style={{ y: img4Y, rotate: deg4 }}
              className="w-[48%] absolute top-[12%] right-[50%] translate-x-[40%] z-[4]"
            >
              <Image
                src={data.img4}
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
              className="w-[60%] z-[5]"
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
        </section>
      </div>
      <div className=" min-h-screen flex lg:hidden justify-center">
        <section className="container flex flex-col gap-10 items-start justify-center ">
          {data.info.map((info, i) => (
            <div key={i} className=" flex flex-col justify-center ">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight  bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton"
                variants={item}
              >
                {info.title}
              </motion.h1>

              <div className="mt-2 space-y-5 text-sm md:text-base text-gray-700 leading-relaxed font-[400]">
                <motion.p variants={item}>{info.description}</motion.p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl mt-4">
                <Image
                src={info.img}
                width={500}
                height={500}
                alt="violet"
                className={`w-full scale-[1.05]`}
              />
              </div>
              
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
