<script>
	import { onDestroy, onMount } from 'svelte';

	let borderColor = 'red'; // Initial border color
	let intervalId; // Stores the ID of the interval for animating the border color

	// Define an array of border colors to cycle through
	const borderColors = ['red', 'blue', 'green', 'yellow'];

	// Function to update the border color
	const updateBorderColor = () => {
		borderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
	};

	// Trigger the border color animation on component mount
	onMount(() => {
		intervalId = setInterval(updateBorderColor, 1000); // Update border color every 1 second
	});

	// Clean up the interval on component unmount
	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<div class="box">
	<!-- Box content goes here -->
</div>

<style>
  .box {
    width: 100px;
    height: 100px;
    border: 2px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    /* Use the reactive border color */
    border-color: {borderColor};
    /* Use a transition to animate the border color change */
    transition: border-color 0.5s ease-in-out;
  }
</style>
