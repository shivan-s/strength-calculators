<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$components/navbar/Navbar.svelte';
	import Footer from '$components/footer/Footer.svelte';
	import Sidebar from '$components/sidebar/Sidebar.svelte';
	import type { LayoutData } from './$types';

	$: pageTitle = $page.data['pageTitle'];
    export let data: LayoutData
</script>

<svelte:head>
	<title>{pageTitle ? `${pageTitle} - ` : ''}Strength Calculators</title>
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex min-h-screen flex-col items-center justify-center">
		<Navbar />
		<main class="container prose mx-auto flex flex-grow flex-col gap-4 py-6">
			{#if pageTitle}
				<h1 class="text-center">{pageTitle}</h1>
			{/if}
			<slot />
		</main>
		<Footer />
	</div>
	<Sidebar links={data.links} />
</div>
