<script lang="ts">
	import { page } from '$app/stores';
	const pageTitle = $page.data['pageTitle'];
</script>

<svelte:head>
	<title>{pageTitle ? 'hjpmethod - ${pageTitle}' : 'hjpmethod'}</title>
</svelte:head>

<nav>
	<ul>
		<li><a href="/one-rm">1-RM Calculator</a></li>
		<li><a href="/rpe-weight">RPE Weight Predictor</a></li>
	</ul>
</nav>

{#if pageTitle}
	<h1>{pageTitle}</h1>
{/if}

<slot />

<style>
	nav {
		border-bottom: 1px black solid;
	}
</style>
