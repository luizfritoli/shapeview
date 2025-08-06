import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="min-h-[6em] h-auto bg-neutral-800 text-neutral-50 text-[0.8em] flex flex-col justify-around">
      <p className="text-center mb-1 mt-1">
        © Pensado e feito por <strong>Luiz Fritoli</strong> com muito queijo
        quente! 🧀
      </p>
      <p className="text-center">
        <strong>Tailwind CSS</strong>, <strong>TypeScript</strong> e{" "}
        <strong>React/Next.js </strong>foram utilizados para a montagem da
        página. <strong>Escrito com Visual Studio Code</strong>.
      </p>
      <span className="flex justify-center">
        <a href="https://luizfritoli.github.io/portfolio-luizfritoli/" target="_blank">
          <Image
            src="/logo/logo_luiz.png"
            width={200}
            height={200}
            alt="Logo do Luiz Fritoli"
            className="h-[5em] w-[5.7em]"
          />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
