import { ReactNode } from "react";

import { clsx } from "@/ui/utils";

import * as styles from "./Card.css";

type CardVariant = "purple" | "red" | "blue" | "secondary";

export interface CardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  variant: CardVariant;
}

const variantStyles = {
  purple: styles.variantPurple,
  red: styles.variantRed,
  blue: styles.variantBlue,
  secondary: styles.variantSecondary,
};

export const Card = ({ variant, icon, title, content }: CardProps) => {
  return (
    <div className={clsx(styles.root, variantStyles[variant])}>
      <div className={styles.header}>
        {icon}
        <h5>{title}</h5>
      </div>
      {content}
    </div>
  );
};
