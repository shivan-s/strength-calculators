<script lang="ts">
	import Button from '$components/button/Button.svelte';
	import Icon from '@iconify/svelte';
</script>

<h1 class="text-6xl">
	<span>Strength Calculators</span>
</h1>

<form method="get" action="/?q">
	<div class="flex">
		<input class="input input-primary" />
		<Button>
			<Icon class="2xl" icon="ph:calculator" />
		</Button>
	</div>
</form>
