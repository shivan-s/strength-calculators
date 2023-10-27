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
	import Result from '$components/result/Result.svelte';
	import Toggle from '$components/toggle/Toggle.svelte';
	import UnitSelect from '$components/unitSelect/UnitSelect.svelte';
	import NearestSelect from '$components/nearestSelect/NearestSelect.svelte';

	export let data: SuperValidated<SchemaType>;

	const { form, errors, message, enhance, constraints } = superForm(data);
	let weight = $form.weight;
	let unit = $form.unit;
	let nearest = $form.nearest;
	let reps = $form.reps;
	let rpe = $form.rpe;
	let algorithm = $form.algorithm;

	let advanced = false;
</script>

{#if dev}
	<SuperDebug data={$form} />
{/if}

<div class="flex items-center justify-end">
	<Toggle bind:checked={advanced} label="Advanced" />
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
		<UnitSelect bind:unit errors={$errors.unit} constraints={$constraints.unit} />
		<NearestSelect
			bind:unit
			{nearest}
			errors={$errors.nearest}
			constraints={$constraints.nearest}
		/>
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
	<Result
		title="One Rep Max"
		value={`${$message.roundedOneRM} ${$message.unit}`}
		description={`(${$message.rawOneRM} ${$message.unit})`}
	/>
{/if}
