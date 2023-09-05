<script lang="ts">
	let weight = 190;
	let reps = 3;
	let rpe = 8.5;

	$: brzyck = weight * (36 / (37 - reps) - (10 - rpe));
	$: epley = weight * (1 + (reps + (10 - rpe)));
	$: lander = (100 * weight) / (101.3 - 2.67123 * (reps + (10 - rpe)));
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
	>lander
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
