import { notFound } from "next/navigation";

import { sdk } from "@/lib/hygraph-client";

import { ExercisesScreen } from "./_components/exercises-screen";

export interface ExercisesProps {
  params: { programId: string; workoutId: string };
}

export default async function Exercises({ params }: ExercisesProps) {
  const { data } = await sdk.WorkoutDetails({ id: params.workoutId });

  const workout = data.workout;

  if (!workout) {
    notFound();
  }

  return <ExercisesScreen programId={params.programId} workout={workout} />;
}
