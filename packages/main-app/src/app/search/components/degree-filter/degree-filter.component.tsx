"use client";

import { ReactNode, useContext } from "react";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

import { FiltersContext } from "../../provider/filters/filters.provider";

export default function DegreeFilterComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "degree", value });
  };

  return (
    <RadioFilterComponent
      title="درجه علمی"
      name="degree"
      options={[
        { value: "fellowship", label: "فلوشیپ" },
        { value: "subspecialty", label: "فوق تخصص" },
        { value: "specialty_phd", label: "دکترای تخصصی" },
        { value: "specialist", label: "متخصص" },
        { value: "phd", label: "دکتری" },
        { value: "master", label: "کارشناس ارشد" },
        { value: "bachelor", label: "کارشناس" },
      ]}
      value={filters.degree}
      onChange={changeHandler}
    />
  );
}
