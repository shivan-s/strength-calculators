<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

<div class="hero">
	<div class="hero-content flex flex-col text-center">
		<div class="max-w-md flex flex-row justify-between">
			<Icon class="text-5xl" icon="game-icons:strong" />
			<Icon class="text-5xl" icon="mdi:calculator" />
		</div>
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Strength Calculators</h1>
		</div>
	</div>
</div>

<form method="GET" class="flex w-full justify-center">
	<div class="join">
		<input
			name="q"
			value={data.q}
			class="input join-item input-bordered input-primary"
			placeholder="Search calculators"
		/>
		<button type="submit" class="btn btn-primary join-item"
			><Icon class="text-2xl" icon="bi:search" /></button
		>
	</div>
</form>

<div>
	{#each data.links as { label, href }}
		<a {href} class="btn">{label}</a>
	{/each}
</div>
