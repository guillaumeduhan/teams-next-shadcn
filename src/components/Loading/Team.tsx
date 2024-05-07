'use client';
export default function LoadingTeam() {
  return <div className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full max-w-[800px] animate-pulse">
    <header className="flex items-center justify-between">
      <div className="grid gap-2">
        <div className="h-5 w-32 bg-neutral-200 rounded animate-pulse" />
        <div className="h-5 w-80 bg-neutral-200 rounded animate-pulse" />
      </div>
      <div className="h-8 w-32 bg-neutral-200 rounded animate-pulse" />
    </header>
    <main className="grid gap-6 border rounded-lg shadow px-5 py-4 w-full">
      <header className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((i: any, key: number) => <div key={key} className="h-5 bg-neutral-200 rounded animate-pulse" />)}
      </header>
      <div className="grid gap-2">
        {[...Array(5)].map((i: any, key: number) => <div key={key} className="h-12 bg-neutral-200 rounded animate-pulse" />)}
      </div>
    </main>
  </div>
}