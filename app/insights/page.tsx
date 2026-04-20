"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  const data = {
    img: "https://cdn.prod.website-files.com/65e5a815c836ea0d8fba8bee/69d393b6f03dd689a3df6ce7_Non-Iron%20and%20Easy-Care%20The%20New%20Standard%20for%20Woven%20Garments%20in%20Pakistan.png",
    title:
      "Non-Iron and Easy-Care: The New Standard for Woven Garments in Pakistan",
    subtitle: "LATEST INSIGHT",
    des: "Explore how Woven Garments in Pakistan are setting new non-iron and easy-care standards for global apparel buyers.",
    date: "02 Apr 2026",
  };

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
  ];;

  return (
    <div className="mt-20">
      {/* TOP SECTION */}
      <div className="container mx-auto flex flex-col-reverse lg:flex-col">
        <div className="border border-primary rounded-3xl p-4 lg:mt-8">
          <div className="rounded-3xl flex flex-col lg:flex-row overflow-hidden">
            <div className="w-full lg:w-1/2">
              <Image
                src={data.img}
                width={500}
                height={500}
                alt="insights"
                className="w-full"
              />
            </div>

            <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#13171C] to-primary text-white p-5 flex flex-col justify-center">
              <p className="text-[1.5vw] text-white/80">{data.subtitle}</p>
              <p className="anton text-[1.5vw] font-light">{data.title}</p>
              <p className="font-light">{data.des}</p>
              <span className="ml-auto text-[20px]">{data.date}</span>
            </div>
          </div>
        </div>

        <p className="anton bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent text-[11vw] lg:text-[6vw] font-light relative lg:bottom-[80px] lg:pl-6">
          INSIGHTS
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="container mx-auto py-30">
        <p className="anton bg-gradient-to-br from-primary to-[#13171C] bg-clip-text text-transparent text-[7vw] lg:text-[3vw] font-light">
          MOST RECENT
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="flex flex-col rounded-2xl overflow-hidden"
            >
              <Image
                src={blog.img}
                width={300}
                height={300}
                alt="card-image"
                className="w-full"
              />

              <div className="flex flex-col flex-1 gap-4 bg-gradient-to-br from-[#071730] to-primary rounded-2xl px-5 py-6 relative bottom-5">
                <p className="text-white anton text-2xl font-[500]">
                  {blog.title}
                </p>
                <p className="text-white text-base font-[500]">
                  {blog.desc}
                </p>

                <button className="anton text-white ml-auto mt-auto font-[400]">
                  READ MORE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}