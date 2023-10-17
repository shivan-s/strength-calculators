<script lang="ts">
	import LabelWrapper from '$components/labelWrapper/LabelWrapper.svelte';
	import type { InputConstraint } from 'sveltekit-superforms';

	export let value: string | number;
	export let label: string;
	export let errors: string[] | undefined;
	export let constraints: InputConstraint | undefined;
</script>

<LabelWrapper {label} {errors}>
	<select
		class="select select-bordered w-full max-w-xs"
		aria-invalid={errors ? 'true' : undefined}
		{...constraints}
		bind:value
		{...$$restProps}
	>
		<slot />
	</select>
</LabelWrapper>
