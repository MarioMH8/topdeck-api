import type z from 'zod';

import type { DeckObjectCardSchema, DeckObjectMetadataSchema, DeckObjectSectionSchema } from './deck-object.schema';
import type DeckObjectSchema from './deck-object.schema';

type DeckObjectType = z.infer<typeof DeckObjectSchema>;
type DeckObjectCardType = z.infer<typeof DeckObjectCardSchema>;
type DeckObjectSectionType = z.infer<typeof DeckObjectSectionSchema>;
type DeckObjectMetadataType = z.infer<typeof DeckObjectMetadataSchema>;

export type { DeckObjectCardType, DeckObjectMetadataType, DeckObjectSectionType, DeckObjectType };
