import Link from "next/link";

import * as styles from "./page.css";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>

      <p className={styles.paragraph}>
        This is an example of a Next.js app using the app router presented as a final project for the module: React Web
        II at
        <Link target="_blank" href="https://harbour.space" className={styles.link}>
          Harbour.Space
        </Link>
        .
      </p>

      <p className={styles.paragraph}>
        Check the source code
        <Link target="_blank" href="https://github.com/samueldsr99/fitness-app" className={styles.link}>
          here
        </Link>
      </p>
    </>
  );
}
