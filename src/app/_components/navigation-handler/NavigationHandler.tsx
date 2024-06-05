"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { Navigation } from "../navigation";

import * as styles from "./NavigationHandler.css";

export const NavigationHandler = ({ children }: PropsWithChildren<{}>) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </>
  );
};
