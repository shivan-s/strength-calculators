<script lang="ts">
	import { page } from '$app/stores';
	const links: { name: string; uri: string }[] = [
		{
			name: '1-RM Calculator',
			uri: '/one-rm'
		},
		{
			name: 'RPE Weight Predictor',
			uri: '/rpe-weight'
		}
	];
</script>

<div>
	<h1><a href="/">HJP Method</a></h1>
	<h3>Strength & Conditioning</h3>
	<nav>
		<ul>
			{#each links as { name, uri }}
				<li>
					<a
						class={uri === $page.url.pathname ? 'active' : ''}
						href={uri}
						aria-current={uri === $page.url.pathname}>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	h1 a {
		color: var(--primary-color);
		text-decoration-line: none;
	}
	h1 a:hover {
		color: var(--secondary-color);
		transition-timing-function: ease;
		transition: 300ms;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	nav ul {
		display: flex;
		justify-content: space-around;
	}
	nav ul li {
		padding: 0.75rem 0.75rem 0.5rem 0.5rem;
		display: inline-block;
		list-style: none;
	}
	nav ul li a {
		padding: 0.5rem 0.5rem 0.25rem 0.25rem;
		border-radius: 0.25rem;
		text-decoration-line: none;
		text-transform: uppercase;
		color: var(--primary-color);
	}
	nav ul li a:hover {
		color: white;
		background: var(--secondary-color);
		transition-timing-function: ease;
		transition: 300ms;
	}
	nav ul li a.active {
		color: white;
		background: var(--secondary-color);
	}
</style>
