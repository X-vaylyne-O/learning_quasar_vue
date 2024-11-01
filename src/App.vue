<template>
    <router-view />
</template>

<script setup>
// IMPORTS
import {
    // computed,
    inject, // NOTE: will use for axios 
    ref,
    // onMounted,
    // onUnmounted,
    // watch,
    // watchEffect,
} from 'vue';
import {
    LocalStorage,
    useQuasar,
} from 'quasar';

import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/user-store';

// CONFIG
/*
  NOTE: about 'defineOptions' from chatGPT:

  The defineOptions API in script setup allows you to specify
  options for the component, such as name, inheritAttrs, and
  others you would usually place in the options object when
  not using script setup.

  Properties Available in defineOptions
    name
      Type: string
      Purpose: Sets a custom name for the component, which will appear in Vue DevTools and can be helpful for debugging and testing.

    inheritAttrs
      Type: boolean
      Default: true
      Purpose: Controls whether non-prop attributes (like class, style, data-* attributes) are automatically applied to the component's root element.
        When set to false, these attributes won’t be inherited, and you’ll need to manually apply $attrs in the template.

    emits (Vue 3.4+ only)
      Type: string[] or { [eventName: string]: (args: any[]) => boolean }
      Purpose: Specifies the events the component can emit, allowing better type inference and validation for events.
      Example: emits: ['customEvent'] or emits: { 'customEvent': (val) => typeof val === 'string' }.

    compatConfig (Vue 3 compatibility mode)
      Type: object
      Purpose: Specifies compatibility options if you’re transitioning from Vue 2 to Vue 3 and using Vue's compatibility mode.
      Example: compatConfig: { MODE: 3 }
*/
defineOptions({
    name: "App",
});

const { profile } = storeToRefs(useUserStore());

console.log('what is profile value in App.vue: ', profile.value);

</script>
