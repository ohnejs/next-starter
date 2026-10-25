'use client';

import Link from 'next/link';

// Next shows this when a page throws, like when the API fails.
export default function ErrorPage() {
  return (
    <main>
      <h1>Something went wrong</h1>
      <p>
        <Link href="/">Back to the home page</Link>
      </p>
    </main>
  );
}
