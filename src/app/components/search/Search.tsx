"use client";

import ExercisesList from "./ExercisesList";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 550);
    return () => clearTimeout(handler);
  }, [search]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      viewport={{ once: true}}
      className="flex justify-center items-center flex-col"
    >
      <h2 className="text-[2.2em] font-semibold">Exercícios</h2>
      <input
        type="text"
        placeholder="Digite o exercício que deseja aprender"
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-sm w-[90%] mt-[1em] border-black border-[0.22em]"
      />
      <ExercisesList debouncedSearch={debouncedSearch} />
    </motion.div>
  );
};

export default Search;
