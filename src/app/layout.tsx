import { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { themeClass } from "@/ui/theme/index.css";
import { clsx } from "@/ui/utils";

import "./globals.css";
import * as styles from "./layout.css";

const outfit = Outfit({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={clsx(outfit.className, themeClass, styles.root)}>{children}</body>
    </html>
  );
}
