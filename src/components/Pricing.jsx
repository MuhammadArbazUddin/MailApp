import React from "react";
import Button from "./Button";
import check from "../assets/images/check.png";
import { pricingPlans } from "../constant";
const Pricing = () => {
  return (
    <>
      <div className="grid items-center justify-center text-white mt-[40px]">
        <p className="tagline text-gray-400 flex justify-center mb-2">
          [ Get started with Brainwave ]
        </p>
        <h1 className="text-5xl font-semibold">Pay once, use forever</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 m-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[22rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4"
          >
            <h4 className={`h4 mb-4 ${plan.color}`}>{plan.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {plan.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6 text-white">
              <div className="h3">$</div>
              <div className="text-[5.5rem] leading-none font-bold">
                {plan.price}
              </div>
            </div>
            <Button white className="w-full mb-6">
              Get Started
            </Button>
            <ul className="text-white">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-8 text-white">
        <a
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          href="/pricing"
        >
          See the full details
        </a>
      </div>
    </>
  );
};

export default Pricing;
