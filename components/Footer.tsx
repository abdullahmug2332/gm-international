"use client";

import { ArrowUp } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const navlink = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "DENIM SPOTLIGHT",
      link: "/denim-spotlight",
    },
    {
      name: "WORKFLOW",
      link: "/workflow",
    },
    {
      name: "OUR STORY",
      link: "/our-story",
    },
    {
      name: "INSIGHTS",
      link: "/insights",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="mx-auto container pt-12 sm:pt-30 lg:pt-40">
        <div className="flex flex-col-reverse md:flex-col">
          <div className="flex flex-col sm:flex-row md:items-center justify-between text-white font-[400] mb-4">
            {navlink.map((nav, i) => (
              <Link key={i} href={nav.link}>
                {nav.name}
              </Link>
            ))}
          </div>
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20 order-1  ">
            {/* Logo */}
            <div className="text-[12vw] anton font-[500] text-white">
              SAMAD APPAREL
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 sm:gap-4 text-white">
              <a
                href="#"
                className="border border-primary-foreground rounded-lg p-3 sm:p-4 hover:bg-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="border border-primary-foreground rounded-lg p-3 sm:p-4 hover:bg-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="border border-primary-foreground rounded-lg p-3 sm:p-4 hover:bg-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="border border-primary-foreground rounded-lg p-3 sm:p-4 hover:bg-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <AiFillInstagram size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
        {/* Locations Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 lg:gap-16 mb-r5 sm:mb-8 lg:mb-10 text-white">
          {/* Pakistan Location */}
          <div className="flex gap-6 items-end w-full lg:w-[500px] ">
            {/* Building Image */}
            <Image
              src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65e05ddce88d7726e2e4ddad_factory_svgrepo.com.png"
              alt="Pakistan Office Building"
              width={400}
              height={400}
              className="w-[50%] object-contain  hidden sm:block"
            />

            {/* Location Info */}
            <div className="space-y-3 sm:space-y-3 font-[400]  w-full sm:w-[50%]">
              <h3 className="text-xl sm:text-2xl anton font-[500]">PAKISTAN</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Plot #2, Fiazi St., 2i km Ferozepur Road,
                <br />
                Lahore 54600, Pakistan.
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <p>+92 (42) 3545 7398 & 9</p>
                <p>marketing@samadapparel.com</p>
              </div>
            </div>
          </div>

          {/* Netherlands Location */}
          <div className="flex gap-6 items-end  w-full lg:w-[500px] ">
            {/* Location Info */}
            <div className="space-y-3 sm:space-y-3 font-[400] sm:text-end w-full sm:w-[50%]">
              <h3 className="text-xl sm:text-2xl font-[400] anton">
                NETHERLANDS
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Langestraat 101, 38M AU
                <br />
                Amersfoort, Netherlands
              </p>
              <div className="space-y-2 text-sm sm:text-base">
                <p>+31 6 80104906</p>
                <p>eu.sales@samadapparel.com</p>
              </div>
            </div>
            {/* Building Image */}
            <Image
              src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65e05be40629b540caacb6b3_factory-industry-construction_svgrepo.com.png"
              alt="Netherlands Office Building"
              width={400}
              height={400}
              className="w-[50%] object-contain hidden sm:block"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-8 sm:my-7 lg:my-5"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 pb-3 text-white">
          {/* Left: Logo Icon */}
          <Image
            src="/logo-white.svg"
            width={200}
            height={200}
            alt="logo"
            className="w-24 brightness-0 invert"
          />

          {/* Center: Copyright */}
          <div className="text-center text-xs sm:text-sm">
            <p>COPYRIGHT © SAMAD APPAREL. ALL RIGHTS RESERVED</p>
          </div>

          {/* Right: Powered By */}
          <div className="flex items-center gap-2 text-xs sm:text-sm flex-wrap justify-center sm:justify-end">
            <span>Powered by:</span>
            <span className="font-semibold">Buzz Interactive</span>
            <span>•</span>
            <span className="font-semibold">Designade</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary-foreground text-primary rounded-full p-3 sm:p-4 hover:scale-110 transition-transform shadow-lg z-40 bg-white"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="sm:w-6 sm:h-6 bg-white" />
      </button>
    </footer>
  );
}
