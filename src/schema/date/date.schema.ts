import { z } from 'zod';

const DateSchema = z.coerce.number().transform(value => new Date(value * 1000));

export default DateSchema;
