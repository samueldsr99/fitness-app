import Image from "next/image";
import { notFound } from "next/navigation";

import { Header } from "@/app/_components/header";
import { sdk } from "@/lib/hygraph-client";

import { WorkoutCard } from "./_components/workout-card";

import * as styles from "./page.css";

interface ProgramDetailsPageProps {
  params: { programId: string };
}

export default async function ProgramDetailsPage({ params }: ProgramDetailsPageProps) {
  const { data } = await sdk.ProgramById({ id: params.programId });

  const program = data.program;

  if (!program) {
    notFound();
  }

  return (
    <>
      <Header href="/programs" backLabel="Back to programs" />

      <Image
        src={program.previewImage.url}
        className={styles.previewImage}
        alt={program.name}
        width={400}
        height={200}
        priority
      />

      <h1>{program.name}</h1>
      <p className={styles.description}>{program.description}</p>

      <section id="workouts" className={styles.workoutsSection}>
        <div className={styles.workoutsSectionHeader}>
          <h2>Workouts</h2>
          <span>{program.workouts.length} workouts</span>
        </div>
        <ul className={styles.workoutsList}>
          {program.workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              name={workout.name}
              difficulty={workout.difficulty}
              href={`/programs/${params.programId}/workouts/${workout.id}`}
              duration={workout.expectedDuration}
              previewImageUrl={workout.previewImage.url}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
