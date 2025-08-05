import React from "react";
import Link from "next/link";
import { exercises } from "@/lib/exercises";

type Props = {
  params: { id: string };
};

const ExerciseArea = ({ params }: Props) => {
  const exercise = exercises.find((ex) => params.id === ex.id);
  if (!exercise) {
    throw new Error("Depois eu resolvo!");
  }

  return (
    <div className="flex justify-center items-center flex-col w-[100%]">
      <h1 className="text-[1.7em] font-semibold text-center mt-8">
        {exercise.exercise.toUpperCase()}
      </h1>
      <div className="mt-[1em] bg-[#353535] w-[100%] h-[17em] flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <iframe
            src={exercise.videolink.replace("watch?v=", "embed/")}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-[310px] h-[154px] aspect-video border-[#101111] border-[0.2em]"
          ></iframe>
        </div>
        <p className="self-start mt-[1em] ml-[0.46em] text-neutral text-[#FFF] font-medium">
          Créditos:{" "}
          <a href={exercise.channelLink} className="text-[#e0c5c5]">
            {exercise.credits}
          </a>
        </p>
        <span
          className={`flex items-center justify-center w-37 h-13 mt-2 font-bold text-[1.5em] border-black border-[0.2em] ${
            exercise.difficulty === 3
              ? "bg-red-600"
              : exercise.difficulty === 2
              ? "bg-yellow-600"
              : "bg-green-600"
          }`}
        >
          {exercise.difficulty === 3
            ? "DIFÍCIL"
            : exercise.difficulty === 2
            ? "MÉDIO"
            : "FÁCIL"}
        </span>
      </div>
      <p className="mt-[0.8em] ml-[0.3em]">
        <strong>SOBRE: </strong>
        {exercise.description}
      </p>
      <div className="self-start ml-[0.3em] mt-[1em] mb-[1em]">
        <span><strong>Músculo(s) primário(s): </strong> {exercise.primaryMuscleGroup}</span>
        <br />
        {exercise.primaryMuscleGroup !== "Nenhum" && (
          <span><strong>Músculo(s) secundário(s): </strong> {exercise.secondaryMuscleGroup}</span>
        )}
      </div>
      <div>
        <h2 className="font-semibold text-center text-[1.3em]">
          Passo a passo
        </h2>
        <ol className="list-decimal list-inside w-full px-4">
          {exercise.stepByStep.map((step, index) => (
            <li
              key={index}
              className="ml-1 max-w-full break-words whitespace-normal text-sm sm:text-base mb-1 marker:font-bold marker:text-neutral-950"
            >
              {step}
            </li>
          ))}
        </ol>
      </div>
        <Link href="/" className="mt-[1.5em] mb-[1.5em]"><span className="text-neutral-800 font-bold text-[1.3em] underline">VOLTAR</span></Link>
    </div>
  );
};

export default ExerciseArea;
