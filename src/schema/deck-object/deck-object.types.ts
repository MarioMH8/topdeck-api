import type z from 'zod';

import type DeckObjectSchema from './deck-object.schema';
import type { DeckObjectCardSchema, DeckObjectSectionSchema } from './deck-object.schema';

type DeckObjectType = z.infer<typeof DeckObjectSchema>;
type DeckObjectCardType = z.infer<typeof DeckObjectCardSchema>;
type DeckObjectSectionType = z.infer<typeof DeckObjectSectionSchema>;

export type { DeckObjectCardType, DeckObjectSectionType, DeckObjectType };
