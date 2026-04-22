import Image from 'next/image';
import React from 'react'

export default function Mission() {
    const visionData = {
  title: "OUR MISSION",
  description:
    "Committed to excellence and innovation, we craft premium products that exceed expectations, foster lasting connections, and deliver value to our customers and stakeholders alike.",
};
  return (
    <div className="w-full bg-primary py-40 relative overflow-hidden flex justify-center items-center min-h-[600px] h-screen">
      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Right */}
        <div className="absolute top-10 right-10 lg:right-40">
          <Card icon="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fa534c567e77fd0f6e2d4_Group%20709%20(1).png" />
        </div>

        {/* Bottom Center */}
        <div className="absolute bottom-10 left-[20%] -translate-x-1/2">
          <Card  icon="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660fa5361be5d3d4f191b4f0_Group%20710%20(1).png" />
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center text-white z-10 max-w-4xl px-4">
        
        <h2 className="anton text-[12vw] lg:text-[9vw] leading-[90%] uppercase">
          {visionData.title}
        </h2>

        <p className="mt-6 text-sm lg:text-lg opacity-90 max-w-xl mx-auto font-light">
          {visionData.description}
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