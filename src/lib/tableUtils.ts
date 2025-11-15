import { CustomerData } from "@/types";
import { rankItem } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/react-table";

export const fuzzyFilter: FilterFn<CustomerData> = (
  row,
  columnId,
  value,
  addMeta,
) => {
  // Get the search value from all searchable columns
  const searchableValue = [
    row.original.dealId,
    row.original.customer,
    row.original.email,
    row.original.product,
  ].join(" ");

  const itemRank = rankItem(searchableValue, value);

  addMeta(itemRank);

  return itemRank.passed;
};
