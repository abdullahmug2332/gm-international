"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home3() {
  const data = {
    img1: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/6622154b354afcb06960871a_Rectangle%20195%20(9).png",
    img2: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/66221527e3dcaaef95ea904e_Rectangle%20195%20(8).png",
    img3: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/6622161e80abd691aeb3b173_Rectangle%20195%20(11).png",
    img4: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/6622163eaa6062d3a70dcc08_Rectangle%20195%20(12).png",
    img5: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660e8c5eef3f0107ae2e147a_Rectangle%20195%20(2).png",
    img6: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660e8c632ba7c4b847380aee_Rectangle%20195%20(3).png",
    img7: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/662215da330c6ec0deb33dba_Rectangle%20195%20(10).png",
    img8: "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660e8e1d315bdd2ea3ccbb21_Rectangle%20195%20(6).png",
  };
  return (
    <div className="relative">
      {/* ✅ FIXED BACKGROUND VIDEO */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d737b40948c8a4d27a42d8_denim-cloth-macro-1-4k-2024-02-14-04-58-47-utc-transcode.mp4"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black/40 -z-10" />

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        {/* Section 1 */}
        <div className="relative z-10 text-white py-20 flex flex-col lg:flex-row items-stretch gap-5 min-h-230  flex-nowrap container xl:w-[70%]! mx-auto">
          {/* LEFT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-[30%] flex flex-col gap-2 lg:items-end order-1 lg:order-none"
          >
            <p className="text-gray-300 uppercase font-[400] text-3xl md:text-4xl lg:text-end">
              Empowering
            </p>

            <h1 className="text-4xl md:text-5xl font-bold anton lg:text-end">
              FLEXIBILITY
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400] lg:text-end">
              Embrace versatility with our tailored solutions, expertly crafted
              to accommodate orders of any size and complexity.
            </p>
          </motion.div>

          {/* IMAGE 1 (LEFT → RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[30%] flex items-end order-3 lg:order-none"
          >
            <Image
              src={data.img1}
              width={600}
              height={400}
              alt="image1"
              className="w-full object-cover aspect-square border border-white p-2 rounded-xl "
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-[40%] flex flex-col justify-end gap-5 order-2 lg:order-none"
          >
            <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400] lg:text-end">
              From small batches to intricate productions, we tailor our
              services to meet the unique needs of our partners.
            </p>

            {/* IMAGE 2 (LEFT → RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={data.img2}
                width={600}
                height={400}
                alt="image2"
                className="w-full object-cover aspect-square border border-white p-2 rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="relative z-10 text-white py-24 container xl:w-[70%]! mx-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch">
            {/* sectiopn1*/}
            <div className="w-full lg:w-[40%] relative flex flex-col items-start  order-3 lg:order-none">
              {/* TOP BIG IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-[80%] rounded-2xl overflow-hidden border border-white/30 p-2"
              >
                <Image
                  src={data.img3}
                  width={600}
                  height={600}
                  alt="img1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* BOTTOM OVERLAP IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="w-[50%]  xl:h-[400px] mt-[-80px] ml-[50%] lg:ml-[60%] rounded-2xl overflow-hidden border border-white/30 p-2"
              >
                <Image
                  src={data.img4}
                  width={600}
                  height={600}
                  alt="img2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>

            {/* sectiopn2*/}
            <div className="w-full lg:w-[30%] flex flex-col order-1 lg:order-none">
              {/* TOP TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:max-w-md relative xl:right-[27%]"
              >
                <p className="uppercase font-[400] text-3xl md:text-4xl  text-gray-300 ">
                  Tailored To
                </p>

                <h1 className="text-4xl md:text-5xl font-bold anton leading-tight">
                  FIT YOUR STYLE
                </h1>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-200 font-[400]">
                  We don’t just follow trends; we set them. Recognized as a
                  renowned denim jeans manufacturer, we provide contemporary
                  collections that redefine the fashion landscape.
                </p>
              </motion.div>
            </div>

            {/* sectiopn3*/}
            <div className="w-full lg:w-[30%]  flex flex-col justify-center  order-2 lg:order-none">
              {/* BOTTOM RIGHT SMALL TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className=" lg:ml-auto lg:max-w-sm"
              >
                <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400]">
                  With our up-to-date and trend-oriented collections, we
                  redefine the fashion landscape, ensuring our partners always
                  ahead of the curve.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="relative z-10 text-white py-20 flex flex-col lg:flex-row items-stretch gap-5 min-h-250  flex-nowrap container xl:w-[70%]! mx-auto">
          {/* LEFT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-[35%] flex flex-col justify-center gap-2 lg:items-end order-1 lg:order-none "
          >
            <p className="text-gray-300 uppercase font-[400] text-3xl md:text-4xl lg:text-end">
              FASHION THAT’S
            </p>

            <h1 className="text-3xl md:text-4xl font-bold anton lg:text-end">
              EASY ON THE PLANET
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400] lg:text-end">
              Discover how our commitment to eco-friendly apparel manufacturing
              and sustainable materials can enhance your brand's image and
              appeal.
            </p>
          </motion.div>

          {/* IMAGE 1 (LEFT → RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[32%] flex items-end order-3 lg:order-none "
          >
            <Image
              src={data.img5}
              width={600}
              height={400}
              alt="image1"
              className="ml-auto w-full lg:w-[80%] lg:h-[450px] object-cover aspect-square border border-white p-2 rounded-xl "
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-[33%] flex flex-col gap-5 order-2 lg:order-none "
          >
            {/* IMAGE 2 (LEFT → RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-none"
            >
              <Image
                src={data.img6}
                width={600}
                height={400}
                alt="image2"
                className="w-full lg:w-[80%] object-cover aspect-square border border-white p-2 rounded-xl"
              />
            </motion.div>
            <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400] order-1 lg:order-none">
              By partnering with us, brands and fashion stakeholders align
              themselves with responsible environmental practices. Our
              commitment to producing eco-friendly apparel in Pakistan ensures
              sustainable innovation that redefines modern fashion standards.
            </p>
          </motion.div>
        </div>

        {/* Section 4 */}
        <div className="relative z-10 text-white py-24 container xl:w-[70%]! mx-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-stretch">
            {/* sectiopn1*/}
            <div className="w-full lg:w-[40%] relative flex flex-col items-start  order-3 lg:order-none">
              {/* TOP BIG IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-[80%] rounded-2xl overflow-hidden border border-white/30 p-2"
              >
                <Image
                  src={data.img7}
                  width={600}
                  height={600}
                  alt="img1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>

              {/* BOTTOM OVERLAP IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="w-[50%]  xl:h-[400px] mt-[-80px] ml-[50%] lg:ml-[60%] rounded-2xl overflow-hidden border border-white/30 p-2"
              >
                <Image
                  src={data.img8}
                  width={600}
                  height={600}
                  alt="img2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>

            {/* sectiopn2*/}
            <div className="w-full lg:w-[30%] flex flex-col order-1 lg:order-none">
              {/* TOP TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="lg:max-w-md relative xl:right-[27%]"
              >
                <p className="uppercase font-[400] text-3xl md:text-4xl  text-gray-300 ">
                  LASER
                </p>

                <h1 className="text-4xl md:text-5xl font-bold anton leading-tight">
                  PRECISION
                </h1>

                <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-200 font-[400]">
                  With our state-of-the-art laser technology, witness the
                  transformation of fabric into artistry, with every stroke of
                  precision applied in mere seconds.
                </p>
              </motion.div>
            </div>

            {/* sectiopn3*/}
            <div className="w-full lg:w-[30%]  flex flex-col justify-center  order-2 lg:order-none">
              {/* BOTTOM RIGHT SMALL TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className=" lg:ml-auto lg:max-w-sm"
              >
                <p className="text-sm md:text-base leading-relaxed text-gray-200 font-[400]">
                  Bid farewell to the agony of anticipation and embrace the joy
                  of instant gratification as your garments are meticulously
                  crafted with the speed and accuracy you deserve.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
