"use client";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Variants } from "framer-motion";
const data = [
  {
    year: "1948",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dd8af10a2fe1c1809dcdca_Rectangle%20198.png",
    title: "PAKISTAN \n RUBBER INDUSTRIES",
    subtitle: "OUR JOURNEY BEGAN",
    des1: "Mr. Abdus Samad established Pak Rubber Industries, leading the way in manufacturing industrial and commercial rubber hoses.",
    des2: "Their venture marked the beginning of a journey toward innovation and growth.",
  },
  {
    year: "1962",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dd9b12004c39b84010f828_Rectangle%20198%20(1).png",
    title: "SAMAD \n RUBBER WORKS",
    title2: "SAMAD RUBBER WORKS",
    subtitle: "BONDED A LEGACY",
    des1: "In 1962, Samad Rubber Works was established as a separate entity following the division of Pakistan Rubber Industries.",
    des2: "Samad Rubber Works achieved a significant milestone by manufacturing the first contact adhesive in Pakistan. This groundbreaking development marked a new era of innovation and advancement for the company.",
  },
  {
    year: "1970",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dd9c43c235282b8ac80358_Rectangle%20198%20(2).png",
    title: "SAMAD \nDEFENCE",
    title2: "FOUNDING PARTNERSHIPS",
    des1: "In the 1970s, Samad Defence emerged as a pioneer, leading the charge in crafting high-performance inflatables with rubber-coated technical fabrics for the Pakistan military.",
    des2: "Specializing in innovative solutions, Samad Defence continues to meet the stringent requirements of military applications to this day.",
  },
  {
    year: "1990",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dd9d4b032c311a3c34210a_Rectangle%20198%20(3).png",
    title: "SAMAD \n FOAM",
    subtitle: "PIONEERING FOAM SOLUTIONS",
    des1: "In the 1990s, Samad Foam stepped onto the scene, harnessing our deep-rooted expertise in rubber to introduce polymer-based closed-cell foam for the first time in Pakistan",
    des2: "Our foam has been trusted for use in the FIFA World Cup footballs of 2014, 2018, and 2022, solidifying our position as a leading provider in the industry.",
  },
  {
    year: "2009",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f9149e956713290bc3243_Group%20701.png",
    title: "SAMAD \n APPAREL",
    subtitle: "QUALITY-DRIVEN MANUFACTURING",
    des1: "Founded in 2009, Samad Apparel emerged as the company's introduction to the denim industry.",
    des2: "As a fully integrated operation from cut to pack, Samad Apparel possesses the capability to manufacture a diverse range of woven garments in denim and twill fabrics.",
  },
  {
    year: "2020",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f91abc5e41f0179413613_Group%20705.png",
    title: "SAMAD \n OUTERWEAR",
    subtitle: "PERFORMANCE-FOCUSED APPAREL",
    des1: "Samad Outerwear is known for its attention to detail, offering premium outerwear solutions for every season.",
    des2: "From expertly crafted jackets to versatile parkas, our collection is designed to keep you comfortable and stylish in any weather.",
  },
];
export default function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const tran = useTransform(scrollYProgress, [0, 0.85], ["0%", "-605.5%"]);
  const scale = useTransform(scrollYProgress, [0.85, 1], [1, 30]);
  const y = useTransform(scrollYProgress, [0.85, 0.9], ["2%", "-400%"]);
  const text = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 0.86],
    ["36%", "25%", "-63%", "-90%"],
  );
  return (
    <>
      <div ref={ref} className="hidden lg:block w-full h-[900vh] ">
        <div className="sticky top-0 overflow-hidden w-full pt-20  ">
          <div
            className="min-h-[93vh] flex flex-col justify-between bg-[url('https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dc9d22371f1b7673c07aa3_Threads.png')] bg-center-top bg-contain  bg-no-repeat 
              "
          >
            <motion.div
              style={{ x: tran }}
              className="flex w-full  min-h-[550px] h-[65vh]! "
            >
              <div className=" min-w-screen flex justify-center items-center ">
                <p className="anton text-[10vw] uppercase font-light bg-gradient-to-r from-primary to-[#13171C] bg-clip-text text-transparent">
                  our story
                </p>
              </div>
              {data.map((d: any, i: number) => (
                <div className="  min-w-screen">
                  <div className="container mx-auto flex justify-center">
                    <div className="w-1/3  text-end p-3">
                      <p
                        className="anton font-light text-[2vw]"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {d.title}
                      </p>
                      {d.subtitle && (
                        <p
                          className="font-medium text-[1.5vw]"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {d.subtitle}
                        </p>
                      )}
                      <p
                        className="font-medium text-lg mt-3"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {d.des1}
                      </p>
                    </div>
                    <div className="w-1/3">
                      <Image
                        src={d.image}
                        alt="img1"
                        width={1000}
                        height={1000}
                        className="w-fullmx-auto "
                      />
                    </div>
                    <div className="w-1/3 flex flex-col justify-end p-3">
                      {d.title2 && (
                        <p
                          className="anton font-light text-[2vw]"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {d.title2}
                        </p>
                      )}
                      <p
                        className="font-medium text-lg mt-3"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {d.des2}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div style={{ scale, y }} className="relative">
              <Image
                src={"/yearimg.png"}
                alt="img1"
                width={1000}
                height={1000}
                className="w-[400px] mx-auto"
              />
              <div className="max-h-[50px] overflow-hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%]">
                <motion.div
                  className=" flex flex-col items-center translate-y-[-20%] gap-1"
                  style={{ y: text }}
                >
                  {data.map((da, i) => (
                    <p key={i} className="anton text-5xl text-white ">
                      {da.year}
                    </p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full pt-20">
        <div className="min-h-[93vh] flex flex-col gap-16 bg-[url('https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65dc9d22371f1b7673c07aa3_Threads.png')] bg-top bg-contain bg-no-repeat">
          {/* Heading */}
          <div className="w-full flex justify-center container mx-auto">
            <p className="anton text-[12vw] uppercase font-light bg-gradient-to-r from-primary to-[#13171C] bg-clip-text text-transparent">
              our story
            </p>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-20 px-4 container mx-auto">
            {data.map((d: any, i: number) => (
              <motion.div
                key={i}
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Text Top */}
                <div className="text-left   ">
                  <p
                    className="anton font-light text-[6vw] leading-tight"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {d.title}
                  </p>
                  {d.subtitle && (
                    <p
                      className="font-medium text-[4vw] mt-1"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {d.subtitle}
                    </p>
                  )}
                  <p className="font-medium text-base mt-3">{d.des1}</p>
                  {/* Bottom Text */}
                  <div>
                    {d.title2 && (
                      <p
                        className="anton font-light text-[6vw]"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {d.title2}
                      </p>
                    )}
                  </div>
                    <p className="font-medium text-base mt-1">{d.des2}</p>
                </div>

                {/* Image */}
                <div>
                  <Image
                    src={d.image}
                    alt="img"
                    width={1000}
                    height={1000}
                    className="w-full rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
