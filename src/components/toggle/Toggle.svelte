<script lang="ts">
	import LabelWrapper from '$components/labelWrapper/LabelWrapper.svelte';

	export let checked: boolean;
	export let label: string;
    export let errors: string[] | undefined = undefined;
</script>

<LabelWrapper {label} {errors}>
	<input
		type="checkbox"
		class="toggle toggle-primary"
		bind:checked
		{...errors}
		{...$$restProps}
	/>
</LabelWrapper>
