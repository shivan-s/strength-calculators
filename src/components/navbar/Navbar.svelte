<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
</script>

<div class="navbar bg-base-100 shadow-md">
	<div class="navbar-start">
		<label for="my-drawer" class="btn drawer-button lg:hidden">
			<Icon class="text-2xl" icon="mdi:barbell" />
		</label>
	</div>
	<div class="navbar-center">
		{#if $page.url.pathname !== '/'}
			<a href="/" class="btn btn-ghost text-xl normal-case">
				<span>Strength Calculators</span>
			</a>
		{/if}
	</div>
	<div class="navbar-end" />
</div>
