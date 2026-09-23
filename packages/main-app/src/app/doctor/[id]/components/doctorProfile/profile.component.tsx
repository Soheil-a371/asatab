import { ReactNode } from "react";
import Image from "next/image";

import Specialties from "@/components/specialties/specialties.component";
import ReviewsRatingComponent from "@/components/reviews-rating/reviewsRating.component";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";
import CardComponent from "@/components/card/card.component";
import IconButton from "@/components/buttons/iconButton/iconButton.component";
import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";

import styles from "./profile.module.css";
import MingcuteEye2Line from "@/icons/MingcuteEye2Line";
import MingcuteShare2Line from "@/icons/MingcuteShare2Line";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ProfileComponent({ doctor }: Props): ReactNode {
  return (
    <div className={styles.profile}>
      <CardComponent>
        <div className={styles["card-header"]}>
          <IconButton>
            20k
            <MingcuteEye2Line />
          </IconButton>

          <div className={styles.actions}>
            <IconButton>
              <MingcuteBookmarkLine />
              ذخیره
            </IconButton>
            <IconButton>
                  <MingcuteShare2Line/>
               اشتراک‌گذاری
            </IconButton>
          </div>
        </div>
        <div className={styles.image}>
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
      </CardComponent>
    </div>
  );
}
