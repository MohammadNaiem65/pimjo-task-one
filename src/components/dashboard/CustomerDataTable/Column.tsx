"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { CustomerData } from "@/types";
import type { ColumnDef, RowData } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { IoIosWarning } from "react-icons/io";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    deleteRow: (rowIndex: number, row?: TData) => void;
  }
}

export const columns: ColumnDef<CustomerData>[] = [
  {
    accessorKey: "dealId",
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();

      return (
        <div className="flex items-center gap-3">
          <Checkbox
            checked={isAllSelected}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all rows"
          />
          <span>Deal ID</span>
        </div>
      );
    },
    cell: ({ row, getValue }) => {
      const dealId = getValue<string>();
      return (
        <div className="flex items-center gap-3">
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label={`Select deal ${dealId}`}
          />
          <span className="font-medium text-text">{dealId}</span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    id: "customer",
    header: "Customer",
    accessorFn: (row) => ({
      customer: row.customer,
      email: row.email,
      avatar: row.avatar,
    }),
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-start gap-x-3">
          <Image
            src={row.original.avatar}
            alt={row.original.customer}
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
          <div>
            <p className="text-sm leading-5 font-medium text-text">
              {row.original.customer}
            </p>
            <p className="mt-0.5 text-sm leading-5 text-text-secondary">
              {row.original.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "product",
    header: "Product/Service",
  },
  {
    accessorKey: "dealValue",
    header: "Deal Value",
  },
  {
    accessorKey: "closeDate",
    header: "Close Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-xs font-medium",
            status === "Complete"
              ? "bg-[#ECFDF3] text-[#039855]"
              : "bg-[#FFFAEB] text-[#DC6803]",
          )}
        >
          {status}
        </span>
      );
    },
  },
  // Actions column
  {
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      const handleDelete = () => {
        table.options.meta?.deleteRow(row.index, row.original);
      };

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="flex w-full cursor-pointer items-center justify-center text-text hover:bg-transparent hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>

          <DialogContent className="flex w-138 flex-col items-center justify-center gap-y-6 rounded-[2.125rem] border-0 bg-gray-100 p-10 text-center sm:p-10">
            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-linear-to-t from-[rgba(239,68,68,0)] to-[#ef44445e] text-red-500">
              <span className="flex size-11 items-center justify-center rounded-full bg-white">
                <IoIosWarning className="size-6" />
              </span>
            </div>
            <DialogHeader className="gap-3 text-center">
              <DialogTitle className="text-center text-2xl leading-8 font-medium text-text">
                Remove User Confirmation
              </DialogTitle>
              <DialogDescription className="text-center text-sm leading-5 text-text-secondary">
                Are you sure you want to remove this user? This action cannot be
                undone and the user&apos;s access will be permanently revoked.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="mt-1 flex h-12 w-full justify-center gap-3 sm:justify-center">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="h-12 w-fit cursor-pointer rounded-xl border-[#E4E7EC] bg-white px-9.5 py-3 text-title"
                >
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  onClick={handleDelete}
                  className="h-12 w-fit cursor-pointer rounded-xl border-0 bg-red-500 px-9.5 py-3 text-white hover:bg-red-700"
                >
                  Delete user
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
