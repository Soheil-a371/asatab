import { ReactNode } from "react";

import { DoctorModel } from "@/models/doctor.model";

import styles from "./reviewsRating.module.css";

type Props = {
  doctor: DoctorModel;
};

export default function ReviewsRatingComponent({ doctor }: Props): ReactNode {
  return (
    <div className={styles.rating}>
      <span className={styles["average-rating"]}>
        {Math.floor(doctor.averageRating * 10) / 10} از 5
      </span>
      <span className={styles["total-votes"]}>
        ({doctor.totalVotes.toLocaleString()} نظر)
      </span>
    </div>
  );
}
