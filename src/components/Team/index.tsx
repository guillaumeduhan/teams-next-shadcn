'use client';

import { useHelpers } from "@/hooks/useHelpers";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { DataTable } from "../Datatable";
import LoadingTeam from "../Loading/Team";
import { columns } from "./Members/Columns";
import New from "./New";

export default function Team() {
  const [team, setTeam] = useState({
    id: ''
  });
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
  ]);
  const { loading, setLoading } = useHelpers();

  const fetchTeam = async () => {
    try {
      setLoading(true);
      const { data, error }: any = await supabase
        .from("teams")
        .select("*, team_members(*)")
        .eq("id", "");

      if (data) {
        const { team_members, ...teamData } = data;
        setTeam(teamData);
        setMembers(team_members);
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeam();
    const subcription = supabase
      .channel('channel_team_members')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'team_members',
        filter: `team_id=eq.${team.id}`
      }, (payload: any) => {
        fetchTeam();
      })
      .subscribe()
  }, [])

  if (loading) return <LoadingTeam />

  return <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px]">
    <header className="flex items-start justify-between">
      <div className="grid gap-1">
        <h1 className="text-2xl">Team</h1>
        <p>Invite new members in your team.</p>
      </div>
      <New team_id={team.id} />
    </header>
    <main>
      <DataTable columns={columns} data={members} />
    </main>
  </div>;
}