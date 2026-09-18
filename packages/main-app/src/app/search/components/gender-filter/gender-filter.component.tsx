"use client";

import { ReactNode, useContext } from "react";

import { FiltersContext } from "../../provider/filters/filters.provider";

import RadioFilterComponent from "../radio-filter/radio-filter.component";

export default function GenderFilterComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string) => {
    dispatchFilters({ type: "updated_filter", key: "gender", value });
  };

  return (
    <RadioFilterComponent
      title={"جنسیت پزشک"}
      name={"gender"}
      options={[
        { value: "آقا", label: "آقا" },
        { value: "خانم", label: "خانم" },
      ]}
      value={filters.gender}
      onChange={changeHandler}
    />
  );
}
