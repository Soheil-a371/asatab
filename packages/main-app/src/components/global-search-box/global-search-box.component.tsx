"use client";

import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import { FiltersContext } from "@/app/search/provider/filters/filters.provider";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactNode {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FiltersContext);

  const [query, setQuery] = useState<string>(filters.query || "");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        dispatchFilters({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${encodeURIComponent(query)}` : "/search";
      router.push(href);
    }
  };

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        name="query"
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button type="button">
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </form>
  );
}
