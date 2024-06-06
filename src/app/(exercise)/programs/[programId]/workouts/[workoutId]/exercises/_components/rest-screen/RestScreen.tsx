import { Button } from "@/ui/components";

import { Counter } from "../counter";

import * as styles from "./RestScreen.css";

export interface RestScreenProps {
  duration: number;
  onTimeUp: () => void;
  onSkip: () => void;
  text: string;
}

export const RestScreen = ({ text, duration, onTimeUp, onSkip }: RestScreenProps) => {
  return (
    <div className={styles.root}>
      <Counter duration={duration} onTimeUp={onTimeUp} />
      <h2>{text}</h2>
      <Button type="button" onClick={onSkip} variant="primary" size="md">
        Skip
      </Button>
    </div>
  );
};
