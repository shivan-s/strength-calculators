<script lang="ts">
	import { calculateTargetWeight } from '$lib';
	import { RpeSelect } from '$components';

	let oneRM = 190;
	let targetReps = 3;
	let targetRPE = 10;

	$: targetWeight = calculateTargetWeight({ oneRM, targetReps, targetRPE });
</script>

<form class="flex flex-col gap-4 items-center" method="POST">
	<div class="form-control">
		<label for="weight" class="label">
			<span class="label-text">One Rep Max</span>
		</label>
		<input
			class="input input-bordered w-full max-w-sx"
			type="number"
			name="oneRm"
			bind:value={oneRM}
		/>
		<label for="reps" class="label">
			<span class="label-text">Target Reps</span>
		</label>
		<input
			class="input input-bordered w-full max-w-xs"
			type="number"
			name="targetReps"
			bind:value={targetReps}
		/>
		<label for="targetRPESelect" class="label"><span class="label-text">Target RPE</span></label>
		<input name="targetRPE" hidden aria-hidden type="number" bind:value={targetRPE} />
		<RpeSelect bind:rpe={targetRPE} name="targetRPESelect" />
	</div>
	<button class="btn btn-primary w-full max-w-xs" type="submit">Submit</button>
</form>
<div class="divider" />
<div class="flex w-full justify-center">
	<div class="stat shadow rounded-md w-fit">
		<div class="stat-title">Target Weight</div>
		<div class="stat-value">{targetWeight}</div>
	</div>
</div>
