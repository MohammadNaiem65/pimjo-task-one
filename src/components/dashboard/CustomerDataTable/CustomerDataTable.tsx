"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
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
import { cn } from "@/lib/utils";
import { useState } from "react";
import HeaderSection from "./HeaderSection";
import PaginationFooter from "./PaginationFooter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function CustomerDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [customerData, setCustomerData] = useState<TData[]>(data);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
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
    data: customerData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      pagination,
      rowSelection,
    },
    meta: {
      deleteRow,
    },
  });

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
      <HeaderSection />

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
