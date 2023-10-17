<script lang="ts">
	export let label: string;
	export let errors: string[] | undefined;
</script>

<label class="label flex flex-col items-start gap-1">
	{#if errors}
		<span class="label-text-alt text-error">{errors}</span>
	{:else}
		<span class="label-text">{label}</span>
	{/if}
	<slot />
</label>
