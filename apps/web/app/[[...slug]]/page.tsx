import { OhneBlocks } from '@ohnejs/next';

import { Hero } from '../../components/blocks/Hero';
import { Prose } from '../../components/blocks/Prose';
import { ohne } from '../../lib/ohne';

// The title, description, share tags and canonical link, from the page's `seo` in the CMS.
export const generateMetadata = ohne.metadata;

// One page renders every path, `/` included, by asking the CMS which page the path shows.
// A redirect or a missing page answers with its own status code, so this page only renders content.
export default async function Page() {
  const { page } = await ohne.page();
  return (
    <main lang={page.locale}>
      <h1>{page.record.title}</h1>
      {/* Name a component for every block. A block the CMS adds fails `pnpm typecheck` until it has one. */}
      <OhneBlocks blocks={page.record.content} components={{ Hero, Prose }} />
    </main>
  );
}
