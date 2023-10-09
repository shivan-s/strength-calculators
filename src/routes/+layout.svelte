<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { Navbar, Footer, Sidebar } from '$components';
	const links: { label: string; href: string, icon: string }[] = [
		{
			label: '1-RM Calculator',
			href: '/one-rm',
        icon: 'mdi:weights'
		},
		{
			label: 'RPE Weight Predictor',
			href: '/rpe-weight',
        icon: 'mdi:weights'  
		}
	];
	$: pageTitle = $page.data['pageTitle'];
</script>

<svelte:head>
	<title>{pageTitle ? `${pageTitle} - ` : ''}Strength Calculators</title>
</svelte:head>

<div class="drawer lg:drawer-open">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content min-h-screen flex flex-col items-center justify-center">
    <Navbar />
    <main
        class="py-6 container prose mx-auto flex flex-col flex-grow gap-4"
    >
    {#if pageTitle}
        <h1 class="text-center">{pageTitle}</h1>
    {/if}
        <slot />
      </main>
    <Footer />
    </div>
    <Sidebar {links} />
</div>
