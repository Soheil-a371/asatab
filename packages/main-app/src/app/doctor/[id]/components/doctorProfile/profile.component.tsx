import { ReactNode } from "react";
import Image from "next/image";

import Specialties from "@/components/specialties/specialties.component";
import ReviewsRatingComponent from "@/components/reviews-rating/reviewsRating.component";

import styles from "./profile.module.css";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ProfileComponent({ doctor }: Props): ReactNode {
  return (
    <>
      <div className={styles.profile}>
        <Image
          src={`https://cdn.paziresh24.com${doctor.image}`}
          alt="عکس پروفایل دکتر"
          width={100}
          height={100}
          className={styles.avatar}
        />

        <div className={styles.info}>
          <h2 className={styles.name}>{doctor.name}</h2>
          <Specialties value={doctor.brief} />
        </div>
      </div>

      <ReviewsRatingComponent doctor={doctor} />
    </>
  );
}
