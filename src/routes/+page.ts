import { getLinks } from '$lib';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
	const q = url.searchParams.get('q');
	const links = await getLinks(q);
	return {
		q,
		links
	};
};
