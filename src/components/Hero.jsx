import React from "react";
import Button from "./Button";
import curve from "../assets/images/curve.png";

const Hero = () => {
  return (
    <>
      <div className="relative mt-[120px] max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[12.25rem]">
        <h1 className="h1 mb-6 text-white">
          Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
          <span className="inline-block relative">
            Brainwave{" "}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>

        <Button href="/pricing" white>
          Get started
        </Button>
      </div>
    </>
  );
};

export default Hero;
