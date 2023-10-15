<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	export let links: { label: string; href: string; icon: string }[] = [];
</script>

<div class="drawer-side">
	<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
	<ul class="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
		{#each links as { label, href, icon }}
			<li>
				<a class:active={$page.url.pathname === href} {href}
					><span>
						<Icon class="text-2xl" {icon} />
					</span>
					{label}</a
				>
			</li>
		{/each}
	</ul>
</div>
