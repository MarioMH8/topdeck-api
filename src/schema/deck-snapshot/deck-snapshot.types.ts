import type z from 'zod';

import type DeckSnapshotSchema from './deck-snapshot.schema';

export type DeckSnapshotType = z.infer<typeof DeckSnapshotSchema>;
