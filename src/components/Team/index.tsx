'use client';

import { useState } from "react";
import { DataTable } from "../Datatable";
import { columns } from "./Members/Columns";
import NewMember from "./Members/New";

export default function Team() {
  const [members, setMembers] = useState<any>([
    {
      name: "Guillaume Duhan",
      email: "codewithguillaume@gmail.com",
      role: "Admin",
    }
  ])

  return <div className="grid gap-6 border rounded-lg shadow px-5 py-4">
    <header className="flex items-start justify-between">
      <div className="grid gap-1">
        <h1 className="text-2xl">Team</h1>
        <p>Invite new members in your team.</p>
      </div>
      <NewMember />
    </header>
    <main>
      <DataTable columns={columns} data={members} />
    </main>
  </div>;
}