import React from "react";

function Background() {
  return (
    <>
      <div className="w-full z-[2] h-screen fixed">
        <div className="w-full py-10 flex justify-center text-zinc-400 font-semibold leading-none text-xl absolute top-[5%]">
          {" "}
          Documents
        </div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading font-bold text-zinc-700 leading-none tracking-tighter">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
