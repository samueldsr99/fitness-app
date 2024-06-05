import { sdk } from "@/lib/hygraph-client";

import { Greeting } from "./_components/Greeting";
import { ProgramCard } from "./_components/program-card";

import * as styles from "./page.css";

export default async function HomePage() {
  const popularPrograms = await sdk.PopularPrograms();

  return (
    <>
      <Greeting />

      <section id="programs" className={styles.popularPrograms}>
        <h3>Popular Programs</h3>
        <div className={styles.popularProgramsSlides}>
          {popularPrograms.data.programs.map((program) => (
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.name}
              difficulty={program.difficulty}
              previewImage={program.previewImage.url}
            />
          ))}
        </div>
      </section>
    </>
  );
}
