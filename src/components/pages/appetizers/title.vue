<template>
	<div class="row justify-center content-center full-height full-width">
        <!-- 
            dynamic classing here - there's a couple ways to do this.
            but this way is an object and the key is applied when the value is truthy
         -->
        <div class="col-6" :class="{ 'text-center': !!title }">
            <h5>{{ title }}</h5>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Title Here!'
    }
})
defineOptions({
	name: "src-components-pages-appetizers-title",
});
</script>