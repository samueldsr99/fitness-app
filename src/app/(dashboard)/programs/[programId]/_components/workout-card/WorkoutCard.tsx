import Image from "next/image";
import Link from "next/link";

import { ClockIcon, PlayIcon } from "@/ui/icons";

import * as styles from "./WorkoutCard.css";

export interface WorkoutCardProps {
  name: string;
  href: string;
  previewImageUrl: string;
  duration: number;
  difficulty: string;
}

export const WorkoutCard = ({ name, difficulty, href, previewImageUrl, duration }: WorkoutCardProps) => {
  return (
    <li className={styles.root}>
      <Link href={href} className={styles.link}>
        <div className={styles.leftContent}>
          <Image className={styles.previewImage} src={previewImageUrl} alt={name} width={60} height={60} />
          <div>
            <p className={styles.name}>
              {name}
              <span className={styles.difficulty}>{difficulty}</span>
            </p>
            <p className={styles.duration}>
              <ClockIcon width={16} height={16} />
              {duration}
            </p>
          </div>
        </div>
        <PlayIcon className={styles.playIcon} />
      </Link>
    </li>
  );
};
