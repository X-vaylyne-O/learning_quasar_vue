<template>
	<q-item clickable tag="a" @click="handleClick">
		<q-item-section v-if="props.icon" avatar>
			<q-icon :name="props.icon" />
		</q-item-section>

		<q-item-section>
			<q-item-label>{{ props.title }}</q-item-label>
			<q-item-label caption>{{ props.caption }}</q-item-label>
		</q-item-section>
	</q-item>

</template>

<script setup>
import { useRouter } from 'vue-router';

const $router = useRouter();

defineOptions({
	name: "src-components-essentialLink.vue",
});

const handleClick = ($event) => {
    // event here is the mouse click. if you pass something in the fn call from the template, 
    // the arg here will be that thing - whatever it is. 
    // console.log('$event:', $event);
    console.log('props.link:', props.link);
    if (props.link.includes('http')) return window.open(props.link,'_blank');
    $router.push(props.link);

}

const props = defineProps({
	title: {
		type: String,
		required: true,
	},

	caption: {
		type: String,
		default: "",
	},
	link: {
		type: String,
		default: "#",
	},
	routerLink: {
		type: String,
		default: "/",
	},
	icon: {
		type: String,
		default: "",
	},
});
</script>
