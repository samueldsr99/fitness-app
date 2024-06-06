"use client";
import { useState } from "react";

import type { WorkoutDetailsQuery } from "@/generated/graphql";

import { ExerciseCompletedScreen } from "../exercise-completed-screen";
import { ExerciseHeader } from "../exercise-header";
import { ExerciseScreen } from "../exercise-screen/ExerciseScreen";
import { RestScreen } from "../rest-screen";

export interface ExerciseScreenProps {
  programId: string;
  workout: NonNullable<WorkoutDetailsQuery["workout"]>;
}

export const ExercisesScreen = ({ programId, workout }: ExerciseScreenProps) => {
  const exercises = workout.exercises;

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(-1);
  const [restTime, setRestTime] = useState(5);

  const handleRest = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setRestTime(30);
    } else {
      setCurrentExerciseIndex((prev) => prev + 1);
    }
  };

  const handleGoNext = () => {
    setRestTime(0);
    setCurrentExerciseIndex((prev) => prev + 1);
  };

  if (currentExerciseIndex >= exercises.length) {
    return <ExerciseCompletedScreen continueUrl={`/programs/${programId}`} />;
  }

  if (restTime > 0) {
    return (
      <>
        <ExerciseHeader
          redirectUrl={`/programs/${programId}`}
          currentRound={currentExerciseIndex + 1}
          totalRounds={exercises.length}
        />
        <RestScreen
          duration={restTime}
          onTimeUp={handleGoNext}
          onSkip={handleGoNext}
          text={currentExerciseIndex === -1 ? "Prepare to start" : "Take a break"}
        />
      </>
    );
  }

  return (
    <>
      <ExerciseHeader
        redirectUrl={`/programs/${programId}`}
        currentRound={currentExerciseIndex + 1}
        totalRounds={exercises.length}
      />
      <ExerciseScreen exercise={exercises[currentExerciseIndex]} onGoNext={handleRest} />
    </>
  );
};
