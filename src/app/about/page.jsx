import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex gap-[100px] max-[768px]:flex-col max-[768px]:text-center">
      <div className="flex-[1] flex flex-col gap-[50px] leading-none">
        <h2 className="text-[28px] text-[#3673fd] font-semibold">
          About Agency
        </h2>
        <h1 className="text-[54px] font-semibold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          nisi id libero viverra eleifend orci sagittis justo, et fermentum
          tortor turpis at justo.
        </p>
        <div className="flex items-center justify-between max-[768px]:flex-col max-[768px]:gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#3673fd] text-[32px] font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#3673fd] text-[32px] font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#3673fd] text-[32px] font-bold">10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className="relative flex-[1]">
        <Image src="/about.png" alt="brand" fill className="object-contain" />
      </div>
    </div>
  );
};

export default AboutPage;
