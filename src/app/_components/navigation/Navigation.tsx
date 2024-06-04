"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AnalyticsIcon, BadgeInfoIcon, HomeIcon, RocketIcon } from "@/ui/icons";
import { clsx } from "@/ui/utils";

import * as styles from "./Navigation.css";

const links = [
  { title: "Home", icon: <HomeIcon />, path: "/home" },
  { title: "Programs", icon: <RocketIcon />, path: "/programs" },
  { title: "Analytics", icon: <AnalyticsIcon />, path: "/analytics" },
  { title: "About", icon: <BadgeInfoIcon />, path: "/about" },
];

interface NavItemProps {
  href: string;
  isActive: boolean;
  icon: ReactNode;
  text: string;
}

const NavItem = ({ href, isActive, icon, text }: NavItemProps) => {
  return (
    <Link href={href} className={clsx(styles.navItem, isActive && styles.navItemActive)}>
      {icon}
      {/* {isActive && <span>{text}</span>} */}
      <span style={{ display: isActive ? "block" : "none" }}>{text}</span>
    </Link>
  );
};

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  return (
    <nav className={styles.root}>
      {links.map((link) => (
        <NavItem key={link.title} href={link.path} isActive={isActive(link.path)} icon={link.icon} text={link.title} />
      ))}
    </nav>
  );
};
