import Image from "next/image";

import { PlayIcon } from "@/ui/icons";

import * as styles from "./ExerciseCard.css";

interface WithRepetitions {
  repetitions: number;
  duration?: undefined;
}

interface WithDuration {
  duration: number;
  repetitions?: undefined;
}

type ExerciseCardProps = {
  name: string;
  previewImageUrl: string;
} & (WithRepetitions | WithDuration);

export const ExerciseCard = ({ name, previewImageUrl, duration, repetitions }: ExerciseCardProps) => {
  return (
    <li className={styles.root}>
      <div className={styles.link}>
        <div className={styles.leftContent}>
          <Image className={styles.previewImage} src={previewImageUrl} alt={name} width={60} height={60} />
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.duration}>{duration ? `${duration} mins` : `${repetitions} reps`}</p>
          </div>
        </div>
        <PlayIcon className={styles.playIcon} />
      </div>
    </li>
  );
};
