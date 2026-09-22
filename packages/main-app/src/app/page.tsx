import { ReactNode } from "react";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import GlobalSearchBoxComponent from "@/components/searchs/global-search-box/global-search-box.component";

import styles from "./page.module.css";
import Link from "next/link";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>
            <Link href={"./search/?query=ارتوپد"}>ارتوپد</Link>
          </li>
          <li>
            <Link href={"./search/?query=قلب و عروق"}>قلب و عروق</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
