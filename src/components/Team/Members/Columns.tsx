"use client"

import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import Options from "./Options"

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
      const name: string = row.getValue("name")
      const email: string = row.original.email;
      return <div className="flex items-center gap-2">
        <div className="flex items-center justify-center bg-black text-white font-bold capitalize w-8 h-8 rounded-full">{name[0]}</div>
        <div className="grid">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-neutral-500">{email}</span>
        </div>
      </div>
    }
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const role: string = row.getValue("role")
      return <span className="text-sm text-neutral-500 capitalize">{role}</span>
    }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status")
      switch (status) {
        case "pending":
          return <Badge className="hover:bg-transparent capitalize bg-orange-50 text-orange-900">Pending</Badge>
        case "active":
          return <Badge className="hover:bg-transparent capitalize bg-green-50 text-green-900">Active</Badge>
        case "removed":
          return <Badge className="hover:bg-transparent capitalize bg-red-50 text-red-900">Removed</Badge>
        default:
          return <Badge className="capitalize bg-neutral-100 text-neutral-600">Unknown</Badge>
      }
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return <div className="flex justify-end">
        <Options {...{ user }} />
      </div>
    }
  },
]
