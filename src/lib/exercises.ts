import { legs } from "./data/legs";
import { chest } from "./data/chest";
import { back } from "./data/back";
import { shoulder } from "./data/shoulder";
import { biceps } from "./data/biceps";
import { triceps } from "./data/triceps";

export type Exercise = {
  exercise: string;
  id: string;
  description: string;
  difficulty: number;
  primaryMuscleGroup: string;
  secondaryMuscleGroup: string;
  videolink: string;
  credits: string;
  channelLink: string;
  stepByStep: string[];
};

export const exercises: Exercise[] = [
  ...back,
  ...biceps,
  ...chest,
  ...legs,
  ...shoulder,
  ...triceps,
].sort((a, b) => a.exercise.localeCompare(b.exercise));
