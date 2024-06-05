import Link from "next/link";

import { ChevronLeftIcon } from "@/ui/icons";

import * as styles from "./Header.css";

interface HeaderProps {
  href: string;
  backLabel: string;
}

export const Header = ({ href, backLabel }: HeaderProps) => {
  return (
    <div>
      <Link href={href} className={styles.link}>
        <ChevronLeftIcon />
        {backLabel}
      </Link>
    </div>
  );
};
