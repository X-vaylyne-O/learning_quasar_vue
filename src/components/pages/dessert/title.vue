<template>
    <div class="row justify-center content-center full-height full-width">
        <div class="col-6" :class="{ 'text-center': !!title}">
            <h5>{{ title }}</h5>
        </div>
    </div>
</template>

<script setup>
const props = defineProps ({
    title: {
        type: String,
        default: 'You are (en)Titled'
    }
})
defineOptions({
    name:"src-components-pages-dessert-title"
})
</script>