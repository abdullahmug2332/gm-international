"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const navlink = [
    {
      name: "DENIM SPOTLIGHT",
      link: "/denim-spotlight",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65eacbc05d90eaede6d96e06_Rectangle%20107%20(1).png",
    },
    {
      name: "WORKFLOW",
      link: "/workflow",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65eacbec9103414d21132f02_Rectangle%20211.png",
    },
    {
      name: "OUR STORY",
      link: "/our-story",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65eacbff7805063011762c27_Rectangle%20212.png",
    },
    {
      name: "INSIGHTS",
      link: "/insights",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f9acad724dd95523cc3e1_Rectangle%20226.png",
    },
    {
      name: "CONTACT",
      link: "/contact",
      image:
        "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660faa12e408d84d9ae3e3b7_Rectangle%20227%20(2).png",
    },
  ];

  const [activeImage, setActiveImage] = useState(navlink[0].image);
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* TOP NAVBAR */}
      <div className="fixed top-0 z-50 w-full ">
        <div className="flex justify-between items-center container mx-auto py-4">
          <Link href={"/"}>
            <Image
              src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65b7a313b2c07d242b833ffb_Vector%20(1).svg"
              width={200}
              height={200}
              alt="logo"
              className="w-24"
            />
          </Link>
          {/* Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-md border border-gray-200"
          >
            {open ? (
              <IoClose className="text-primary size-8" />
            ) : (
              <GiHamburgerMenu className="text-primary size-8" />
            )}
          </button>
        </div>
      </div>

      {/* MEGA MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[url('/bg-navbar.png')] bg-cover bg-center transition-transform duration-500 z-40 ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 h-full items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6 z-10 pl-[10%] md:pl-0 xl:pl-[20%]">
            {navlink.map((item, index) => (
              <Link href={item.link} key={index} onClick={()=>setOpen(false)}>
                <span
                  onMouseEnter={() => setActiveImage(item.image)}
                  className="text-3xl md:text-6xl font-bold text-white/70 cursor-pointer transition duration-300 hover:text-primary hover:translate-x-2 anton "
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center items-center">
            <div className="w-[400px] h-[500px] relative rounded-xl overflow-hidden shadow-xl">
              <Image
                key={activeImage}
                src={activeImage}
                alt="preview"
                fill
                className="object-cover transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
