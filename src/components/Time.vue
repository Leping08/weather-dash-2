<template>
    <div>
        <div class="text-gray-400 text-2xl text-center">
            {{ currentTime.toLocaleString() }}
        </div>
        <div class="m-4">
            <div class="flex items-center h-6 sky rounded shadow-inner w-full mx-auto rounded-full">
                <div class="h-10 bg-gray-400 w-1 rounded" v-bind:style="{ 'margin-left': percentDoneWithDay + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentTime: null,
            snuriseTime: null,
			sunsetTime: null,
            percentDoneWithDay: 0
        }
    },
    mounted() {
        this.currentTime = new Date();
        setInterval(() => (this.currentTime = new Date()), 1000);
        this.updateDayPercent();
        setInterval(() => (this.updateDayPercent()), 60000);
    },
    methods: {
        updateDayPercent() {
            const hours = this.currentTime.getHours();
            const minutes = this.currentTime.getMinutes();
            const minCompleteToday = (hours * 60) + minutes;
            this.percentDoneWithDay = Math.round((minCompleteToday / 1440) * 100)
        }
    }
}
</script>