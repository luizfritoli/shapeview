"use client"

import ExercisesList from "./ExercisesList";
import { useState, useEffect } from "react";

const Search = () => {
  const [search, setSearch] = useState<string>("")
  const [debouncedSearch, setDebouncedSearch] = useState<string>("")

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search)
    }, 550)
    return () => clearTimeout(handler)
  }, [search])

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-[2.2em] font-semibold">Exercícios</h2>
      <input
        type="text"
        placeholder="Digite o exercício que deseja aprender"
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-sm w-[90%] mt-[1em] border-black border-[0.22em]"
      />
      <ExercisesList debouncedSearch={debouncedSearch} />
    </div>
  );
};

export default Search;
