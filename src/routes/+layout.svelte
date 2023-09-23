<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	$: pageTitle = $page.data['pageTitle'];
</script>

<svelte:head>
	<title>{pageTitle ? `${pageTitle} - ` : ''}Strength Calculators</title>
</svelte:head>

<Navbar />
<main class="container flex-grow">
	{#if pageTitle}
		<h2>{pageTitle}</h2>
	{/if}

	<slot />
</main>
<Footer />

<style lang="postcss">
	:global(body) {
		@apply flex flex-col min-w-full min-h-screen;
	}
</style>
