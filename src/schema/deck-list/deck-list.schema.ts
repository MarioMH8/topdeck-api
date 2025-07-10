import { z } from 'zod';

const DeckListSchema = z.coerce.string().transform(value => {
	if (!value) {
		return;
	}

	const parsed = z.url().safeParse(value).data;
	if (parsed === 'https://www.moxfield.com/decks/undefined') {
		return;
	}

	return parsed;
});

export default DeckListSchema;
