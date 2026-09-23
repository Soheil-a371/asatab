import CardComponent from "@/components/card/card.component";
import styles from "./visitBar.module.css";
import IconButton from "@/components/buttons/iconButton/iconButton.component";
import VisitButton from "@/components/buttons/visitButton/visitButton.component";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";
import { ReactNode } from "react";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function VisitBarComponent({ doctor }: Props): ReactNode {
  const hasAvailability = Boolean(doctor.firstAvailableAppointment);
  return (
    <div className={styles["visit-online"]}>
      <CardComponent>
        <header>
          <div className={styles.indicator}></div>
          <div className={styles.title}>همین الان نوبت دریافت کنید</div>
          <div className={styles.price}>
            {doctor.price.toLocaleString()} تومان
          </div>
        </header>

        <div className={styles["services-box"]}>
          <div className={styles["services-base"]}>
            <span>ویزیت آنلاین در:</span>
            <span>پیام رسان آساطب</span>
          </div>

          <div className={styles["visit-status"]}>
            {hasAvailability
              ? "امکان برقراری تماس با این پزشک وجود دارد."
              : "امکان برقراری تماس با این پزشک وجود ندارد."}
          </div>

          <span>تا ۳ روز می‌توانید هر سوالی دارید از پزشک بپرسید</span>
        </div>

        <VisitButton href={`/doctors/${doctor.id}/online-visit`}>
          شروع ویزیت آنلاین حدود ساعت ۲۱:۴۵ شب امشب
        </VisitButton>
      </CardComponent>
    </div>
  );
}
