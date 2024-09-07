import PlusSvg from "../../assets/svgs/PlusSvg";

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[40.25rem] left-[19px] right-[19px] h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[39.9375rem] left-[19px] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[39.9375rem] right-[19px] z-2 pointer-events-none xl:block" />
    </>
  );
};
export const BottomLine2 = () => {
  return (
    <>
      <div className="hidden absolute top-[62.25rem] left-[19px] right-[19px] h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[61.9375rem] left-[19px]  z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[61.9375rem] right-[19px] z-2 pointer-events-none xl:block" />
    </>
  );
};
