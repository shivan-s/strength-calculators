<script lang="ts">
	export let value: string;
	export let description: string;
	export let title: string;
</script>

<div class="flex w-full justify-center">
	<div class="stat w-fit place-items-center rounded-md shadow">
		<div class="stat-title">{title}</div>
		<div class="stat-value text-secondary">{value}</div>
		<div class="stat-desc">{description}</div>
	</div>
</div>
