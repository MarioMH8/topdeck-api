import { z } from 'zod';

const URL_REGEX = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_+.~#?&/=]*/g;

const DeckListSchema = z.coerce.string().transform(value => {
	if (!value) {
		return;
	}

	const extracted = URL_REGEX.exec(value);

	const url = extracted ? extracted[0] : value;

	const parsed = z.url().safeParse(url).data;
	if (parsed === 'https://www.moxfield.com/decks/undefined') {
		return;
	}

	return parsed;
});

export default DeckListSchema;
