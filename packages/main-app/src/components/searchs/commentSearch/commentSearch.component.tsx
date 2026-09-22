"use client";

import { ReactNode } from "react";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";

import styles from "./commentSearch.module.css";

export default function CommentSearchComponent(): ReactNode {
  return (
    <form className={styles["comment-search-component"]}>
      
      <input
        name=""
        type="text"
        placeholder="جستجو در نظرات بیماران"
        onChange={() => ""}
      />

      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
    </form>
  );
}
