import React from "react";
import { companyLogos } from "../constant";

const Partners = () => {
  return (
    <>
      <div className="mt-[100px] mb-[100px]">
        <h5 className="tagline mb-6 text-center text-n-1/50">
          Helping people create beautiful content at
        </h5>
        <div className="flex flex-wrap justify-center gap-4 mx-4 my-8 md:mx-[250px] md:my-[80px] font-bold text-2xl">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-1 h-[4.5rem] min-w-[100px]"
              key={index}
            >
              <img src={logo.title} width={80} alt={`logo-${index}`} />
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
