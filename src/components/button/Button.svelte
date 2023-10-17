<script lang="ts">
	export let buttonType: 'primary' | 'secondary' | 'disabled' = 'primary';
</script>

<button class="btn btn-{buttonType} w-full max-w-xs" {...$$restProps}><slot /></button>
