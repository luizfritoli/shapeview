"use client";

import React from "react";
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.8 }}
    >
      <div className="flex justify-center items-center mt-[4em] font-medium flex-col text-center">
        <h1 className="text-[2.2em] font-semibold">ShapeView</h1>
        <span className="text-[1.06em] mt-[0.4em]">
          Cansado de esperar atenção do instrutor? Aprenda execuções corretas,
          onde e como quiser!
        </span>
      </div>
    </motion.div>
  );
};

export default Menu;
