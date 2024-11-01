import { defineStore } from 'pinia';
import { ref } from 'vue';
import cloneDeep from 'clone-deep';

import { LocalStorage } from 'quasar';

// NOTE: 'useUserStore' is the fn we export and call to destructure the refs/fns here
export const useUserStore = defineStore('user', () => {
    const userInit = {
        username: null,
        displayName: null,
        givenName: null,
        surname: null,
        mail: null,
        phone: null,
    };
    console.log('userInit: ', userInit);

    // NOTE: 'cloneDeep' pkg solves deep linking issues with js objs
    const init = (/* can pass args here when abstracting the init to build out res */) => (cloneDeep(userInit)); // clone deep dont set value, deep linking can betray you
    const $reset = () => { profile.value = init(); }; // NOTE: run this rn at a logout

    // NOTE: profile will be referenced in components as profile.value to display
    const profile = ref(LocalStorage.getItem('userprofile') || userInit);
 
    // NOTE: a fn to return profile.value after updating/appending the values, the expected arg is an {} - // TODO: could use some validation/defaulting of the arg being an obj
    const theProfileGetter = (fnRes) => { profile.value = { ...profile.value, ...fnRes }; };

    return {
        profile,
        $reset,
        theProfileGetter,
    };
});
