<script lang="ts">
  import type { SuperValidated } from 'sveltekit-superforms'
  import { superForm } from 'sveltekit-superforms/client'
  import type { SchemaType } from '../schema'
  import RpeSelect from '$lib/components/RpeSelect.svelte';
  import { dev } from '$app/environment'
  import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

  export let data: SuperValidated<SchemaType>

  const { form, errors, message, enhance } = superForm(data);
  let oneRM = $form.oneRM;
  let unit  = $form.unit
  let targetRPE = $form.targetRPE;
  let targetReps = $form.targetReps;
</script>

{#if dev}
  <SuperDebug data={$form} />
{/if}

<form class="flex flex-col gap-4 items-center" method="POST" use:enhance>
	<div class="form-control">
		<label for="oneRM" class="label">
			<span class="label-text">One Rep Max</span>
            {#if $errors.oneRM}
              <span class="label-text-alt text-error">{$errors.oneRM}</span>
            {/if}
		</label>
		<input
			class="input input-bordered w-full max-w-sx"
			type="number"
			name="oneRM"
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
{#if $message}
<div class="flex w-full justify-center">
	<div class="stat shadow rounded-md w-fit">
		<div class="stat-title">Target Weight</div>
		<div class="stat-value">{$message.targetWeight}</div>
	</div>
</div>
{/if}
