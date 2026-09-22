"use client";

import { ReactNode } from "react";

import { DoctorModel } from "@/models/doctor.model";

import CardComponent from "../card/card.component";
import RatingBar from "../ratingBar/ratingBar.component";
import ReviewsRatingComponent from "../reviews-rating/reviewsRating.component";
import SortComponent from "@/app/search/components/sort/sort.component";

import styles from "./reviews.module.css";
import CommentSearchComponent from "../searchs/commentSearch/commentSearch.component";

type Props = {
  doctor: DoctorModel;
  comments?: string[];
};

const rating = [
  { rating: 4.8, title: "برخورد مناسب" },
  { rating: 5, title: "توضیح در هنگام ویزیت" },
  { rating: 2, title: "رسیدگی پزشک و مشخص بودن مسیر درمان" },
  { rating: 3, title: "فرآیند پذیرش و رفتار منشی" },
];

export default function ReviewsComponent({
  doctor,
  comments,
}: Props): ReactNode {
  return (
    <div className={styles.wrapper}>
      <CardComponent>
        <div className={styles.rating}>
          <h3 className={styles.title}>نظرات در مورد {doctor.name}</h3>
          <ReviewsRatingComponent doctor={doctor} />

          <div className={styles["rating-summary"]}>
            {rating &&
              rating.map((item) => (
                <RatingBar
                  key={item.title}
                  rating={item.rating}
                  title={item.title}
                />
              ))}
          </div>
        </div>
        <div className={styles.filters}>
          <SortComponent />
          <SortComponent />
        </div>
          <CommentSearchComponent/>
      </CardComponent>
    </div>
  );
}
