import { expect, test } from '@playwright/test';

test.describe('Screenshots', () => {
	const urls = [
		{ name: 'Index', url: '/' },
		{ name: 'One Rm', url: '/one-rm' },
		{ name: 'Rpe Weight', url: '/rpe-weight' }
	];
	for (const { name, url } of urls) {
		test(`screenshot for ${name}`, async ({ page, request }) => {
			const response = await request.get(url);
			expect(response.status()).toBe(200);
			await page.goto(url);
			await expect(page).toHaveScreenshot();
		});
	}
});
