import { sdk } from "@/lib/hygraph-client";

import { ProgramCard } from "../home/_components/program-card";

import * as styles from "./page.css";

export default async function ProgramsPage() {
  const { data } = await sdk.AllPrograms();

  const allPrograms = data.programs;

  return (
    <>
      <h1>Programs</h1>
      <div className={styles.programs}>
        {allPrograms.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.name}
            difficulty={program.difficulty}
            id={program.id}
            previewImage={program.previewImage.url}
          />
        ))}
      </div>
    </>
  );
}
