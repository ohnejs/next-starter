import { OhneRichText } from '@ohnejs/next/client';

import type { Block } from '../../ohne';

// A click on a link to one of your pages moves there without a full page load.
export function Prose({ fields }: Block<'Prose'>) {
  return <OhneRichText value={fields.body} className="prose" />;
}
