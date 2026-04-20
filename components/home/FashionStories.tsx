"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FashionStories() {
  const blogs = [
    {
      img: "https://cdn.prod.website-files.com/65e5a815c836ea0d8fba8bee/69d393b6f03dd689a3df6ce7_Non-Iron%20and%20Easy-Care%20The%20New%20Standard%20for%20Woven%20Garments%20in%20Pakistan.png",
      title:
        "Non-Iron and Easy-Care: The New Standard for Woven Garments in Pakistan",
      desc: "Explore how Woven Garments in Pakistan are setting new non-iron and easy-care standards for global apparel buyers.",
    },
    {
      img: "https://cdn.prod.website-files.com/65e5a815c836ea0d8fba8bee/69d3926c1d590c93311d0e75_Sourcing%20Sustainable%20Apparel%20A%20Buyer%27s%20Guide%20to%20Pakistan.png",
      title: "Sourcing Sustainable Apparel: A Buyer's Guide to Pakistan",
      desc: "Explore how to source premium sustainable apparel from Pakistan with reliable suppliers and Apparel Manufacturers in Pakistan for global brands.",
    },
    {
      img: "https://cdn.prod.website-files.com/65e5a815c836ea0d8fba8bee/69d38cbcee3b3d6e7c6de7ab_Top%2010%20Qualities%20of%20a%20Leading%20Denim%20Manufacturer%20in%20Pakistan.png",
      title: "Top 10 Qualities of a Leading Denim Manufacturer in Pakistan",
      desc: "Explore the top qualities of a Denim Manufacturer in Pakistan delivering premium quality, innovation, and reliable solutions for global jeans brands.",
    },
  ];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };
  return (
    <div className="bg-background py-30 ">
      <div className="container mx-auto  space-y-5">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight  bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent anton"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Fashion Stories
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col rounded-2xl overflow-hidden"
            >
              <Image
                src={blog.img}
                width={300}
                height={300}
                alt="card-image"
                className="w-full"
              />

              <div className="flex flex-col flex-1 gap-4 bg-gradient-to-br from-[#071730] to-primary rounded-2xl overflow-hidden px-5 py-6 relative bottom-5">
                <p className="text-white anton text-2xl font-[500]">
                  {blog.title}
                </p>
                <p className="text-white text-base font-[500]">{blog.desc}</p>
                <button className="anton text-white ml-auto mt-auto font-[400]">
                  READ MORE
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex">
          <button className="anton text-primary border border-primary py-2 px-10 rounded-xl mx-auto">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
