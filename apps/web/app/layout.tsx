import type { Metadata } from 'next';

import { OhnePreview } from '@ohnejs/next/client';
import Link from 'next/link';

import './site.css';

// The title of a page that has none of its own, like the not-found page.
export const metadata: Metadata = { title: 'Website' };

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body>
        <div className="site">
          <header>
            <Link href="/">Website</Link>
          </header>
          {children}
          <footer>
            Made with <a href="https://ohne.dev">ohne</a> and <a href="https://nextjs.org">Next</a>.
          </footer>
        </div>
        {/* Inside the dashboard's editor, this updates the page as you type. Elsewhere it does nothing. */}
        <OhnePreview />
      </body>
    </html>
  );
}
