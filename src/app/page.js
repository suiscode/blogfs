import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-[100px] max-[1024px]:flex-col max-[1024px]:text-center">
      <div className="flex-[1] flex flex-col gap-[50px] leading-none max-[1024px]:items-center">
        <h1 className="text-[96px] font-semibold max-[768px]:text-[64px]">Creative Thoughts Agency.</h1>
        <p className="text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel
          nisi id libero viverra eleifend orci sagittis justo, et fermentum
          tortor turpis at justo.
        </p>
        <div className="flex gap-5">
          <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-lg bg-[#3673fd] text-white">Learn more</button>
          <button className="p-5 min-w-[120px] cursor-pointer border-none rounded-lg bg-white text-[#3673fd]">Contact</button>
        </div>
        <div className="relative w-[500px] h-[50px] grayscale max-[768px]:w-full">
          <Image src="/brands.png" alt="brand" fill />
        </div>
      </div>
      <div className="relative flex-[1]">
        <Image src="/hero.gif" alt="brand" fill />
      </div>
    </div>
  );
}
