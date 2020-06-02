<template>
	<div class="bg-gray-600 w-full p-4">
		<div class="flex">
			<div class="flex-1">
				<pressure />
			</div>
		</div>
	</div>
</template>


<script>
import pressure from '../components/graphs/Pressure'
export default {
	components: {
		pressure
	},
	data () {
		return {
			timeFrame: null
		}
	}
}
</script>