import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/app/_components/header";
import { sdk } from "@/lib/hygraph-client";
import { Button } from "@/ui/components";
import { ClockIcon } from "@/ui/icons";

import { ExerciseCard } from "./_components/exercise-card/ExerciseCard";

import * as styles from "./page.css";

interface WorkoutDetailsPageProps {
  params: { programId: string; workoutId: string };
}

export default async function WorkoutDetailsPage({ params }: WorkoutDetailsPageProps) {
  const { data } = await sdk.WorkoutDetails({ id: params.workoutId });

  const workout = data.workout;

  if (!workout) {
    notFound();
  }

  return (
    <div className={styles.root}>
      <Header href={`/programs/${params.programId}`} backLabel="Back to program" />
      <div className={styles.imageWrapper}>
        <Image
          src={workout.previewImage.url}
          className={styles.previewImage}
          alt={workout.name}
          width={400}
          height={200}
          priority
        />

        <div className={styles.duration}>
          <ClockIcon width={20} height={20} />
          <span className={styles.durationText}>{workout.expectedDuration}</span>
        </div>
      </div>

      <h1>{workout.name}</h1>
      <span className={styles.difficulty}>{workout.difficulty}</span>

      <ul className={styles.exercisesList}>
        {[
          ...workout.exercises,
          ...workout.exercises,
          ...workout.exercises,
          ...workout.exercises,
          ...workout.exercises,
        ].map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            repetitions={exercise.repetitions ?? undefined}
            duration={exercise.duration ?? undefined}
            name={exercise.name}
            previewImageUrl={exercise.previewImage.url}
          />
        ))}
      </ul>

      <div className={styles.startSection}>
        <Link href={`/programs/${params.programId}/workouts/${params.workoutId}/exercise`} passHref>
          <Button fullWidth size="lg" variant="primary">
            Lets start
          </Button>
        </Link>
      </div>
    </div>
  );
}
