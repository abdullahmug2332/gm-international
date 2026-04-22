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

const variants: Variants = {
  hiddenLeft: {
    opacity: 0,
    x: -100,
  },
  hiddenRight: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // ✅ fix
    },
  },
};
const data = [
  {
    number: 1,
    title: ["RESEARCH &", " DEVELOPMENT"],
    icon: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65ce1bc1a24198719c36ca2e_Group-p-1080.png",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65ceffcb4394a0d602ac0b0f_Rectangle%20193%20(2).png",
    description:
      "At the core of innovation lies our R&D department, where we consistently push the boundaries of creativity and technology to lead the industry forward. Our team of researchers and designers is committed to exploring novel materials, techniques, and trends, striving to deliver groundbreaking solutions that set new standards for the field.",
    faqs: [
      {
        ques: "MATERIAL EXPLORATION",
        ans: "Our R&D team tirelessly searches for new and sustainable materials that offer superior performance and durability. By experimenting with innovative fabrics and finishes, we ensure that our products meet the highest standards of quality and sustainability.",
      },
      {
        ques: "TECHNOLOGY INTEGRATION",
        ans: "We invest in the latest technologies and machinery to streamline our manufacturing processes and enhance product performance. From advanced CAD software for pattern making to state-of-the-art equipment for fabric testing, we leverage technology to optimize every aspect of our operations.",
      },
      {
        ques: "TREND ANALYSIS",
        ans: "Keeping a finger on the pulse of fashion trends, our R&D experts conduct thorough market research and trend analysis. By staying ahead of the curve, we anticipate consumer preferences and develop products that resonate with our target audience, ensuring that our collections remain fresh and relevant.",
      },
    ],
  },
  {
    number: 2,
    title: ["CUTTING"],
    icon: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/665048537ebe2837d8594c9c_Group%20588.svg",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65e9a8e98fd267ed4b9c8f12_Rectangle%20193.png",
    description:
      "By integrating advanced technology, we've enhanced our ability to tailor fits and styles to meet our customers' exact specifications. Our skilled team ensures brand confidentiality, swift turnaround times, and precise sampling, elevating the customer experience. With in-house pattern and grading preparation, we maintain the highest standards of quality. Our cutting department maximizes material utilization, minimizing waste with cutting-edge machinery and fabric spreaders.",
    faqs: [
      {
        ques: "ADVANCED CUTTING EQUIPMENT",
        ans: "Our cutting-edge machinery includes computerized cutting systems that guarantee precision and consistency. This technology allows us to achieve intricate designs and minimize material waste, enhancing both quality and efficiency.",
      },
      {
        ques: "SKILLED OPERATORS",
        ans: "Our team of highly trained operators brings years of expertise to the cutting process. With keen attention to detail and a commitment to excellence, they ensure that each piece is cut to perfection, meeting the exact specifications of the design.",
      },
      {
        ques: "QUALITY CONTROL MEASURES",
        ans: "Rigorous quality control measures are implemented throughout the cutting process to maintain the highest standards. From initial inspections of raw materials to final checks on cut pieces, we adhere to strict protocols to detect and rectify any issues, ensuring that only flawless components proceed to the next stage of production.",
      },
    ],
  },
  {
    number: 3,
    title: ["SEWING"],
    icon: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65cf68b34b0c016da12d55a0_Group%20588%20(1).png",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65e9a9d28d073e88fab098ba_Rectangle%20193%20(1).png",
    description:
      "In our sewing process, we prioritize precision and quality at every stitch. Our skilled team of seamstresses and tailors meticulously craft each garment to meet the highest standards of excellence. With modern equipment and attention to detail, we ensure that every piece meets our customers' expectations.",
    faqs: [
      {
        ques: "PROCESS CONTROL TECHNIQUES",
        ans: "We employ methods such as Time & Motion Study and Method Study to streamline sewing operations and minimize unnecessary activities, enhancing efficiency.",
      },
      {
        ques: "SKILLED TEAM",
        ans: "Our sewing division is staffed with dedicated Textile and Industrial Engineers who bring expertise and professionalism to every stitching task, ensuring precision and quality.",
      },
      {
        ques: "MODERN EQUIPMENT",
        ans: "Equipped with state-of-the-art instrumentation and machinery, our sewing department maximizes efficiency while maintaining high standards of quality and accuracy.",
      },
    ],
  },
  {
    number: 4,
    title: ["WASHING"],
    icon: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/665048ff8e4b58fdc33c97d9_ss.png",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65e9a9f52af100a2600941f9_Rectangle%20193%20(2).png",
    description:
      "At our washing facility, we excel in a wide range of finishes, from rinse wash to vintage treatments, ensuring each denim piece is imbued with unique character. Our experienced team is trained to handle specialized treatments, guaranteeing exceptional results every time. With ongoing training initiatives and the integration of sustainable technologies like Laser and Ozone, we're committed to continuous improvement and eco-friendly practices in our washing processes.",
    faqs: [
      {
        ques: "DIVERSE FINISHING TECHNIQUES",
        ans: "Our washing process encompasses a wide range of finishing techniques, from rinse wash to real vintage washes, ensuring diverse options to meet various design requirements.",
      },
      {
        ques: "SPECIAL TREATMENT HANDLING",
        ans: "Our experienced washing team is proficient in handling all sorts of special treatments, guaranteeing meticulous care for each garment and ensuring the desired results.",
      },
      {
        ques: "SUSTAINABLE PRACTICES",
        ans: "We prioritize sustainability by integrating advanced technologies like Laser technology in GDP and Ozone Technology in GWP into our washing setup, minimizing chemical usage and promoting eco-friendly processes.",
      },
    ],
  },
  {
    number: 5,
    title: ["FINISHING"],
    icon: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65cf68fe31c9343950eef684_Group%20588%20(4).png",
    image:
      "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fdb07a52b3b8fdfd8d0b8_Rectangle%20193.png",
    description:
      "At the heart of our operations lies the meticulous process of finishing and packaging. Here, each product undergoes rigorous quality assessment to uphold our uncompromising standards. We prioritize contamination-free packing, ensuring that every item emerges pristine, while also meticulously adhering to our clients' specifications.",
    faqs: [
      {
        ques: "QUALITY ASSESSMENT",
        ans: "Our Finishing and Packaging department conducts thorough quality checks on each product to ensure they meet our stringent standards. From examining stitching to inspecting fabric integrity, we leave no stone unturned in ensuring top-notch quality.",
      },
      {
        ques: "CONTAMINATION-FREE PACKING",
        ans: "We prioritize cleanliness and hygiene during the packing process, ensuring that all items are free from any form of contamination. This meticulous approach guarantees that our customers receive products in pristine condition.",
      },
      {
        ques: "CLIENT SPECIFICATION ADHERENCE",
        ans: "Each product is packaged according to our clients' specified standards, ensuring that their requirements and preferences are met with precision and accuracy. We take pride in our ability to tailor our packaging setup to meet diverse client needs.",
      },
    ],
  },
];

