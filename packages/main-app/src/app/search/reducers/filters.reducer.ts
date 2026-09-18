import { filtersTypes } from "@/types/filters.type";

export type FilterAction =
  | {
      type: "updated_filter";
      key: keyof filtersTypes;
      value: string;
    }
  | {
      type: "removed_filter";
      key: keyof filtersTypes;
    }
  | {
      type: "removed_all";
    };

export default function filtersReducer(
  filters: filtersTypes,
  action: FilterAction,
) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_filter": {
      const cloneFilters = { ...filters };
      delete cloneFilters[action.key];
      return cloneFilters;
    }
    case "removed_all": {
      return {};
    }
  }
}
