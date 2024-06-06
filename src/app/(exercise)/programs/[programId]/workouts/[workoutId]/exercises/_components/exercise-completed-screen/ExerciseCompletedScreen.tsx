import ReactConfetti from "react-confetti";
import Link from "next/link";

import { useWindowSize } from "@/hooks/useWindowSize";
import { Button } from "@/ui/components";

import * as styles from "./ExerciseCompletedScreen.css";

interface ExerciseCompletedScreenProps {
  continueUrl: string;
}

export const ExerciseCompletedScreen = ({ continueUrl }: ExerciseCompletedScreenProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <div className={styles.root}>
        <h1>Congratulations!</h1>
        <Link href={continueUrl}>
          <Button variant="primary" size="lg">
            Continue
          </Button>
        </Link>
      </div>
      <ReactConfetti width={width} height={height} initialVelocityY={20} />
    </>
  );
};
