"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fuzzyFilter } from "@/lib/tableUtils";
import { cn } from "@/lib/utils";
import { CustomerData } from "@/types";
import { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import PaginationFooter from "./PaginationFooter";

interface DataTableProps {
  columns: ColumnDef<CustomerData, unknown>[];
  data: CustomerData[];
}

export default function CustomerDataTable({ columns, data }: DataTableProps) {
  const [customerData, setCustomerData] = useState<CustomerData[]>(data);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [pagination, setPagination] = useState<{
    pageIndex: number;
    pageSize: number;
  }>({
    pageIndex: 0,
    pageSize: 5,
  });

  const deleteRow = (rowIndex: number) => {
    setCustomerData((prev) => {
      const nextData = prev.filter((_, index) => index !== rowIndex);

      setPagination((current) => {
        const totalPages = Math.max(
          1,
          Math.ceil(nextData.length / current.pageSize || 1),
        );
        const nextPageIndex = Math.min(current.pageIndex, totalPages - 1);
        return {
          ...current,
          pageIndex: nextPageIndex,
        };
      });
      return nextData;
    });

    setRowSelection({});
  };

  const table = useReactTable({
    columns,
    data: customerData,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      globalFilter,
      pagination,
      rowSelection,
    },
    meta: {
      deleteRow,
    },
  });

  // Debounce: wait 300ms after user stops typing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGlobalFilter(searchInput);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchInput]);

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
      <HeaderSection
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={cn(
                      "bg-[#F9FAFB] px-6 py-3 text-text-secondary",
                      header.id === "dealId" ? "w-[200px]" : "",
                      header.id === "customer" ? "w-[250px]" : "",
                      header.id === "actions" ? "w-[100px]" : "",
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="**:data-[slot=table-cell]:px-6 **:data-[slot=table-cell]:py-4"
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={cn(
                          "max-h-18 p-0 text-text",
                          cell.getContext().column.id === "dealId" &&
                            "font-medium",
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <PaginationFooter
        totalItems={customerData.length}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
}
