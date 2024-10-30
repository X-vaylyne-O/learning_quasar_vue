<template>
    <div class="col-12 col-sm-9 col-md-6">
        <div class="row justify-center">
            <div class="col-12">
                <q-input
                    v-model="formItem.name"
                    :label="inputLabels.name"
                ></q-input>
            </div>
            <div class="col-12">
                <q-input
                    v-model="formItem.url"
                    :label="!!errorItem['url'] ? errorItem['url'] : inputLabels.url"
                    :error="!!errorItem['url']"
                ></q-input>
            </div>
            <div class="col-12">
                <q-btn
                    class="full-width"
                    color="primary"
                    :disable="!formValid"
                    :label="inputLabels.submit"
                ></q-btn>
            </div>
        </div>
        <div class="row justify-center content-center full-width-full-height">
            <div class="col-12">
                <h6>Review your addition</h6>
                <div class="row" v-for="([key, value], index) in Object.entries(formItem)" :key="index">
                    <div class="col-12">{{ key }}: {{ value }}</div>
                </div>
            </div>
        </div>
        {{ formValid }}
        {{ errorItem }}
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

defineOptions({
	name: "src-components-pages-newRecipe-form",
});

const inputLabels = {
    name: 'Name',
    url: 'URL to the recipe',
    submit: 'Submit'
};

const formItem = ref({
    name: '',
    url: ''
});

const validateURL =  ({ val }) => {
    if (!val) return true;
    return /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/i
        .test(val) || 'Must be a valid URL (https)';
};

const formRules = {
    name: [],
    url: [ validateURL ]
};

const errorItem = ref({});
const formValid = computed(() => {
    return !!Object.keys(errorItem.value).length;
});

watch(formItem.value, (newValue, oldValue) => {
    console.log('newValue:', newValue);
    Object.entries(newValue).forEach(([key, value]) => {
        // if there's no value in the formItem, there can't be an errorItem for it
        if (!value || typeof value !== 'string') delete errorItem.value[key];
        // make sure there's rules for the key
        else if (formRules[key] && Array.isArray(formRules[key]) && formRules[key].length) {
            formRules[key].forEach((rule) => {
                // ensure the rule is a function;
                if (typeof rule !== 'function') return;
                const fnResponse = rule({ val: value });
                // if its a string - then there's an error. otherwise, its valid
                if (typeof fnResponse === 'string') errorItem.value[key] = fnResponse;
                else delete errorItem.value[key];
            })
        }
    })
})
</script>