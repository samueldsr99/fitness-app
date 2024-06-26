import { ReactNode } from "react";
import type { Metadata } from "next";

import { NavigationHandler } from "../_components/navigation-handler";

import "../globals.css";
import * as styles from "./layout.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <NavigationHandler />
    </>
  );
}
