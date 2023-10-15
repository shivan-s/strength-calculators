<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SchemaType } from '../schema';
	import RpeSelect from '$components/rpeSelect/RpeSelect.svelte';
	import { dev } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import NumericInput from '$components/numericInput/NumericInput.svelte';
	import Select from '$components/select/Select.svelte';
	import Button from '$components/button/Button.svelte';

	export let data: SuperValidated<SchemaType>;

	const { form, errors, message, enhance, constraints } = superForm(data);
	let weight = $form.weight;
	let unit = $form.unit;
	let reps = $form.reps;
	let rpe = $form.rpe;
	let algorithm = $form.algorithm;

	let advanced = false;
</script>

{#if dev}
	<SuperDebug data={$form} />
{/if}

<div class="flex items-center justify-end">
	<label for="advanced" class="label">
		<span class="label-text"> Advanced </span>
	</label>
	<input name="advanced" type="checkbox" class="toggle toggle-primary" bind:checked={advanced} />
</div>
<form class="flex flex-col items-center gap-4" method="POST" use:enhance>
	<div class="form-control">
		<NumericInput
			type="number"
			step="0.5"
			name="weight"
			bind:value={weight}
			label="Weight Used"
			errors={$errors.weight}
			constraints={$constraints.weight}
		/>
		<Select
			name="unit"
			bind:value={unit}
			label="Unit"
			errors={$errors.unit}
			constraints={$constraints.unit}
		>
			<option value="kg">kg</option>
			<option value="lbs">lbs</option>
		</Select>
		{#if advanced}
			<Select
				name="algorithm"
				bind:value={algorithm}
				label="Algorithm"
				errors={$errors.algorithm}
				constraints={$constraints.algorithm}
			>
				<option value="brzyck">Brzyck</option>
				<option value="epley">Epley</option>
				<option value="lander">Lander</option>
			</Select>
		{/if}
		<NumericInput
			type="number"
			step="1"
			name="reps"
			bind:value={reps}
			label="Reps Made"
			errors={$errors.weight}
			constraints={$constraints.weight}
		/>
		<RpeSelect
			bind:rpe
			name="rpe"
			label="RPE"
			errors={$errors.rpe}
			constraints={$constraints.rpe}
		/>
	</div>
	<Button>Submit</Button>
</form>
<div class="divider" />
{#if $message}
	<div class="flex w-full justify-center">
		<div class="stat w-fit rounded-md shadow">
			<div class="stat-title">One Rep Max</div>
			<div class="stat-value">{$message.oneRM}</div>
		</div>
	</div>
{/if}
