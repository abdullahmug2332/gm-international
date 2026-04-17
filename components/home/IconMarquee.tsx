"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const icons1 = [
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afe678078f660c535320_Group%20519.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b0e0c16ddc9e494dfe36_Group%20512%20(1).png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8aff53e22fb41400a8271_Group%20510.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afcd8001f1dcf793b8d9_Group%20522.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afda7abf771031833b8e_Group%20520.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afe678078f660c535320_Group%20519.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b0e0c16ddc9e494dfe36_Group%20512%20(1).png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8aff53e22fb41400a8271_Group%20510.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afcd8001f1dcf793b8d9_Group%20522.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8afda7abf771031833b8e_Group%20520.png",
];
const icons2 = [
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f8ddf4323ff35a23b55a6_Group%20694.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/690de29bedf40687b6b4d8dc_S.oliver-01-p-2000.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b0996fb5daa40d053eba_Group%20518.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b08a9b31ad6d18aa249a_Group%20517.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660f8ddc5593e3cece24e718_Group%20693.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b0703cd465adda1090ff_Group%20513.png",
  "https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/65d8b065c684456b4129c9e1_Group%20515.png",
];

export default function IconMarquee() {
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
