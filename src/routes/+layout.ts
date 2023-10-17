import { getLinks } from '$lib';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		links: await getLinks()
	};
};
