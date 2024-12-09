import type { infer as inferType } from 'zod';

import type DeckSnapshotSchema from './deck-snapshot.schema';

export type DeckSnapshotType = inferType<typeof DeckSnapshotSchema>;
