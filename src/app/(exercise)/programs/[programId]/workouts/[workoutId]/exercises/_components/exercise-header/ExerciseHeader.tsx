"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { XIcon } from "@/ui/icons";

import * as styles from "./ExerciseHeader.css";

export interface ExerciseHeaderProps {
  redirectUrl: string;
  currentRound: number;
  totalRounds: number;
}

export const ExerciseHeader = ({ redirectUrl, currentRound, totalRounds }: ExerciseHeaderProps) => {
  const router = useRouter();

  return (
    <header className={styles.root}>
      <button className={styles.closeButton} onClick={() => router.push(redirectUrl)}>
        <XIcon />
      </button>
      <p>
        {currentRound} / {totalRounds}
      </p>
    </header>
  );
};
