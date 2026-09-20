import { ReactNode } from "react";

import { notFound } from "next/navigation";
import Image from "next/image";

import { doctors } from "@/mocks/doctors";
import CardComponent from "@/components/card/card.component";

import IconButton from "@/components/buttons/iconButton/iconButton.component";

import styles from "./page.module.css";
import VisitButton from "@/components/buttons/visitButton/visitButton.component";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles["doctor-panel"]}>
        <CardComponent>
          <div className={styles["card-header"]}>
            <IconButton>20k</IconButton>

            <div className={styles.actions}>
              <IconButton>ذخیره</IconButton>
              <IconButton>اشتراک‌گذاری</IconButton>
            </div>
          </div>

          <div className={styles.profile}>
            <Image
              src={`https://cdn.paziresh24.com${doctor.image}`}
              alt={doctor.name}
              width={120}
              height={120}
              className={styles.avatar}
            />

            <div className={styles.info}>
              <h2 className={styles.name}>{doctor.name}</h2>
              <ul className={styles.specialties}>
                {doctor.brief
                  .split(/[،_\.]/)
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((s, index) => (
                    <li key={`${s}-${index}`} className={styles.chip}>
                      {s}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className={styles.rating}>
            <div className={styles["rating-box"]}>
              <span className={styles.score}>{doctor.averageRating}</span>
              <span className={styles.outOf}> از 5</span>
            </div>

            <span className={styles.satisfaction}>
              رضایت ({doctor.totalVotes.toLocaleString("fa-IR")} نظر)
            </span>
          </div>
        </CardComponent>
      </div>

      <div className={styles["visit-panel"]}>
        <div className={styles["visit-online"]}>
          <CardComponent>
            <div className={styles["visit-header"]}>
              <IconButton>آنلاین ویزیت شوید</IconButton>
              <span>600,000 تومان</span>
            </div>

            <div className={styles["services-box"]}>
              <div className={styles["services-base"]}>
                <span>ویزیت آنلاین در:</span>
                <span>پیام رسان استاطب</span>
              </div>

              <div className={styles["visit-status"]}>
                {doctor.firstAvailableAppointment === ""
                  ? "امکان برقراری تماس با این پزشک وجود ندارد."
                  : "امکان برقراری تماس با این پزشک وجود دارد."}
              </div>

              <span>تا ۳ روز می‌توانید هر سوالی دارید از پزشک بپرسید</span>
            </div>

            <VisitButton>شروع ویزیت آنلاین حدود ساعت 21:45 شب امشب</VisitButton>
          </CardComponent>
        </div>

        <div className={styles.person}>
          <CardComponent >
            <div className={styles["person-header"]}>
              <IconButton>نوبت اینترنتی و مراجعه حضوری</IconButton>
            </div>

            <div className={styles.details}>
              امکان دریافت زودترین نوبت
            </div>
              <VisitButton>دریافت نوبت</VisitButton>
          </CardComponent>
        </div>

        <div className={styles.address}>
          آدرس و تلفن تماس
          <CardComponent>
            <div className={styles["address-box"]}>
              <p className={styles.title}>مطب {doctor.name}</p>
              <span>{doctor.address}</span>
              <div className={styles.contact}>
                <VisitButton variant="outline">برنامه کاری </VisitButton>
                <VisitButton variant="outline">0912111111</VisitButton>
                <VisitButton variant="outline">مشاهده در نقشه یابی</VisitButton>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}
