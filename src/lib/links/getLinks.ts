import Fuse from 'fuse.js';

export type Link = {
	label: string;
	href: string;
	icon: string;
};

export async function getLinks(q?: string | null): Promise<Link[]> {
	const links: Link[] = [
		{
			label: '1-RM Calculator',
			href: '/one-rm',
			icon: 'icon-park-outline:one'
		},
		{
			label: 'RPE Weight Predictor',
			href: '/rpe-weight',
			icon: 'la:grin-beam-sweat-solid'
		}
	];
	if (q) {
		const fuse = new Fuse(links, { keys: ['label', 'href'] });
		return fuse.search(q).map(({ item }) => item);
	}
	return links;
}
