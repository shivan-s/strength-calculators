<script lang="ts">
	const rpes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
</script>

<select class="select select-bordered w-full max-w-xs" {...$$restProps}>
	{#each rpes as r}
		<option value={r}>{r}</option>
	{/each}
</select>
