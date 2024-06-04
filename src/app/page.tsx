import Link from "next/link";

import { Button } from "@/ui/components";

import * as styles from "./page.css";

export default function IndexPage() {
  return (
    <>
      <h1 className={styles.pageTitle}>Hello</h1>
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button variant="primary" size="sm">
          Small Primary
        </Button>
        <Button variant="primary" size="md">
          Medium Primary
        </Button>
        <Button variant="primary" size="lg">
          Large Primary
        </Button>

        <Button variant="secondary" size="sm">
          Small Secondary
        </Button>
        <Button variant="secondary" size="md">
          Medium Secondary
        </Button>
        <Button variant="secondary" size="lg">
          Large Secondary
        </Button>
      </div>

      <Link
        href="/home"
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          right: "16px",
        }}
      >
        <Button variant="primary" size="lg" fullWidth>
          Get started
        </Button>
      </Link>
    </>
  );
}
