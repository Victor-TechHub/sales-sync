import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <Link href="/dashboard">click to view dashboard</Link>
    </main>
  );
}
