import Link from "next/link";

import { Button } from "@/ui/components";

import * as styles from "./not-found.css";

export default function NotFoundPage() {
  return (
    <div className={styles.root}>
      <h3>Ups, looks like that you are lost</h3>

      <Link href="/" passHref className={styles.goHomeLink}>
        <Button variant="primary" size="lg">
          Go home
        </Button>
      </Link>
    </div>
  );
}
