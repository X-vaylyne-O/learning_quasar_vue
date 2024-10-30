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

const validateURL =  ({ val }) => /^(?:(?:http?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
        .test(val) || 'Must be a valid url (http)';

const errorItem = ref({});
const formValid = computed(() => {
    return !!Object.keys(errorItem.value).length;
});

watch(formItem.value, (newValue, oldValue) => {
    console.log('newValue:', newValue);
    if(newValue.url) {
        const validURL  = validateURL({ val: newValue.link});
        if (typeof validURL === 'string') errorItem.value['url'] = validURL;
    }
})
</script>