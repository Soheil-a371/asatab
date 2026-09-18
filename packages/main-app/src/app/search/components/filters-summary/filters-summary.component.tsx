"use client";
import { ReactNode, useContext, useMemo } from "react";
import { FiltersContext } from "../../provider/filters/filters.provider";
import { filtersTypes } from "@/types/filters.type";
import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const activeFilters = [
    { key: "query", value: filters.query },
    { key: "expertise", value: filters.expertise },
    { key: "gender", value: filters.gender },
    { key: "degree", value: filters.degree },
  ].filter(({ value }) => value);

  const removeAllButtonClickHandler = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof filtersTypes): void => {
    dispatchFilters({ type: "removed_filter", key });
  };

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <button type="button" onClick={removeAllButtonClickHandler}>
          حذف همه
        </button>

        <ul className={styles.filters}>
          {activeFilters.map(({ key, value }) => (
            <li
              key={key}
              onClick={() => filterClickHandler(key as keyof filtersTypes)}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </CardComponent>
  );
}
