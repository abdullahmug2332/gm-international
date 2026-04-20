"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Map() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // TEXT SHRINK + FADE
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  const mapScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <div ref={ref} className="h-[200vh] bg-white py-30">
      {/* STICKY SECTION */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* TEXT */}
        <motion.p
          style={{ scale: textScale, opacity: textOpacity }}
          className="font-semibold text-lg text-center lg:w-[65%] mx-auto px-4 transition-all  "
        >
          INDULGE IN YEAR-ROUND DENIM STYLE WITH SAMAD APPAREL, A TOP DENIM
          MANUFACTURER IN  <br />PAKISTAN AND PART OF SAMAD GROUP OF INDUSTRIES. WE
          LEAD WITH INNOVATIVE DENIM DESIGNS, SETTING TRENDS AND DELIVERING
          UNMATCHED QUALITY EVERY SEASON.
        </motion.p>

        {/* MAP */}
        <motion.div
          style={{ scale: mapScale}}
          className="mt-10 w-full flex justify-center transition-all"
        >
          <Image
            src="/map.png"
            width={1000}
            height={500}
            alt="map"
            className="w-[90%] md:w-[80%]"
          />
        </motion.div>
      </div>
    </div>
  );
}
