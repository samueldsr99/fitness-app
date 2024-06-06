import { sdk } from "@/lib/hygraph-client";

import { WorkoutCard } from "../programs/[programId]/_components/workout-card";

import { Greeting } from "./_components/Greeting";
import { ProgramsSlider } from "./_components/programs-slider";

import * as styles from "./page.css";

export default async function HomePage() {
  const popularProgramsPromise = sdk.PopularPrograms();
  const workoutsOfTheDayPromise = sdk.WorkoutsOfTheDay();

  const [popularPrograms, workoutsOfTheDay] = await Promise.all([popularProgramsPromise, workoutsOfTheDayPromise]);

  return (
    <>
      <Greeting />

      <section id="programs" className={styles.popularPrograms}>
        <h3>Popular Programs</h3>
        <div className={styles.popularProgramsSlides}>
          <ProgramsSlider programs={popularPrograms.data.programs} />
        </div>
      </section>

      <section id="workouts-of-the-day" className={styles.workoutsOfTheDay}>
        <h4>Workouts of the Day</h4>

        <div className={styles.workoutsOfTheDayList}>
          {workoutsOfTheDay.data.workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              name={workout.name}
              difficulty={workout.difficulty}
              duration={workout.expectedDuration}
              previewImageUrl={workout.previewImage.url}
              href={workout.program ? `/programs/${workout.program?.id}/workouts/${workout.id}` : "#"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
