<template>
    <div class="container">
        <div :style="'background-color:' + backgroundColor + ';height:' + backgroundHeight" class="line">
            <div class="progress-line"
                :style="'width:' + getGreenLineWidth() + '%;background-color:' + progressColor + ';height:' + progressHeight">
            </div>
            <div class="cercle-container">
                <span v-for="item in end" :key="item" :style="'height:' + cercleHeight + ';width:' + cercleWidth"
                    class="cercle">
                    <slot name="current" v-if="current > item" />
                    <slot name="not-current" v-else-if="current + 1 <= item" />
                    <slot name="other" v-else />
                    <!-- <img v-if="current > item" src='/Icons/Dashboard/check-solid.svg' alt=''>
                        <span v-else-if="current + 1 <= item" v-text="item"></span>
                        <span v-else class="h-full rounded-full w-full border-4 border-primary-loginSide"></span> -->
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    props: {
        current: { type: Number, default: 1 },
        end: { type: Number, default: 1 },
        progressColor: { type: String, default: '#eee' },
        backgroundColor: { type: String, default: '#eee' },
        progressHeight: { type: String, default: '2px' },
        backgroundHeight: { type: String, default: '4px' },
        cercleHeight: { type: String, default: '6px' },
        cercleWidth: { type: String, default: '6px' },
        cercleActiveColor: { type: String, default: '#eee' },
        cercleNotActiveColor: { type: String, default: '#eee' },
    },
    methods: {
        getGreenLineWidth() {
            return (100 / (this.end - 1)) * (this.current - 1)
        }
    }
}
</script>
<style>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.line {
    /* w-[95%] h-4 rounded-full relative p-1 in tailwind */

    width: 95%;
    border-radius: 9999px;
    position: relative;
    padding: 1px;

}

.progress-line {
    /* h-2 max-w-full rounded-full transition-all duration-500 */
    height: 2px;
    max-width: 100%;
    border-radius: 9999px;
    transition: all 0.5s;
}

.cercle-container {
    /* h-6 w-full transition-all duration-300 ease-in-out rounded-full text-primary-loginSide absolute flex items-center justify-center -top-1 left-0 flex items-center justify-between in tailwind to css */
    height: fit-content;
    width: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 9999px;
    position: absolute;
    top: -1px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.cercle {
    padding: 2px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>