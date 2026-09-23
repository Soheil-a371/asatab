import { ReactNode } from "react";

import { notFound } from "next/navigation";

import CardComponent from "@/components/card/card.component";
import IconButton from "@/components/buttons/iconButton/iconButton.component";
import VisitButton from "@/components/buttons/visitButton/visitButton.component";
import ExpandableText from "@/components/expandable-text/expandableText.component";

import ReviewsComponent from "@/components/reviews/reviews.component";
import ProfileComponent from "./components/doctorProfile/profile.component";
import ContactComponent from "./components/contact/contact.component";
import VisitBarComponent from "./visitBar/visitBar.component";
import { getDoctor } from "@/utils/getDoctor";

import styles from "./page.module.css";


type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const doctor = await getDoctor(id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles["doctor-panel"]}>
        <ProfileComponent doctor={doctor} />

        <div className={styles.about}>
          <h3 className={styles.title}>درباره من</h3>
          <CardComponent>
            <ExpandableText>{doctor.about}</ExpandableText>
          </CardComponent>
        </div>

        <ReviewsComponent doctor={doctor} />
      </div>

      <div className={styles["visit-panel"]}>
        <VisitBarComponent doctor={doctor} />
        <div className={styles.person}>
          <CardComponent>
            <div className={styles["person-header"]}>
              <IconButton>نوبت اینترنتی و مراجعه حضوری</IconButton>
            </div>

            <div className={styles.details}>امکان دریافت زودترین نوبت</div>
            <VisitButton href={`/doctors/${doctor.id}/booking`}>
              دریافت نوبت
            </VisitButton>
          </CardComponent>
        </div>

        <ContactComponent doctor={doctor} />
      </div>
    </div>
  );
}
