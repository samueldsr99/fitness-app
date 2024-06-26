import Image from "next/image";
import Link from "next/link";

import { clsx } from "@/ui/utils";

import * as styles from "./ProgramCard.css";

export interface ProgramCardProps {
  id: string;
  title: string;
  previewImage: string;
  difficulty: string;
  className?: string;
}

export const ProgramCard = ({ className, id, title, previewImage, difficulty }: ProgramCardProps) => {
  return (
    <Link className={clsx(styles.root, className)} href={`/programs/${id}`}>
      <Image src={previewImage} alt={title} width={300} height={212} className={styles.image} priority />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <span className={styles.difficulty}>{difficulty}</span>
      </div>
    </Link>
  );
};
