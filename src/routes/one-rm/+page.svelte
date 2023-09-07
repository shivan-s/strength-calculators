<script lang="ts">
	import { calculateOneRM } from '$lib';
	let weight = 190;
	let reps = 3;
	let rpe = 8.5;

	$: brzyck = calculateOneRM({ weight, reps, rpe }, 'brzyck');
	$: epley = calculateOneRM({ weight, reps, rpe }, 'epley');
	$: lander = calculateOneRM({ weight, reps, rpe }, 'lander');
</script>

<form method="POST">
	<label>
		Weight Used
		<input type="number" name="weight" bind:value={weight} />
	</label>
	<label>
		Reps Made
		<input type="number" name="reps" bind:value={reps} />
	</label>
	<label>
		RPE
		<input type="number" name="rpe" bind:value={rpe} min={0.5} max={10} step={0.5} />
	</label>
	<button type="submit">Submit</button>
</form>
<div>
	<label
		>Brzyck
		<input disabled bind:value={brzyck} />
	</label>
	<label
		>Epley
		<input disabled bind:value={epley} />
	</label>
	<label
		>Lander
		<input disabled bind:value={lander} />
	</label>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
	}
	label {
		display: flex;
		flex-direction: column;
		max-width: fit-content;
	}
	button {
		margin-top: 0.5rem;
		max-width: fit-content;
	}
	input {
		padding: 0.5rem 0.25rem 0.5rem 0.25rem;
	}
</style>
