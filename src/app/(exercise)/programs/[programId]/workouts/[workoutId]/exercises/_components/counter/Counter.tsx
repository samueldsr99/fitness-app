"use client";
import { useCountdown } from "@/hooks/useCountDown";

import * as styles from "./Counter.css";

interface CounterProps {
  duration: number;
  onTimeUp?: () => void;
}

export const Counter = ({ duration, onTimeUp }: CounterProps) => {
  const { current } = useCountdown({ min: 0, max: duration, onTimeUp });

  return <div className={styles.root}>{current}</div>;
};
