<script lang="ts">
	import { spring } from 'svelte/motion';
	import {
		anyQuestionsDrawerSlide,
		firstQuestionBlock,
		secondQuestionBlock,
		thirdQuestionBlock,
		fourthQuestionBlock
	} from '$lib/stores/stores';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import toast from 'svelte-french-toast';
	import { LL } from '$lib/i18n/i18n-svelte';

	let springQuestion1 = spring(100, { stiffness: 0.03, damping: 1 });
	let springQuestion2 = spring(10, { stiffness: 0.03, damping: 1 });
	let springQuestion3 = spring(10, { stiffness: 0.03, damping: 1 });
	let springQuestion4 = spring(10, { stiffness: 0.03, damping: 1 });

	$: $firstQuestionBlock = $springQuestion1;
	$: $secondQuestionBlock = $springQuestion2;
	$: $thirdQuestionBlock = $springQuestion3;
	$: $fourthQuestionBlock = $springQuestion4;
</script>

<div
	class="questionsDrawer fixed left-0 z-40 flex h-full w-11/12 flex-col overflow-x-hidden scroll-smooth rounded-r-3xl bg-white dark:text-black md:w-2/3"
	style="transform: translateX({-$anyQuestionsDrawerSlide}%)"
>
	<button
		class="mt-20 flex w-full flex-col p-5 {$firstQuestionBlock === 10
			? 'justify-center'
			: 'justify-start'} text-left transition-all active:-translate-x-2 md:mt-0 md:pl-28 md:pr-10"
		style="height: {$firstQuestionBlock}%"
		on:click={() => {
			if ($firstQuestionBlock === 10) springQuestion1.set(100, { soft: true });
			else springQuestion1.set(10, { soft: true });

			springQuestion2.set(10, { soft: true });
			springQuestion3.set(10, { soft: true });
			springQuestion4.set(10, { soft: true });
		}}
	>
		<h2 class="text-2xl font-medium md:text-4xl">{$LL.payForBooking()}</h2>
		{#if $firstQuestionBlock > 50}
			<article
				class="prose mt-2 lg:prose-xl"
				transition:slide={{ delay: 250, duration: 2000, easing: quintOut, axis: 'y' }}
			>
				<p>
					{$LL.payForBookingText1()}
				</p>

				<ul>
					<li>{$LL.creditCard()} <strong>4242 4242 4242 4242</strong></li>
					<li>{$LL.expireDate()}</li>
					<li>{$LL.cvv()}</li>
					<li>{$LL.anyEmail()}</li>
					<li>{$LL.anyName()}</li>
				</ul>
				<p>
					{$LL.payForBookingText3()}
				</p>
			</article>
		{/if}
	</button>
	<button
		class="w-ful flex flex-col p-5 {$secondQuestionBlock === 10
			? 'justify-center'
			: 'justify-start'} border-t text-left transition-all active:-translate-x-2 md:pl-28 md:pr-10"
		style="height: {$secondQuestionBlock}%"
		on:click={() => {
			// Make height of button the same as the drawer
			if ($secondQuestionBlock === 10) springQuestion2.set(100, { soft: true });
			else springQuestion2.set(10, { soft: true });

			springQuestion1.set(10, { soft: true });
			springQuestion3.set(10, { soft: true });
			springQuestion4.set(10, { soft: true });
		}}
	>
		<h2 class="text-2xl font-medium md:text-4xl">{$LL.whyCharge()}</h2>
		{#if $secondQuestionBlock > 50}
			<article
				class="prose mt-2 lg:prose-xl"
				transition:slide={{ delay: 250, duration: 2000, easing: quintOut, axis: 'y' }}
			>
				<p>
					{$LL.whyChargeText1()}
				</p>
			</article>
		{/if}
	</button>

	<button
		class="flex w-full flex-col border-t p-5 text-left transition-all active:-translate-x-2 md:pl-28 md:pr-10 {$thirdQuestionBlock ===
		10
			? 'justify-center'
			: 'justify-start'}"
		style="height: {$thirdQuestionBlock}%"
		on:click={() => {
			// Make height of button the same as the drawer
			if ($thirdQuestionBlock === 10) springQuestion3.set(100, { soft: true });
			else springQuestion3.set(10, { soft: true });

			springQuestion1.set(10, { soft: true });
			springQuestion2.set(10, { soft: true });
			springQuestion4.set(10, { soft: true });
		}}
	>
		<h2 class="text-2xl font-medium md:text-4xl">{$LL.tooLong()}</h2>
		{#if $thirdQuestionBlock > 50}
			<article
				class="prose mt-2 lg:prose-xl"
				transition:slide={{ delay: 250, duration: 2000, easing: quintOut, axis: 'y' }}
			>
				<p>
					{$LL.tooLongText1()}
					<a href="mailto:kj@mili-my.name" on:click={() => toast.success('Copied to clipboard')}
						>kj@mili-my.name</a
					>.
					{$LL.tooLongText2()}
				</p>
				<p>
					{$LL.tooLongText3()}
					<a
						href="https://www.berlin.de/einwanderung/en/services/appointments/artikel.1144334.en.php"
						>Ausländerbehörde Berlin</a
					>
				</p>
			</article>
		{/if}
	</button>

	<button
		class="flex w-full flex-col {$fourthQuestionBlock === 10
			? 'justify-center'
			: 'justify-start'} border-t p-5 text-left transition-all active:-translate-x-2 md:pl-28 md:pr-10"
		style="height: {$fourthQuestionBlock}%"
		on:click={() => {
			// Make height of button the same as the drawer
			if ($fourthQuestionBlock === 10) springQuestion4.set(100, { soft: true });
			else springQuestion4.set(10, { soft: true });

			springQuestion2.set(10, { soft: true });
			springQuestion3.set(10, { soft: true });
			springQuestion1.set(10, { soft: true });
		}}
	>
		<h2 class="text-2xl font-medium md:text-4xl">{$LL.anotherPlatform()}</h2>
		{#if $fourthQuestionBlock > 50}
			<article
				class="prose mt-2 lg:prose-xl"
				transition:slide={{ delay: 250, duration: 2000, easing: quintOut, axis: 'y' }}
			>
				<p>
					{$LL.anotherPlatformText1()}
				</p>
				<p>{$LL.anotherPlatformText2()}</p>
			</article>
		{/if}
	</button>
</div>
