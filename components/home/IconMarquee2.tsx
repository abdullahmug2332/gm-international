"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const icons1 = [
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b193091c2b005f82dff9_Group%20567.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b1cbe87079f5552f31b3_Group%20569.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b15e08113cae9ce174f3_Group%20638.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b193091c2b005f82dff9_Group%20567.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b1cbe87079f5552f31b3_Group%20569.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b15e08113cae9ce174f3_Group%20638.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b193091c2b005f82dff9_Group%20567.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b1cbe87079f5552f31b3_Group%20569.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b15e08113cae9ce174f3_Group%20638.png",

];
const icons2 = [
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b233d1f60198f515e3b0_Group%20561.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b22611b59a382e8d797a_Group%20560.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b219fcc50326d2983669_Group%20559.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b20e7a36629099d87789_Group%20558.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b2029ac76fcc050b8e60_Group%20557.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f8e86d085aac8281e8bba_Group%20699.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b2431eecc7a196cf333d_Group%20562.png",
];

export default function IconMarquee2() {
  return (
    <div className="w-full py-10 bg-background space-y-6">
      <Marquee
        speed={90}
        gradient={true}
        className="gap-10"
        direction="left"
        gradientColor="#F2F2F2"
        gradientWidth="50px"
      >
        {icons1.map((icon, i) => (
          <div key={i} className="mx-8 flex items-center justify-center">
            <Image
              src={icon}
              alt="icon"
              width={300}
              height={300}
              className="transition w-[100px] md:w-[200px]"
            />
          </div>
        ))}
      </Marquee>
      <Marquee
        speed={90}
        gradient={true}
        className="gap-10"
        direction="right"
        gradientColor="#F2F2F2"
        gradientWidth="50px"
      >
        {icons2.map((icon, i) => (
          <div key={i} className="mx-8 flex items-center justify-center">
            <Image
              src={icon}
              alt="icon"
              width={300}
              height={300}
              className="transition w-[100px] md:w-[200px]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
