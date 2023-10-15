<script lang="ts">
	export let value: string | undefined;
	export let title: string;
</script>

<div class="flex w-full justify-center">
	<div class="stat w-fit rounded-md shadow">
		<div class="stat-title">{title}</div>
		<div class="stat-value">{value}</div>
	</div>
</div>
