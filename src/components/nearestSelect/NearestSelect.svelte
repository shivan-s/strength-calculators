<script lang="ts">
	import Select from '$components/select/Select.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let nearest: '1' | '2.5' | '5';
	export let unit: 'kg' | 'lbs';
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<Select name="nearest" bind:value={nearest} label="Round to nearest" {errors} {constraints}>
	<option value="5">5 {unit}</option>
	<option value="2.5">2.5 {unit}</option>
	<option value="1">1 {unit}</option>
</Select>
