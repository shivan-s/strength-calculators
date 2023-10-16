import { it, describe, expect } from 'vitest';
import { getLinks } from './getLinks';

describe('getLinks suite', () => {
	it('should return links', async () => expect(await getLinks()).not.toBeNull());
});
