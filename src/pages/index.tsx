import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js + Vercel + og-image</h1>
      <Link href="/api/og?title=hello">API</Link>
    </main>
  );
}
