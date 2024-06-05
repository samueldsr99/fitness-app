import Image from "next/image";
import Link from "next/link";

import * as styles from "./ProgramCard.css";

export interface ProgramCardProps {
  id: string;
  title: string;
  previewImage: string;
  difficulty: string;
}

export const ProgramCard = ({ id, title, previewImage, difficulty }: ProgramCardProps) => {
  return (
    <Link className={styles.root} href={`/programs/${id}`}>
      <Image src={previewImage} alt={title} width={300} height={212} className={styles.image} priority />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <span className={styles.difficulty}>{difficulty}</span>
      </div>
    </Link>
  );
};
