<script lang="ts">
	import Select from '$components/select/Select.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	const rpes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
	export let rpe: number;
	export let label: string;
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<Select bind:value={rpe} {label} {errors} {constraints} {...$$restProps}>
	{#each rpes as r}
		<option value={r.toString()}>{r.toString()}</option>
	{/each}
</Select>
