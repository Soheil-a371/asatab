import { ReactNode } from "react";

import CardComponent from "@/components/card/card.component";
import { ButtonLinkComponent } from "@/components/buttons/button/button.component";

import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

import { MingcuteCalendarMonthLine } from "@/icons/MingcuteCalendarMonthLine";
import MingcutePhoneLine from "@/icons/MingcutePhoneLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./contact.module.css";

type Props = {
  doctor: DetailedDoctorModel;
};

const doctorPhone = '09124567481'

const contactActions = (doctor: DetailedDoctorModel) => [
  {
    label: "برنامه کاری پزشک",
    href: `/doctors/${doctor.id}/schedule`,
    icon: <MingcuteCalendarMonthLine />,
  },
  {
    label: doctor.phone ?? doctorPhone,
    href: `tel:${doctorPhone}`,
    icon: <MingcutePhoneLine />,
  },
  {
    label: "مشاهده در نقشه و مسیریابی",
    href: `https://neshan.org/maps/search/${encodeURIComponent(doctor.address)}`,
    icon: <MingcuteLocationLine />,
  },
];

export default function ContactComponent({ doctor }: Props): ReactNode {
  const actions = contactActions(doctor);

  return (
    <CardComponent className={styles.contact} title="آدرس و تلفن تماس">
      <div className={styles.info}>
        <div className={styles.title}>مطب {doctor.name}</div>
        <div className={styles.address}>{doctor.address}</div>
      </div>

      <div className={styles.actions}>
        {actions.map((action) => (
          <ButtonLinkComponent
            key={action.href}
            variant="primary"
            shape="outlined"
            href={action.href}
          >
            {action.icon}
            {action.label}
          </ButtonLinkComponent>
        ))}
      </div>
    </CardComponent>
  );
}