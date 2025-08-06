import ExerciseClient from "@/app/components/exerciseClient/ExerciseClient";
import { exercises } from "@/lib/exercises";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function ExercisePage({ params }: PageProps) {
  const { id } = params;
  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) throw new Error("Depois eu resolvo!");

  return <ExerciseClient exercise={exercise} />;
}
