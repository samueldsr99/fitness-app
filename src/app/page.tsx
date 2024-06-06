import Image from "next/image";
import Link from "next/link";

import { getMetadata } from "@/constants/metadata";
import { Button } from "@/ui/components";

import * as styles from "./page.css";

export const metadata = getMetadata({ titleSuffix: "Let's workout" });

export default function IndexPage() {
  return (
    <div className={styles.root}>
      <Image
        src="/images/landing-bg.avif"
        width={430}
        height={844}
        alt="Fitness guys"
        className={styles.bgImage}
        priority
      />
      <div className={styles.bottomSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Wherever you are health is number one</h1>
          <p className={styles.subtitle}>Start your fitness journey today</p>
        </div>
        <Link href="/home" className={styles.getStartedButtonLink}>
          <Button variant="primary" size="lg" fullWidth>
            Get started
          </Button>
        </Link>
      </div>
    </div>
  );
}
