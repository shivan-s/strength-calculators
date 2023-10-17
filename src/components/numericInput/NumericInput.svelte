<script lang="ts">
	import LabelWrapper from '$components/labelWrapper/LabelWrapper.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string | number;
	export let label: string;
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<LabelWrapper {label} {errors}>
	<input
		type="number"
		class="input input-bordered w-full max-w-xs"
		class:input-error={errors}
		aria-invalid={errors ? 'true' : undefined}
		bind:value
		{...constraints}
		{...$$restProps}
	/>
</LabelWrapper>
