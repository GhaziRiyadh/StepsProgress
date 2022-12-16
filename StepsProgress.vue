<template>
    <div class="container" :style="'height:' + height">
        <div :style="'background-color:' + backgroundColor" class="line">
            <div class="progress-line" :style="'width:' + getGreenLineWidth() + '%;background-color:' + progressColor">
            </div>
            <div class="circle-container">
                <span v-for="item in end" :key="item"
                    :style="'height:' + height + ';width:' + height + ';background-color:' + backgroundColor"
                    class="circle">
                    <slot name="selected" v-if="current > item" class="center-item">
                        <span>S</span>
                    </slot>
                    <slot name="not-selected" class="center-item" v-else-if="current + 1 <= item">
                        <span v-text="item"></span>
                    </slot>
                    <slot name="current" class="center-item" v-else>
                        <span>C</span>
                    </slot>
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
        progressColor: { type: String, default: '#fff' },
        backgroundColor: { type: String, default: '#eee' },
        height: { type: String, default: '6px' },
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
    height: auto;
}

.line {
    /* w-[95%] h-4 rounded-full relative p-1 in tailwind */
    height: 30%;
    width: 100%;
    border-radius: 9999px;
    position: relative;
    padding: 4px;

}

.progress-line {
    /* h-2 max-w-full rounded-full transition-all duration-500 */
    height: 100%;
    max-width: 100%;
    border-radius: 9999px;
    transition: all 0.5s;
}

.circle-container {
    /* h-6 w-full transition-all duration-300 ease-in-out rounded-full text-primary-loginSide absolute flex items-center justify-center -top-1 left-0 flex items-center justify-between in tailwind to css */
    width: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 9999px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.circle {
    padding: 2px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.center-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>