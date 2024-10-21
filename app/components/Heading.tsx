import React from "react";

const Heading = () => {
  return (
    <div className="relative w-full  flex items-center justify-center h-1/4 bg-tech-image bg-cover">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col gap-3">
        <h1 className=" text-5xl text-white">Bellroy Bot</h1>
        <p className="text-orange-300">By Lauren Easter</p>
      </div>
    </div>
  );
};

export default Heading;
