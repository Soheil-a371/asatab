import { ReactNode } from "react";

import { DoctorModel } from "@/models/doctor.model";

import styles from "./reviewsRating.module.css";

type Props = {
  doctor: DoctorModel;
};

export default function ReviewsRatingComponent({ doctor }: Props):ReactNode {
  const votes = doctor.totalVotes.toLocaleString("fa-IR");
  return (
    <div className={styles.rating}>
      <div className={styles["rating-box"]}>
        <span className={styles.score}>{doctor.averageRating}</span>
        <span className={styles.outOf}> از ۵</span>
      </div>

      <span className={styles.satisfaction}>رضایت ({votes} نظر)</span>
    </div>
  );
}
