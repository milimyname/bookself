<script lang="ts">
	import ApexCharts from 'apexcharts';
	import { afterUpdate, onMount } from 'svelte';
	import {
		isUserFormOpen,
		anyQuestions,
		isBookingFormOpen,
		darkMode,
		toggleChart
	} from '$lib/stores/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { LL } from '$lib/i18n/i18n-svelte';

	export let data;
	let chart: ApexCharts;
	let innerWidth = 0;
	let dones = 0;
	let pendings = 0;
	let drafts = 0;
	const id = 'chart';

	// Get the createdAt Date of bookings and get only the month
	const getMonth = (date: Date) => new Date(date).toLocaleString('en-US', { month: 'short' });

	// Get all the months of the bookings
	let months = [
		...new Set(
			data.bookings
				.filter((booking: { createdAt: Date; status: string }) => booking.status === 'pending')
				.map((booking: { createdAt: Date }) => getMonth(booking.createdAt))
		)
	];

	// Get the total amount of bookings per month according to the status and the months array
	const getAmountOfBookingsPerMonth = (status: string) =>
		months.map((month) => {
			return $toggleChart === 'bookings'
				? data.bookings.reduce((acc: number, curr: { createdAt: Date; status: string }) => {
						if (curr.status === status && getMonth(curr.createdAt) === month) return acc + 1;
						return acc;
				  }, 0)
				: data.anmeldungs.reduce((acc: number, curr: { createdAt: Date; status: string }) => {
						if (getMonth(curr.createdAt) === month && curr.status === status) return acc + 1;
						return acc;
				  }, 0);
		});

	let options = {
		series: [
			{
				name: 'Done',
				data: getAmountOfBookingsPerMonth('done'),
				color: '#03C988'
			},
			{
				name: 'Pending',
				data: getAmountOfBookingsPerMonth('pending'),
				color: '#ff9100'
			},
			{
				name: 'Draft',
				data: getAmountOfBookingsPerMonth('draft'),
				color: '#7e7e7e'
			}
		],
		chart: {
			height: 500,
			type: 'line',
			zoom: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.1
			}
		},
		xaxis: {
			categories: months,
			labels: {
				style: {
					colors: '#000000' // White color for dark mode, black color for light mode
				}
			}
		},
		yaxis: {
			labels: {
				style: {
					colors: '#000000' // White color for dark mode, black color for light mode
				}
			}
		}
	};

	// Accumalate the total amount of pending bookings
	const totatOfBookings = (type: string) =>
		$toggleChart === 'bookings'
			? data.bookings.reduce((acc: number, curr: { status: string }) => {
					if (curr.status === type) {
						return acc + 1;
					}
					return acc;
			  }, 0)
			: data.anmeldungs.reduce((acc: number, curr: { status: string }) => {
					if (curr.status === type) {
						return acc + 1;
					}
					return acc;
			  }, 0);

	onMount(() => {
		chart = new ApexCharts(document.querySelector(`#${id}`), options);
		chart.render();
	});

	afterUpdate(() => {
		// Data for the chart
		options.series[0].data = getAmountOfBookingsPerMonth('done');
		options.series[0].name = data.locale === 'en' ? 'Done' : 'Erledigt';
		options.series[1].data = getAmountOfBookingsPerMonth('pending');
		options.series[1].name = data.locale === 'en' ? 'Pending' : 'Aufstehend';
		options.series[2].data = getAmountOfBookingsPerMonth('draft');
		options.series[2].name = data.locale === 'en' ? 'Draft' : 'Entwurf';

		dones = totatOfBookings('done');
		pendings = totatOfBookings('pending');
		drafts = totatOfBookings('draft');

		chart.updateOptions(options);
	});
</script>

<head>
	<title>Stats</title>
</head>

<svelte:window bind:innerWidth />

<main
	class="{$isUserFormOpen || $anyQuestions || $isBookingFormOpen
		? 'blur'
		: 'blur-0'} flex w-full flex-1 flex-col items-center gap-5 px-4 py-8 transition-all dark:text-black md:px-10 md:py-20 xl:px-0"
>
	<header class="flex w-full flex-col justify-between gap-5 xl:w-7/12 xl:px-0">
		<div class="flex justify-between">
			<a class="group flex items-center gap-3" href="/">
				<Icon
					src={icons.chevronRight}
					className="h-6 w-6 rotate-180 dark:fill-white  group-hover:-translate-x-1 transition-transform"
				/>
				<span class="text-sm font-semibold dark:text-white">{$LL.goBack()}</span>
			</a>
			<!-- Toggle of bookings or anmeldungs -->
			<div class="flex items-center gap-2">
				<select
					name="typeOfBooking"
					id="typeOfBooking"
					bind:value={$toggleChart}
					class="rounded-md text-sm font-semibold"
				>
					<option value="bookings">Bookings</option>
					<option value="anmeldungs">Anmeldungs</option>
				</select>
			</div>
		</div>
		<div
			class="flex justify-between rounded-md border border-gray-100 bg-white p-5 shadow-custom-lg"
		>
			<div
				class="flex w-20 items-center justify-center gap-2 rounded-md bg-light-done px-4 py-2 sm:w-40"
			>
				<div class="relative flex h-3 w-3 items-center">
					<span class="relative inline-flex h-2 w-2 rounded-full bg-done" />
				</div>
				{#if innerWidth > 640}
					<span class="font-medium text-done"
						>{dones}
						{data.locale === 'en' ? 'Done' : 'Erledigt'}</span
					>
				{:else}
					<span class="font-medium text-done">{dones} </span>
				{/if}
			</div>
			<div
				class="flex w-20 items-center justify-center gap-2 rounded-md bg-light-pending px-4 py-2 sm:w-40"
			>
				<div class="relative flex h-3 w-3 items-center">
					<span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-pending" />
					<span class="relative inline-flex h-2 w-2 rounded-full bg-pending" />
				</div>
				{#if innerWidth > 640}
					<span class="font-medium text-pending"
						>{pendings}
						{data.locale === 'en' ? 'Pending' : 'Aufstehend'}</span
					>
				{:else}
					<span class="font-medium text-pending">{pendings} </span>
				{/if}
			</div>
			<div
				class="flex w-20 items-center justify-center gap-2 rounded-md bg-light-draft px-4 py-2 sm:w-40"
			>
				<div class="relative flex h-3 w-3 items-center">
					<span class="relative inline-flex h-2 w-2 rounded-full bg-draft" />
				</div>
				{#if innerWidth > 640}
					<span class="font-medium text-draft"
						>{drafts}
						{data.locale === 'en' ? 'Draft' : 'Entwurf'}</span
					>
				{:else}
					<span class="font-medium text-draft">{drafts} </span>
				{/if}
			</div>
		</div>
	</header>
	<div class="w-full rounded-md bg-white xl:w-7/12" {id} />
</main>
