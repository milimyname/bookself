<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	console.log(data);
</script>

<h6>Data loaded in<br /><code>+page.ts</code></h6>
<p>{data.user}</p>
