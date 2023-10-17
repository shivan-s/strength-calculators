<script lang="ts">
	import Select from '$components/select/Select.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let unit: 'kg' | 'lbs';
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<Select name="unit" bind:value={unit} label="Unit" {errors} {constraints}>
	<option value="kg">kg</option>
	<option value="lbs">lbs</option>
</Select>
