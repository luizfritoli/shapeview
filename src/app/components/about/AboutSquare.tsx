import React, { ReactNode } from "react";

type SquareProps = {
  title: string;
  desc: ReactNode | string;
};

const AboutSquare = ({ title, desc }: SquareProps) => {
  return (
<div className="w-full min-h-[13em] flex justify-center items-center">
  <div className="m-[1em] h-auto hover:scale-110 min-w-[22em] sm:min-w-[23em] transition-all duration-350 ease-in-out will-change-transform cursor-default">
    <div
      className="bg-neutral-800 text-neutral-50 h-[4em]
      flex justify-center items-center border-[0.2em] border-black "
    >
      <h2 className="text-[1.3em]">{title}</h2>
    </div>
    <div className="p-[1em] flex justify-center items-center bg-neutral-300 h-fit border-[0.2em] border-t-0 border-black">
      <p className="text-[1.1em] text-center pt-[0.4em] pb-[0.4em] w-full break-words max-w-[50ch]">
        {desc}
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutSquare;
