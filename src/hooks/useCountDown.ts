import { useEffect, useState } from "react";

interface Counter {
  current: string;
  isPaused: boolean;
  isOver: boolean;
  pause: () => void;
  play: () => void;
  reset: () => void;
  togglePause: () => void;
}

interface UseCountdownProps {
  min: number;
  max: number;
  onTimeUp?: () => void;
}

export const useCountdown = ({ min, max, onTimeUp }: UseCountdownProps): Counter => {
  const [count, setCount] = useState(max);
  const [paused, setPaused] = useState(false);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count <= min) {
      setIsOver(true);
      clearInterval(interval);
      onTimeUp?.();
      return;
    }

    return () => clearInterval(interval);
  }, [count, min, max, paused, onTimeUp]);

  return {
    current: count.toString(),
    isPaused: paused,
    isOver,
    pause: () => setPaused(true),
    play: () => setPaused(false),
    reset: () => {
      setIsOver(false);
      setCount(max);
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
