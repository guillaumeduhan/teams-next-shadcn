'use client';

import { useState } from "react";
import { DataTable } from "../Datatable";
import { columns } from "./Members/Columns";
import New from "./New";

export default function Team() {
  const [members, setMembers] = useState<any>([
    {
      name: "Aurélia Duhan",
      email: "aurelia@gmail.com",
      role: "admin",
      status: "active"
    },
    {
      name: "Guillaume Duhan",
      email: "codewithguillaume@gmail.com",
      role: "manager",
      status: "pending"
    },
    {
      name: "Kingsley Advani",
      email: "kingsley@gmail.com",
      role: "member",
      status: "removed"
    }
  ])

  return <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
    <header className="flex items-start justify-between">
      <div className="grid gap-1">
        <h1 className="text-2xl">Team</h1>
        <p>Invite new members in your team.</p>
      </div>
      <New />
    </header>
    <main>
      <DataTable columns={columns} data={members} />
    </main>
  </div>;
}