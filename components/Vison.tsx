import Image from 'next/image';
import React from 'react'

export default function Vison() {
    const visionData = {
  title: "OUR VISION",
  description:
    "A globally recognized organization known for innovative products, professional culture, people care and sustainability.",
  items: [
    {
      title: "GLOBAL REACH",
      icon: "/icons/global.png",
      position: "top-left",
    },
    {
      title: "SUSTAINABILITY",
      icon: "/icons/sustainability.png",
      position: "top-right",
    },
    {
      title: "PEOPLE CARE",
      icon: "/icons/people.png",
      position: "bottom-center",
    },
  ],
};
  return (
    <div className="w-full bg-primary py-40 relative overflow-hidden flex justify-center items-center min-h-[600px] h-screen">
      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left */}
        <div className="absolute top-10 left-10 lg:left-40">
          <Card icon="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fa4e7631538f0fc8e5594_Group%20706%20(1).png" />
        </div>

        {/* Top Right */}
        <div className="absolute top-10 right-10 lg:right-40">
          <Card icon="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fa4e93d7bac04111df717_Group%20707%20(1).png" />
        </div>

        {/* Bottom Center */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <Card  icon="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fa4eb653ce95905b4cedf_Group%20708%20(1).png" />
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center text-white z-10 max-w-4xl px-4">
        
        <h2 className="anton text-[12vw] lg:text-[10vw] leading-[90%] uppercase">
          OUR VISION
        </h2>

        <p className="mt-6 text-sm lg:text-lg opacity-90 max-w-xl mx-auto font-light">
          A globally recognized organization known for innovative products,
          professional culture, people care and sustainability.
        </p>

      </div>
    </div>
  )
}
function Card({  icon }: any) {
  return (
    <div className="bg-white/90 rounded-2xl  flex flex-col items-center justify-center gap-3 shadow-lg ">
      <Image src={icon} alt="icon" width={360} height={360} className='w-[100px] md:w-[100px] lg:w-[200px]' />
    </div>
  );
}