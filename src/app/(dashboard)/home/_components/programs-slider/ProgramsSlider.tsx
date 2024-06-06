"use client";

import Slider from "react-slick";

import { PopularProgramsQuery } from "@/generated/graphql";
import { ChevronLeftIcon, ChevronRightIcon } from "@/ui/icons";
import { clsx } from "@/ui/utils";

import { ProgramCard } from "../program-card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./ProgramsSlider.css";

interface ProgramsSliderProps {
  programs: NonNullable<PopularProgramsQuery["programs"]>;
}

const PrevArrow = ({ className, onClick }: any) => {
  return (
    <button onClick={onClick} className={clsx(styles.prevArrow, className)}>
      <ChevronLeftIcon className={className} onClick={onClick} />
    </button>
  );
};

const NextArrow = ({ className, onClick }: any) => {
  return (
    <button onClick={onClick} className={clsx(styles.nextArrow, className)}>
      <ChevronRightIcon className={className} onClick={onClick} />
    </button>
  );
};

export const ProgramsSlider = ({ programs }: ProgramsSliderProps) => {
  return (
    <div className={styles.root}>
      <Slider
        autoplay
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        className={styles.slider}
        draggable={false}
      >
        {programs.map((program) => (
          <div key={program.id} className={styles.sliderItem}>
            <ProgramCard
              key={program.id}
              id={program.id}
              title={program.name}
              difficulty={program.difficulty}
              previewImage={program.previewImage.url}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
