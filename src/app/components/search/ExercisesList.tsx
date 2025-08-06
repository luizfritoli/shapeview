"use client";

import { useState, useEffect } from "react";
import { exercises } from "@/lib/exercises";
import Link from "next/link";
import Image from "next/image";

type Search = {
  debouncedSearch: string;
};

const ExercisesList = ({ debouncedSearch }: Search) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExercises = exercises.filter((exercise) =>
    (
      exercise.exercise +
      " " +
      exercise.primaryMuscleGroup +
      " " +
      exercise.secondaryMuscleGroup
    )
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredExercises.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExercises = filteredExercises.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  return (
    <div className="w-[100%]">
      <div className="w-full flex flex-wrap justify-center gap-4 px-2 mb-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:justify-items-center">
        {currentExercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={`/exercises/${exercise.id}`}
            className="group block"
          >
            <div
              className="w-[22em] md:w-[21em] max-w-full h-[20em] cursor-pointer
               group-hover:opacity-50
               transition-all ease-in-out duration-300
               flex flex-col justify-between items-center
               border-black border-[0.2em] border-solid
               mt-5 p-3 bg-neutral-200"
            >
              <div className="w-full h-40 flex-shrink-0">
                <Image
                  src={`/exercises/${exercise.id}.webp`}
                  alt={exercise.exercise}
                  width={500}
                  height={200}
                  className="w-full h-full object-cover block border-black border-[0.4em] border-solid"
                />
              </div>

              <div className="w-full flex flex-col flex-grow justify-between overflow-hidden mt-2">
                <h3 className="font-semibold text-xl text-center break-words line-clamp-2 leading-tight px-2">
                  {exercise.exercise}
                </h3>

                <div className="w-full px-2 mb-[1em] text-start overflow-hidden">
                  <p className="text-lg font-medium break-words line-clamp-1 leading-snug">
                    {exercise.primaryMuscleGroup}
                  </p>

                  {exercise.secondaryMuscleGroup !== "Nenhum" && (
                    <span className="text-sm break-words line-clamp-1 leading-snug text-neutral-700">
                      {exercise.secondaryMuscleGroup}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <div
          className="w-72 mx-auto flex items-center justify-center gap-4
               text-neutral-50 bg-neutral-800 rounded-lg mt-4 mb-4"
        >
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="cursor-pointer"
          >
            Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="cursor-pointer"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default ExercisesList;
