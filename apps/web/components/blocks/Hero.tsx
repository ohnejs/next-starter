import { OhneRichText } from '@ohnejs/next/client';

// `ohne.ts` holds the types the CMS writes, so `fields` matches the block in `apps/backend/blocks/`.
import type { Block } from '../../ohne';

// `OhneBlocks` in the page renders this component for every `Hero` block, by its name.
export function Hero({ fields }: Block<'Hero'>) {
  return (
    <section className="hero">
      <h2>{fields.heading}</h2>
      {fields.lead && (
        <p>
          <OhneRichText value={fields.lead} inline />
        </p>
      )}
    </section>
  );
}
