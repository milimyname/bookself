<script lang="ts">
	import { isBookingFormOpen } from '$lib/stores/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { formatDate } from '$lib/hooks/formatDate';

	export let bookingId: string;
	export let status: string;
	export let firstName: string;
	export let lastName: string;
	export let createdAt: Date;
	export let visaType: Date;

	const colors = {
		bgLightColor: 'bg-light-draft',
		bgColor: 'draft',
		borderColor: 'draft',
		textColor: 'draft'
	};

	// Get color from status
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
</script>

<a
	href={`/booking/${bookingId}`}
	class="flex items-center justify-between justify-items-end
		rounded-lg border border-gray-100 bg-white py-5 pl-8 pr-4 shadow-custom-lg transition-colors duration-300 md:grid md:grid-cols-[150px_minmax(100px,_1fr)_150px_minmax(100px,_1fr)]
		{colors.borderColor} {$isBookingFormOpen && 'pointer-events-none'}"
>
	<h3 class="justify-self-start text-sm text-slate-500">{firstName} {lastName}</h3>
	<h3 class="hidden justify-end text-sm font-medium text-slate-500 md:block">{visaType}</h3>
	<h3 class="hidden text-sm text-slate-500 md:block">{formatDate(createdAt)}</h3>
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
			<span class="font-medium {colors.textColor}">{status[0].toUpperCase() + status.slice(1)}</span
			>
		</div>
		<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
	</div>
</a>
