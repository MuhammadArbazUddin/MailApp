import React from "react";
import Button from "./Button";
const CallToAction = () => {
  return (
    <>
      <div className="p-[80px] ">
        <div className="flex flex-col  md:flex-row items-center justify-between bg-gradient-to-r from-green-400 to-green-600 rounded-[50px_0_50px_0] p-[60px] shadow-lg">
          <div className="text-[30px] font-semibold text-blue">
            <h1 className="text-white drop-shadow-lg">
              We are looking forward to br starting a <br /> new project
            </h1>
            <h1 className="mt-4 text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-blue-800 drop-shadow-lg rounded-lg px-4 py-2 border border-white border-dashed tracking-wide text-center">
              Let's take your business to the next level!
            </h1>
          </div>
          <div className="mt-8 md:mt-0">
            <Button white>Request A Call-Back</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
