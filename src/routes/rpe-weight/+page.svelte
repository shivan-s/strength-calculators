<script lang="ts">
	import type { PageData } from './$types';
	import Form from './Form';

    export let data: PageData
</script>

<Form data={data.form} />
