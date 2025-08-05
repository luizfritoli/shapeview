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
    <div className="w-full flex flex-wrap justify-center gap-4 px-2 mb-2 lg:grid lg:grid-cols-2 lg:justify-items-center">
      {currentExercises.map((exercise) => (
        <Link key={exercise.id} href={`/exercises/${exercise.id}`}>
          <div className="w-[24em] lg:w-[25em] max-w-full h-[20em] flex flex-col justify-between items-center border-black border-[0.2em] border-solid mt-5 p-3 bg-neutral-200">
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

      {totalPages > 1 && (
        <div className="w-full flex justify-center mt-4 gap-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </button>

          <span>
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default ExercisesList;
