<template>
    <q-page class="flex flex-center">
        <Title :title="'Main Course'"/>
        <div class="row justify-center">
            <q-input class="col-12" v-model="inputValue" label="What would you like?"/>
            <p class="col-12" :style="{marginTop:'1rem', backgroundColor: 'coral'}">{{ inputValue }}</p> 
        </div>
    </q-page>
</template>

<script setup>
import { ref } from 'vue';
import Title from 'src/components/pages/mainCourse/title.vue'
/**
 * TODO: I don't have enough time to implement, but I thought it'd be kind of cool to break up
 * foods/food groups in to different color categories and change the background color dynamically
 * when users start typing
 */

const inputValue = ref('');
defineOptions({
    name: "src-pages-MainCourse"
})
</script>