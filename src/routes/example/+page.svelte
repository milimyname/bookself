<script lang="ts">
	import { goto } from '$app/navigation';
	import { Elements, PaymentElement, LinkAuthenticationElement, Address } from 'svelte-stripe';
	import { loadStripe } from '@stripe/stripe-js';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let stripe: any = null;
	let error: any = null;
	let elements: any;
	let processing: any = false;

	export let data;

	console.log(data.key.url);

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	async function submit() {
		// avoid processing duplicates
		if (processing) return;
		processing = true;
		// confirm payment with stripe
		const result = await stripe.confirmPayment({
			elements,
			redirect: 'if_required'
		});
		// log results, for debugging
		console.log({ result });
		if (result.error) {
			// payment failed, notify user
			error = result.error;
			processing = false;
		} else {
			// payment succeeded, redirect to "thank you" page
			goto('/');
			toast.success('Payment successful!');
		}
	}
</script>

<Toaster />

{#if error}
	<p class="error">{error.message} Please try again.</p>
{/if}

{#if stripe && data.key}
	<Elements
		{stripe}
		clientSecret={data.key.clientSecret}
		theme="flat"
		labels="floating"
		variables={{ colorPrimary: '#7c4dff' }}
		rules={{ '.Input': { border: 'solid 1px #0002' } }}
		bind:elements
	>
		<form on:submit|preventDefault={submit}>
			<LinkAuthenticationElement />
			<PaymentElement />

			<button disabled={processing}>
				{#if processing}
					Processing...
				{:else}
					Pay
				{/if}
			</button>
		</form>
	</Elements>
{:else}
	Loading...
{/if}

<style>
	.error {
		color: tomato;
		margin: 2rem 0 0;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 2rem 0;
	}
	button {
		padding: 1rem;
		border-radius: 5px;
		border: solid 1px #ccc;
		color: white;
		background: #7c4dff;
		font-size: 1.2rem;
		margin: 1rem 0;
	}
</style>
