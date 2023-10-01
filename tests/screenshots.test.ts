import { expect, test } from '@playwright/test';

test.describe('Screenshots', () => {
	const urls = [
		{ name: 'Index', url: '/' },
		{ name: 'Index', url: '/one-rm' },
		{ name: 'Index', url: '/rpe-weight' }
	];
	for (const { name, url } of urls) {
		test(`screenshot for ${name}`, async ({ page, request }) => {
			const response = await request.get(url);
			expect(response.status).toBe(200);
			await page.goto(url);
			await page.screenshot();
		});
	}
});
