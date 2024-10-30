<template>
	<q-page class="flex flex-center">
        <Title :title="'Appetizers!'"/>
	</q-page>
</template>

<script setup>
import Title from 'src/components/pages/appetizers/title.vue'

defineOptions({
	name: "src-pages-Appetizers",
});
</script>