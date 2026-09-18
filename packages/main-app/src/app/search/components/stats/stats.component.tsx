"use client";

import { ReactNode, useContext } from "react";

import { DoctorsContext } from "../../provider/doctors/doctors.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactNode {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.stats}>
      {filteredDoctors.length.toLocaleString()} نتیجه
    </div>
  );
}
