<script lang="ts">
	import LabelWrapper from '$components/labelWrapper/labelWrapper.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string | number;
	export let label: string;
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<LabelWrapper {label} {error}>
	<input
		class="input input-bordered w-full max-w-xs"
		class:input-error={errors}
		aria-invalid={errors ? 'true' : undefined}
		bind:value
		{...constraints}
		{...$$restProps}
	/>
</LabelWrapper>
