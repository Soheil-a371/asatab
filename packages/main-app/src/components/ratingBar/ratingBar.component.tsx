import { ReactNode } from "react";

import styles from "./ratingBar.module.css";

const MAX_RATING = 5;

type Props = {
  rating: number;
  title?: string;
};

export default function RatingBar({ rating, title }: Props): ReactNode {
  const safeRating = Math.min(MAX_RATING, Math.max(0, rating));
  const percent = (safeRating / MAX_RATING) * 100;

  const colorClass =
    safeRating < 2.5
      ? styles.fillLow
      : safeRating < 3.5
        ? styles.fillMid
        : styles.fillHigh;

  return (
    <div className={styles.container}>
      {title && <span className={styles.title}>{title}</span>}

      <div
        className={styles.wrapper}
        role="progressbar"
        aria-valuenow={safeRating}
        aria-valuemin={0}
        aria-valuemax={MAX_RATING}
      >
        <div
          className={`${styles.fill} ${colorClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
