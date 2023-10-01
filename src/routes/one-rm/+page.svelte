<script lang="ts">
	import { calculateOneRM } from '$lib';
	import { enhance } from '$app/forms';
	import { RpeSelect } from '$components';
	import type { ActionData } from './$types';

	export let form: ActionData;
	let weight = form?.weight ? parseFloat(form.weight) : 190;
	let reps = form?.reps ? parseFloat(form?.reps) : 3;
	let rpe = form?.rpe ? parseFloat(form?.rpe) : 10;

	$: brzyck = calculateOneRM({ weight, reps, rpe }, 'brzyck');
	$: epley = calculateOneRM({ weight, reps, rpe }, 'epley');
	$: lander = calculateOneRM({ weight, reps, rpe }, 'lander');
</script>

<form class="flex flex-col gap-4 items-center" method="POST" use:enhance>
	<div class="form-control">
		<label for="weight" class="label">
			<span class="label-text">Weight Used</span>
		</label>
		<input
			class="input input-bordered w-full max-w-xs"
			type="number"
			name="weight"
			bind:value={weight}
		/>
		<label for="reps" class="label">
			<span class="label-text">Reps Made</span>
		</label>
		<input
			class="input input-bordered w-full max-w-xs"
			type="number"
			name="reps"
			bind:value={reps}
		/>
		<label for="rpeSelect" class="label"> <span class="label-text">RPE</span></label>
		<input name="rpe" hidden aria-hidden type="number" bind:value={rpe} />
		<RpeSelect bind:rpe name="rpeSelect" />
	</div>
	<button class="btn btn-primary w-full max-w-xs" type="submit">Submit</button>
</form>
<div class="divider" />
<div class="stats shadow w-full justify-between">
	<div class="stat">
		<div class="stat-title">Brzyck</div>
		<div class="stat-value">{brzyck}</div>
	</div>
	<div class="stat">
		<div class="stat-title">Epley</div>
		<div class="stat-value">{epley}</div>
	</div>
	<div class="stat">
		<div class="stat-title">Lander</div>
		<div class="stat-value">{lander}</div>
	</div>
</div>
