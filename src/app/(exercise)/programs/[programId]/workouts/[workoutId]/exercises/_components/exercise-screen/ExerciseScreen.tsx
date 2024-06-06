import { WorkoutDetailsQuery } from "@/generated/graphql";
import { Button } from "@/ui/components";

import { Counter } from "../counter";

import * as styles from "./ExerciseScreen.css";

type Workout = NonNullable<WorkoutDetailsQuery["workout"]>;

interface ExerciseScreenProps {
  exercise: Workout["exercises"][number];
  onGoNext: () => void;
}

export const ExerciseScreen = ({ exercise, onGoNext }: ExerciseScreenProps) => {
  return (
    <div className={styles.root}>
      <video className={styles.video} src={exercise.videoUrl.url} width={400} height={300} autoPlay muted loop />
      <h1 className={styles.title}>{exercise.name}</h1>
      <p className={styles.subtitle}>
        {exercise.duration ? `${exercise.duration} secs` : `${exercise.repetitions} reps`}
      </p>

      <footer className={styles.footer}>
        {exercise.duration ? (
          <Counter duration={exercise.duration} onTimeUp={onGoNext} />
        ) : (
          <Button onClick={onGoNext} variant="primary" size="lg" fullWidth>
            Next
          </Button>
        )}
      </footer>
    </div>
  );
};
