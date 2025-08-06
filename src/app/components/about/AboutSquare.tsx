import React, { ReactNode } from "react";

type SquareProps = {
  title: string;
  desc: ReactNode | string;
};

const AboutSquare = ({ title, desc }: SquareProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="m-4 h-[25em] w-[23em] hover:scale-106
                  transition-all duration-350 ease-in-out will-change-transform cursor-default"
      >
        <div
          className="bg-neutral-800 text-neutral-50 h-[4em]
                    flex justify-center items-center border-[0.2em] border-black"
        >
          <h2 className="text-[1.3em]">{title}</h2>
        </div>
        <div
          className="p-4 flex justify-center items-center bg-neutral-300
                    h-[calc(100%-4em)] border-[0.2em] border-t-0 border-black"
        >
          <p
            className="text-[1.1em] text-center pt-[0.4em] pb-[0.4em]
                    w-full break-words max-w-[50ch]"
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSquare;
