<script>
	import ApexCharts from 'apexcharts';
	import { onMount } from 'svelte';

	let chart;

	export let options = {
		chart: {
			type: 'line'
		},
		series: [
			{
				name: 'Series 1',
				data: [30, 40, 25, 50, 49, 21, 70, 51]
			}
		],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
		}
	};

	export let id = 'chart';

	onMount(() => {
		chart = new ApexCharts(document.querySelector(`#${id}`), options);
		chart.render();
	});
</script>

<div class="w-full" {id} />
