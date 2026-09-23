import { ReactNode } from "react";

import { notFound } from "next/navigation";

import { doctors } from "@/mocks/doctors";
import CardComponent from "@/components/card/card.component";
import IconButton from "@/components/buttons/iconButton/iconButton.component";
import VisitButton from "@/components/buttons/visitButton/visitButton.component";
import ExpandableText from "@/components/expandable-text/expandableText.component";

import styles from "./page.module.css";

import ReviewsComponent from "@/components/reviews/reviews.component";
import ProfileComponent from "./components/doctorProfile/profile.component";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }
  const hasAvailability = Boolean(doctor.firstAvailableAppointment);

  const contactActions = [
    {
      label: "برنامه کاری",
      href: `/doctors/${doctor.id}/schedule`,
    },
    {
      label: "۰۹۱۲۱۱۱۱۱۱",
      href: "tel:0912111111",
    },
    {
      label: "مشاهده در نشان",
      href: `https://neshan.org/maps/search/${encodeURIComponent(doctor.address)}`,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles["doctor-panel"]}>
        <div className={styles.image}>
          <CardComponent>
            <div className={styles["card-header"]}>
              <IconButton>20k</IconButton>

              <div className={styles.actions}>
                <IconButton>ذخیره</IconButton>
                <IconButton>اشتراک‌گذاری</IconButton>
              </div>
            </div>

            <ProfileComponent doctor={doctor} />
          </CardComponent>
        </div>

        <div className={styles.about}>
          <h3 className={styles.title}>درباره من</h3>
          <CardComponent>
            <ExpandableText>{doctor.about}</ExpandableText>
          </CardComponent>
        </div>

        <ReviewsComponent doctor={doctor} />
      </div>

      <div className={styles["visit-panel"]}>
        <div className={styles["visit-online"]}>
          <CardComponent>
            <div className={styles["visit-header"]}>
              <IconButton>آنلاین ویزیت شوید</IconButton>
              <span>۶۰۰,۰۰۰ تومان</span>
            </div>

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

        <div className={styles.address}>
          <h3 className={styles.title}>آدرس و تلفن تماس</h3>
          <CardComponent>
            <div className={styles["address-box"]}>
              <p className={styles.title}>مطب {doctor.name}</p>
              <span>{doctor.address}</span>

              <div className={styles.contact}>
                {contactActions.map((action) => (
                  <VisitButton
                    key={action.label}
                    variant="outline"
                    href={action.href}
                  >
                    {action.label}
                  </VisitButton>
                ))}
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}
