"use client";
import React, { useEffect, useState } from "react";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useNavigation } from "@/lib/context";
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
import { getClients, deleteClient } from "@/lib/functions";
export type Row = {
  id: number;
  nom: string;
  email: string;
  telephone: string;
  nombre_commandes: number;
  montant_a_payer: number;
  date_inscription: string;
  status: "Actif" | "Inactif" | "Banni";
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
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom du Client
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5">{row.getValue("nom")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Emailj
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5">{row.getValue("email")}</div>
    ),
  },

  {
    accessorKey: "telephone",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Télételephone
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5 flex space-x-1">
        <span>{row.getValue("telephone")}</span>{" "}
        <Files color="#8B8D97" size={16} className="cursor-pointer" />
      </div>
    ),
  },
  {
    accessorKey: "nombre_commandes",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre de commande
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5 flex space-x-1">
        <span>{row.getValue("nombre_commandes")}</span>{" "}
        <Files color="#8B8D97" size={16} className="cursor-pointer" />
      </div>
    ),
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("montant_a_payer"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XOF",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "date_inscription",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase translate-x-5 flex space-x-1">
        <span>{row.getValue("date_inscription")}</span>{" "}
        <Files color="#8B8D97" size={16} className="cursor-pointer" />
      </div>
    ),
  },
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
      const { navigate } = useNavigation();

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
              onClick={() => navigator.clipboard.writeText(Row.telephone)}
            >
              Copier le Télételephone
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                navigate("specificUser");
              }}
            >
              Voir les détails du client
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

/**
 * {
  nom: string;
  email: string;
  telephone: string;
  orderAmount: number;
  amount: number;
  date: string;
  status: "Actif" | "Inactif" | "Banni";
};
 */

export function CustomersTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getClients()
      .then((res) => {
        setData(res.clients);
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
          <h2 className="text-xl font-semibold">Clients</h2>

          <div className="flex space-x-3 px-3">
            <InputComponent
              type={"text"}
              required={false}
              icon={<Search size={22} />}
              placeholder={"Rechercher"}
              className={"w-[165px]"}
            />
            <TableButton title="Filtrer" icon={<Filter />} />
            <TableButton title="Filtrer" icon={<CalendarDays />} />
            <TableButton title="Partager" icon={<Share2 />} />
            <Combobox
              handleChange={(value: string) => {
                if (value == "Supprimer") {
                  table.getRowModel().rows.map((row) => {
                    deleteClient(row.original.id);
                    window.location.reload();
                  });
                }
              }}
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
