<script lang="ts">
	import { calculateOneRM } from '$lib';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let weight = parseFloat(form?.weight) ?? 190;
	let reps = parseFloat(form?.reps) ?? 3;
	let rpe = parseFloat(form?.reps) ?? 8.5;

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
		<div class="rpe">
			<input
				type="range"
				name="rpe"
				bind:value={rpe}
				list="markers"
				min={0.5}
				max={10}
				step={0.5}
			/>
			<datalist id="markers">
				<option>0.5</option>
				<option>1</option>
				<option>1.5</option>
				<option>2</option>
				<option>2.5</option>
				<option>3</option>
				<option>3.5</option>
				<option>4</option>
				<option>4.5</option>
				<option>5</option>
				<option>5.5</option>
				<option>6</option>
				<option>6.5</option>
				<option>7</option>
				<option>7.5</option>
				<option>8</option>
				<option>8.5</option>
				<option>9</option>
				<option>9.5</option>
				<option>10</option>
			</datalist>
			<input disabled bind:value={rpe} />
		</div>
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
	.rpe {
		display: flex;
	}
</style>
