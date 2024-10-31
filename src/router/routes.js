const recentVisitor = (to, from) => {
    // if you haven't been here in a few days, we can show something cool.
    // will add to this and store stuff in local storage later
    console.log('from:', from);
    console.log('to:', to);
};

const routes = [
    {
        path: '/',
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: '',
                component: () => import("pages/IndexPage.vue"),
            },
            {
                path: 'appetizers',
                beforeEnter: [ recentVisitor ],
                component: () => import("pages/Appetizers.vue"),
            },
            {
                path: 'new-recipe',
                beforeEnter: [],
                component: () => import("pages/NewRecipe.vue"),
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
