<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>{@html data.status}</div>

<div>
	<input type="radio" id="radio" />
	<label for="radio">
		<p>radio</p>
	</label>
</div>
