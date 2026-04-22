"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const text = "GMAN INTERNATIONAL ";
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleLetters(i);

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://cdn.prod.website-files.com/65b78ba82104f6788b2a990f/660e7bf0b2525211c617981b_updated-transcode.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="container text-white relative z-20 mx-auto mt-30" >
        <p className="text-white text-md md:text-lg tracking-wide font-normal  leading-relaxed">
          Connecting denim with nature
        </p>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-end justify-center h-[85%] pb-20">
        <h1 className="text-white font-bold text-center w-[70%] leading-none">
          <span className="block text-[8vw] uppercase anton">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ${
                  index < visibleLetters
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
}
