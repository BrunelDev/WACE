"use client";
import React, { useEffect, useState } from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useNavigation } from "@/lib/context";
import { AddButton } from "./addButton";
import { Search } from "lucide-react";
import { Combobox } from "@/components/combobox";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Status } from "@/components/status";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, Filter, Share2, CalendarDays, Files } from "lucide-react";
import { InputComponent } from "@/components/input";
import { getOrders } from "@/lib/functions";
export type Row = {
  id: number;
  client: number;
  date_commande: string;
  type_commande: string;
  status: "Livré" | "Suspendu" | "En cours";
  montant: number;
};

export const columns: ColumnDef<Row>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clients
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5">{row.getValue("client")}</div>
    ),
  },
  {
    accessorKey: "date_commande",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date de la commande
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5">
        {row.getValue("date_commande")}
      </div>
    ),
  },

  {
    accessorKey: "type_commande",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Type de commande
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5 flex space-x-1">
        <span>{row.getValue("type_commande")}</span>{" "}
      </div>
    ),
  },
  {
    accessorKey: "montant",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("montant"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XOF",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  /*{ {
    accessorKey: "quantite",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantité
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5 flex space-x-1">
        <span>{row.getValue("quantite")}</span>{" "}
      </div>
    ),
  },}*/

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <Status status={row.getValue("status")} />,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const Row = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(Row.phone)}
            >
              Copier le Téléphone
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Voir les clients</DropdownMenuItem>
            <DropdownMenuItem>Voir les détails de la ligne</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function OrdersTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getOrders()
      .then((res) => {
        console.log("--------------------------------------", res);
        setData(res.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const { navigate } = useNavigation();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full bg-white rounded-md">
      <div className="rounded-md">
        <div className="flex justify-between  py-8 pl-6 ">
          <h2 className="text-xl font-semibold">Inventaire</h2>

          <div className="flex space-x-3 px-3">
            <InputComponent
              icon={<Search size={22} />}
              placeholder={"Rechercher"}
              className={"w-[165px]"}
            />
            <TableButton title="Filtrer" icon={<Filter />} />
            <TableButton title="Filtrer" icon={<CalendarDays />} />
            <TableButton title="Partager" icon={<Share2 />} />
            <Combobox
              title={"Actions"}
              items={[
                { label: "Supprimer", value: "Supprimer" },
                { label: "Masquer", value: "Masquer" },
              ]}
              bgColor={"bg-white"}
              textColor={"text-black"}
            />
          </div>
        </div>
        <Table>
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-t border-b">
                {/****************************************** */}

                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="border-none">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-none"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground ml-5">
          {table.getFilteredSelectedRowModel().rows.length} sur{" "}
          {table.getFilteredRowModel().rows.length} ligne(s) sélectionnées.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Précédent
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}

export function TableButton({
  icon,
  title,
}: {
  icon: React.ReactElement;
  title: string;
}) {
  return (
    <div className="py-2 px-3 rounded-md border bg-transparent flex space-x-3">
      {icon}
      {title}
    </div>
  );
}
