"use client";

import { ReactElement } from "react";

import Image from "next/image";

import errorImage from "@/assets/illustrations/error.svg";

import styles from "@/app/error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps): ReactElement {
  return (
    <div className={styles["error"]}>
      <div className={styles.writing}>
        <div className={styles["status-code"]}>!بدبخت شدیم</div>
        <h1>یک خطای غیر منتظره رخ داده است.</h1>
        <p>با عرض پوزش،لطفا با تیم پشتیبانی تماس بگیرید</p>
      </div>
      <div className={styles.visuals}>
        <Image src={errorImage} alt="ارور" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>لاگ خطا</summary>
          <pre dir="ltr">{error.stack}</pre>
        </details>
      </div>
    </div>
  );
}
