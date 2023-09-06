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
		<input type="number" name="rpe" bind:value={rpe} />
	</label>
	<button type="submit">Submit</button>
</form>
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
		max-width: fit-content;
	}
</style>
