import React from "react";
import testimage from "../assets/images/robot.svg";

const About = () => {
  return (
    <div className="mt-[200px] sm:mt-[100px]  mb-[200px] sm:mb-[100px] text-white grid grid-cols-2 gap-4 items-center justify-center max-md:grid-cols-1 max-w-[86rem] px-16 max-sm:px-6 w-full mx-auto">
      <div className="order-2 max-md:order-1 w-full h-full flex justify-center max-md:justify-start items-center">
        <img
          src={testimage}
          className="w-full h-auto max-w-[300px] max-[1000px]:max-w-[192px] max-[1000px]:max-h-[120px] max-[1300px]:max-w-[300px] max-[1300px]:max-h-[120px]"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-3 order-1 max-md:order-2">
        <h1 className="h1  text-[48px] max-[1000px]:text-[32px] max-md:leading-[38px] font-semibold text-custom-green">
          About Us
        </h1>
        <p className="tagline text-[22px] leading-10 max-[1000px]:text-lg">
          Alsadaq is a dedicated platform created with the mission of supporting
          humanitarian efforts in Palestine and create an awareness campaigns
        </p>
      </div>
    </div>
  );
};

export default About;
