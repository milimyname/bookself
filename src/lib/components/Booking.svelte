<script lang="ts">
	import { isDrawerOpen } from '$lib/stores/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	export let bookingId: string;
	export let status: string;
	export let firstName: string;
	export let lastName: string;
	export let createdAt: Date;

	// Get color from status
	const colors = {
		bgLightColor: 'bg-light-draft',
		bgColor: 'draft',
		borderColor: 'draft',
		textColor: 'draft'
	};
	$: switch (status) {
		case 'draft':
			colors.bgLightColor = 'bg-light-draft';
			colors.bgColor = 'bg-draft';
			colors.textColor = 'text-draft';
			colors.borderColor = 'hover:border-draft';
			break;
		case 'pending':
			colors.bgLightColor = 'bg-light-pending';
			colors.bgColor = 'bg-pending';
			colors.textColor = 'text-pending';
			colors.borderColor = 'hover:border-pending';
			break;
		case 'done':
			colors.bgLightColor = 'bg-light-done';
			colors.bgColor = 'bg-done';
			colors.textColor = 'text-done';
			colors.borderColor = 'hover:border-done';
			break;
	}

	// Format Date
	const formatDate = (date: Date) => {
		return new Date(date).toLocaleDateString('de-DE', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	};

	console.log(status);
</script>

<a
	href={`/booking/${bookingId}`}
	class="grid grid-cols-[20px_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)]
		items-center justify-items-end rounded-lg border bg-white py-5 pl-8 pr-4 drop-shadow-sm transition-colors duration-300
		{colors.borderColor} {$isDrawerOpen && 'pointer-events-none'}"
>
	<h2 class="font-semibold">#1</h2>
	<h3 class="justify-end text-sm font-medium text-slate-500">Studium</h3>
	<h3 class="text-sm text-slate-500">{firstName} {lastName}</h3>
	<h3 class="text-sm text-slate-500">{formatDate(createdAt)}</h3>
	<div class="flex items-center justify-end gap-2">
		<div
			class="flex w-28 items-center justify-center gap-2 rounded-md px-4 py-2 {colors.bgLightColor}"
		>
			<div class="relative flex h-3 w-3 items-center">
				{#if status === 'pending'}
					<span class="absolute inline-flex h-2 w-2 animate-ping rounded-full {colors.bgColor}" />
				{/if}
				<span class="relative inline-flex h-2 w-2 rounded-full {colors.bgColor}" />
			</div>
			<span class="font-medium text-{colors.textColor}"
				>{status[0].toUpperCase() + status.slice(1)}</span
			>
		</div>
		<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
	</div>
</a>
