import ExerciseClient from "@/app/components/exerciseClient/ExerciseClient";
import { exercises } from "@/lib/exercises";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ExercisePage({ params }: PageProps) {
  const { id } = await params;
  const exercise = exercises.find((ex) => ex.id === id);

  if (!exercise) notFound();

  return <ExerciseClient exercise={exercise} />;
}
