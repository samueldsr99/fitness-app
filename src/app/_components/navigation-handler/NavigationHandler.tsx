"use client";

import { PropsWithChildren } from "react";

import { Navigation } from "../navigation";

import * as styles from "./NavigationHandler.css";

export const NavigationHandler = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <Navigation />
      </footer>
    </>
  );
};
