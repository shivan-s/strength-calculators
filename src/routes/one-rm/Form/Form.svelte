<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms/client';
	import type { SchemaType } from '../schema';
	import RpeSelect from '$lib/components/RpeSelect.svelte';
	import { dev } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	export let data: SuperValidated<SchemaType>;

	const { form, errors, message, enhance } = superForm(data);
	let weight = $form.weight;
	let unit = $form.unit;
	let reps = $form.reps;
	let rpe = $form.rpe;
	let algorithm = $form.algorithm;
</script>

{#if dev}
	<SuperDebug data={$form} />
{/if}

<form class="flex flex-col gap-4 items-center" method="POST" use:enhance>
	<div class="form-control">
		<label for="weight" class="label">
			<span class="label-text">Weight Used</span>
			{#if $errors.weight}
				<span class="label-text-alt text-error">{$errors.weight}</span>
			{/if}
		</label>
		<input
			class="input input-bordered w-full max-w-xs"
			class:input-error={$errors.weight}
			aria-invalid={$errors.weight ? 'true' : undefined}
			type="number"
			name="weight"
			bind:value={weight}
		/>

		<label for="unit" class="label">
			<span class="label-text">Unit</span>
			{#if $errors.unit}
				<span class="label-text-alt text-error">{$errors.unit}</span>
			{/if}
		</label>
		<select class="select input-bordered" name="unit" bind:value={unit}>
			<option value="kg">kg</option>
			<option value="lbs">lbs</option>
		</select>

		<label for="unit" class="label">
			<span class="label-text">Algorithm</span>
			{#if $errors.algorithm}
				<span class="label-text-alt text-error">{$errors.algorithm}</span>
			{/if}
		</label>
		<select class="select input-bordered" name="algorithm" bind:value={algorithm}>
			<option value="brzyck">Brzyck</option>
			<option value="epley">Epley</option>
			<option value="lander">Lander</option>
		</select>

		<label for="reps" class="label">
			<span class="label-text">Reps Made</span>
			{#if $errors.reps}
				<span class="label-text-alt text-error">{$errors.reps}</span>
			{/if}
		</label>
		<input
			class="input input-bordered w-full max-w-xs"
			type="number"
			name="reps"
			bind:value={reps}
		/>

		<label for="rpeSelect" class="label">
			<span class="label-text">RPE</span>
			{#if $errors.reps}
				<span class="label-text-alt text-error">{$errors.reps}</span>
			{/if}
		</label>
		<RpeSelect bind:rpe name="rpe" />
	</div>
	<button class="btn btn-primary w-full max-w-xs" type="submit">Submit</button>
</form>
<div class="divider" />
{#if $message}
	<Response result={$message.oneRM} />
{/if}
