import type { infer as inferType } from 'zod';

import type DeckListSchema from './deck-list.schema';

export type DeckListType = inferType<typeof DeckListSchema>;
