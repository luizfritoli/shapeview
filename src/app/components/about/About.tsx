"use client"

import AboutSquare from "./AboutSquare";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="lg:grid lg:grid-cols-3"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      viewport={{ once: true}}
    >
      <AboutSquare
        title="O que é o ShapeView?"
        desc="O ShapeView é uma aplicação que ajuda pessoas a executarem melhor
        os exercícios de academia, com vídeos de exemplo e orientações de postura."
      />
      <AboutSquare
        title="Para quem é indicado?"
        desc="O ShapeView é indicado para todas as pessoas que praticam atividades físicas
        e desejam maximizar seus resultados, treinando de forma mais segura e eficiente
        e prevenindo lesões."
      />
      <AboutSquare
        title="Como usar?"
        desc={
          <>
            No campo de texto abaixo, encontre ou pesquise pelo nome do
            exercício que deseja executar, clique nele e siga os passos!
            <br /> <br />
            <strong className="text-red-500">ATENÇÃO: </strong>os vídeos dos
            exercícios <strong>NÃO</strong> são produzidos pelo ShapeView! Eles
            são incorporados diretamente do YouTube, e todos os devidos créditos
            estarão disponíveis abaixo de cada vídeo.
          </>
        }
      />
    </motion.div>
  );
};

export default About;
