"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Exercise {
  id: string;
  exercise: string;
  description: string;
  primaryMuscleGroup: string;
  secondaryMuscleGroup: string;
  difficulty: number;
  stepByStep: string[];
  videolink: string;
  channelLink: string;
  credits: string;
}

interface Props {
  exercise: Exercise;
}

export default function ExerciseClient({ exercise }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center w-full px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true}}
    >
      <h1 className="text-[1.7em] font-semibold text-center mt-8">
        {exercise.exercise.toUpperCase()}
      </h1>

      <p className="mt-[0.8em] ml-[0.3em]">
        <strong>SOBRE: </strong>
        {exercise.description}
      </p>

      <div className="self-start lg:self-center ml-[0.3em] mt-[1em] mb-[1em]">
        <span>
          <strong>Músculo(s) primário(s): </strong> {exercise.primaryMuscleGroup}
        </span>
        <br />
        {exercise.primaryMuscleGroup !== "Nenhum" && (
          <span>
            <strong>Músculo(s) secundário(s): </strong> {exercise.secondaryMuscleGroup}
          </span>
        )}
      </div>
      <span
        className={`flex items-center mb-[1em] justify-center px-[0.6em] py-3 font-bold text-lg border-black border-[0.2em] rounded
          ${
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
      <div>
        <h2 className="font-semibold text-center text-[1.3em]">Passo a passo</h2>
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

      <div className="mt-4 bg-[#353535] w-full max-w-5xl rounded-lg p-4 flex flex-col items-center gap-4">
        <div className="w-full aspect-video max-w-4xl">
          <iframe
            src={exercise.videolink.replace("watch?v=", "embed/")}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-[#101111] border-[0.2em] rounded"
          ></iframe>
        </div>
        <p className="self-start text-white font-medium">
          Créditos:{" "}
          <a
            href={exercise.channelLink}
            target="_blank"
            className="text-[#e0c5c5] hover:underline"
          >
            <strong>{exercise.credits}</strong>
          </a>
        </p>
      </div>
      <Link href="/" className="mt-[1.5em] mb-[1.5em]">
        <span className="text-neutral-800 font-bold text-[1.3em] underline">VOLTAR</span>
      </Link>
    </motion.div>
  );
}
