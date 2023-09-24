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

<header>
	<div class="navbar bg-base-100 shadow-md">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					{#each links as { uri, name }}
						<li>
							<a
								class:active={uri === $page.url.pathname}
								href={uri}
								aria-current={uri === $page.url.pathname}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<a href="/" class="btn btn-ghost normal-case text-xl">Strength Calculators</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				{#each links as { uri, name }}
					<li>
						<a
							class:active={uri === $page.url.pathname}
							href={uri}
							aria-current={uri === $page.url.pathname}>{name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
		<div class="navbar-end" />
	</div>
</header>
