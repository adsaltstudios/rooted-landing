import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "You're on the list — Rooted",
  robots: { index: false },
};

const MESSAGES: Record<string, { title: string; body: string }> = {
  ok: {
    title: "You're on the list.",
    body: "We'll be in touch gently: one short note when there's something worth saying, and nothing else.",
  },
  already: {
    title: "You're already on the list.",
    body: "We've got you. No need to sign up again.",
  },
  invalid: {
    title: "That email didn't look right.",
    body: "Head back and give it one more try.",
  },
  error: {
    title: "Something went wrong.",
    body: "Please head back and try again in a moment.",
  },
};

export default async function JoinedPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const m = MESSAGES[status ?? 'ok'] ?? MESSAGES.ok;

  return (
    <main className="legal">
      <div className="legal-top">
        <Link href="/" className="legal-logo">Rooted</Link>
      </div>
      <div className="legal-body" style={{ maxWidth: 560, textAlign: 'center' }}>
        <h1>{m.title}</h1>
        <p style={{ fontSize: 'var(--text-lede)' }}>{m.body}</p>
        <p style={{ marginTop: 32 }}>
          <Link href="/">Back to Rooted</Link>
        </p>
      </div>
    </main>
  );
}
