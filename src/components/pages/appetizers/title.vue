<template>
	<div class="row justify-center content-center full-height full-width">
        <!-- 
            dynamic classing here - there's a couple ways to do this.
            but this way is an object and the key is applied when the value is truthy
         -->
        <div class="col-6" :class="{ 'text-center': !!title }">
            <h5>{{ title }}</h5>
            <q-toggle v-model="isTrue" label="Did ya eat yer meat?" />
            <p>{{ isTrue ? 'Yes' : 'No' }}</p>
            <q-btn @click="handleClick(isTrue)" label="Dessert?" />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter();
const props = defineProps({
    title: {
        type: String,
        default: 'Title Here!'
    }
})
const isTrue = ref(false)
const handleClick = (youAteYerMeat) => {
    if(youAteYerMeat) {
        router.push('/dessert')
    } else {
        alert('How can you have any pudding if you don\'t eat yer meat?')
        router.push('/main-course')
    }
} 

defineOptions({
	name: "src-components-pages-appetizers-title",
});
</script>
