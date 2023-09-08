<script lang="ts">
	import { calculateTargetWeight } from '$lib';

	let oneRM = 190;
	let targetReps = 3;
	let targetRPE = 8.5;

	$: targetWeight = calculateTargetWeight({ oneRM, targetReps, targetRPE });
</script>

<form method="POST">
	<label>
		One Rep Max
		<input type="number" name="oneRm" bind:value={oneRM} />
	</label>
	<label>
		Target Reps
		<input type="number" name="targetReps" bind:value={targetReps} />
	</label>
	<label>
		Target RPE
		<input type="number" name="targetRPE" bind:value={targetRPE} min={0.5} max={10} step={0.5} />
	</label>
	<button type="submit">Submit</button>
</form>
<div>
	<label
		>Target Weight
		<input disabled bind:value={targetWeight} />
	</label>
</div>
