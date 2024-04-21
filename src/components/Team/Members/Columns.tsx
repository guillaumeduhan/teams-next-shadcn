"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name")
      return <div className="flex items-center justify-between gap-2">
        <div className="flex items-center justify-center bg-black text-white font-bold capitalize w-8 h-8 rounded-full">{name[0]}</div>
        <span>{name}</span>
      </div>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role = row.getValue("role")
      return <span className="capitalize bg-black text-white rounded-full px-2 py-[2px] font-bold text-xs">{role}</span>
    }
  },
  {
    accessorKey: "",
    header: "Actions",
  },
]
