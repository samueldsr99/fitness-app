"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import { Navigation } from "./navigation";

export const NavigationHandler = ({ children }: PropsWithChildren<{}>) => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <footer>
        <Navigation />
      </footer>
    </>
  );
};