export default function page() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const tran = useTransform(scrollYProgress, [0, 1], ["0%", "-907%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div ref={ref} className="hidden lg:block w-full h-[700vh] ">
        <div className="sticky top-0 overflow-hidden w-full pt-20">
          <div className="container mx-auto relative">
            <motion.div
              style={{ left: x }}
              className="absolute top-0 translate-y-[-50%] "
            >
              <Image
                src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65fbe789b0b29bdd8e9e15ea_botton%201.png"
                width={700}
                height={700}
                alt="mark"
                className="w-[25px] h-auto"
              />
            </motion.div>
            <hr className="border border-black mb-1" />
            <div className=" flex justify-between">
              {["R&D", "CUTTING", "SEWING", "WASHING", "FINISHING"].map(
                (t, i) => (
                  <p key={i} className="anton text-2xl font-light">
                    {t}
                  </p>
                ),
              )}
            </div>
          </div>

          <motion.div style={{ x: tran }} className="flex w-full">
            {data.map((d: any, i: number) => (
              <div className="flex" key={i}>
                {/* Panel 1: Icon + Image */}
                <div className="flex flex-col lg:flex-row w-screen h-[85vh]">
                  <div className="flex-1 flex flex-col justify-between py-10 items-end">
                    <Image
                      className={`${i === 3 ? "w-[40%] xl:w-[50%]" : " w-[50%] xl:w-[60%]"} `}
                      src={d.icon}
                      height={400}
                      width={400}
                      alt="icon"
                    />
                    <div className="text-start w-[85%] flex items-end gap-3">
                      <p className="bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton text-[10vw] leading-[90%]">
                        {d.number}.
                      </p>
                      <div
                        className={`h-full flex flex-col ${d.title.length > 1 ? "justify-between" : "justify-end"}`}
                      >
                        <p
                          className="bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton text-[4.2vw] leading-[90%]"
                          style={{ whiteSpace: "pre-line" }}
                        >
                          {d.title[0]}
                        </p>
                        {d.title[1] && (
                          <p
                            className="bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton text-[4.2vw] leading-[90%]"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {d.title[1]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-end items-center px-10">
                    <div className="w-[60%] border border-primary rounded-3xl p-4">
                      <Image
                        className="w-full"
                        src={d.image}
                        height={1000}
                        width={1000}
                        alt="icon"
                      />
                    </div>
                  </div>
                </div>

                {/* Panel 2: Description + FAQ */}
                <div className="flex flex-col lg:flex-row w-screen h-[85vh]">
                  <div className="flex-1 flex flex-col items-center py-10">
                    <div className="w-[70%] flex flex-col justify-between h-full items-start">
                      <div>
                        <span className="text-background border-b-7 border-primary">
                          11111111
                        </span>
                        <p className="mt-4 font-light text-lg">
                          {d.description}
                        </p>
                      </div>
                      <span className="text-background border-b-7 border-primary">
                        11111111
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 flex justify-center p-10">
                    <div className="w-[70%] border border-primary p-4 rounded-3xl">
                      <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                      >
                        {d.faqs.map((f: any, j: number) => (
                          <AccordionItem
                            key={j}
                            value={`item-${j}`}
                            className="my-1"
                          >
                            <AccordionTrigger className="anton text-white bg-primary px-2 text-xl">
                              {f.ques}
                            </AccordionTrigger>
                            <AccordionContent className="mt-3 p-2 font-light text-lg">
                              {f.ans}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="block lg:hidden w-full py-10">
        <div className="w-full pt-15">
          <motion.div className="flex flex-col gap-20 w-full container mx-auto">
            {data.map((d: any, i: number) => (
              <motion.div
                key={i}
                className="flex flex-col space-y-5"
                variants={variants}
                initial={i % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-end justify-start gap-3">
                  <p className="bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton text-[10vw] leading-[90%]">
                    {d.number}.
                  </p>
                  <div
                    className={`h-full flex flex-col gap-1 ${d.title.length > 1 ? "justify-between" : "justify-end"}`}
                  >
                    <p
                      className={`bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton ${d.title.length > 1 ? "text-[5vw]" : "text-[10vw]"} text-[5vw] leading-[90%]`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {d.title[0]}
                    </p>
                    {d.title[1] && (
                      <p
                        className="bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton text-[5vw] leading-[90%]"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {d.title[1]}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex flex-col justify-between h-full items-start">
                  <div>
                    <span className="text-background border-b-7 border-primary">
                      11111111
                    </span>
                    <p className="mt-4 font-light text-lg">{d.description}</p>
                  </div>
                  <span className="text-background border-b-7 border-primary">
                    11111111
                  </span>
                </div>

                <div className="w-full border border-primary rounded-3xl p-4">
                  <Image
                    className="w-full"
                    src={d.image}
                    height={1000}
                    width={1000}
                    alt="icon"
                  />
                </div>

                <div className="w-full border border-primary p-4 rounded-3xl">
                  <Accordion type="single" collapsible defaultValue="item-0">
                    {d.faqs.map((f: any, j: number) => (
                      <AccordionItem
                        key={j}
                        value={`item-${j}`}
                        className="my-1"
                      >
                        <AccordionTrigger className="anton text-white bg-primary px-2 text-xl">
                          {f.ques}
                        </AccordionTrigger>
                        <AccordionContent className="mt-3 p-2 font-light text-lg">
                          {f.ans}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
