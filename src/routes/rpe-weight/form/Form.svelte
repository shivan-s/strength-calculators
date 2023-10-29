<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SchemaType } from '../schema';
	import RpeSelect from '$components/rpeSelect/RpeSelect.svelte';
	import { dev } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Button from '$components/button/Button.svelte';
	import NumericInput from '$components/numericInput/NumericInput.svelte';
	import UnitSelect from '$components/unitSelect/UnitSelect.svelte';
	import Result from '$components/result/Result.svelte';
	import NearestSelect from '$components/nearestSelect/NearestSelect.svelte';

	export let data: SuperValidated<SchemaType>;

	const { form, errors, message, enhance, constraints } = superForm(data);
	let oneRM = $form.oneRM;
	let nearest = $form.nearest;
	let unit = $form.unit;
	let targetRPE = $form.targetRPE;
	let targetReps = $form.targetReps;
</script>

{#if dev}
	<SuperDebug data={$form} />
{/if}

<form class="flex flex-col items-center gap-4" method="POST" use:enhance>
	<div class="form-control">
		<NumericInput
			step="0.5"
			name="oneRM"
			bind:value={oneRM}
			label="One Rep Max"
			errors={$errors.oneRM}
			constraints={$constraints.oneRM}
		/>
		<NearestSelect
			bind:unit
			{nearest}
			errors={$errors.nearest}
			constraints={$constraints.nearest}
		/>
		<UnitSelect bind:unit errors={$errors.unit} constraints={$constraints.unit} />
		<NumericInput
			step="1"
			name="targetReps"
			bind:value={targetReps}
			label="Target Reps"
			errors={$errors.targetReps}
			constraints={$constraints.targetReps}
		/>
		<RpeSelect
			bind:rpe={targetRPE}
			name="targetRPE"
			label="Target RPE"
			errors={$errors.targetRPE}
			constraints={$constraints.targetRPE}
		/>
	</div>
	<Button>Submit</Button>
</form>

<div class="divider" />

{#if $message}
	<Result
		title="Target Weight"
		value={`${$message.roundedTargetWeight} ${$message.unit}`}
		description={`(${$message.rawTargetWeight} ${$message.unit})`}
	/>
{/if}
