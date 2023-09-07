<script lang="ts">
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	const pageTitle = $page.data['pageTitle'];
</script>

<svelte:head>
	<title>{pageTitle ? `hjpmethod - ${pageTitle}` : 'hjpmethod'}</title>
</svelte:head>

<header>
	<Navbar />
</header>
<main>
	{#if pageTitle}
		<h2>{pageTitle}</h2>
	{/if}

	<slot />
</main>

<footer>
	<p><a href="https://www.hjpmethod.co.nz">Hayden Prichard</a> © 2023</p>
</footer>

<style>
	:global(:root) {
		--primary-color: black;
		--secondary-color: #ca2017;
	}
	:global(*) {
		padding: 0;
		margin: 0;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	header {
		padding-bottom: 2rem;
		border-bottom: 1px grey solid;
	}
	footer {
		padding: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-top: 1px grey solid;
	}
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 2rem;
		flex-grow: 1;
		height: 100%;
	}
</style>
