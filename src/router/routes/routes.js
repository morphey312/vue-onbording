export default [
    {
        path: '/about',
        name: 'about',
        component: () => import('../../views/AboutView.vue'),
        props: true,
    },
    {
        path: '/counter',
        name: 'counter',
        component: () => import('../../views/Counter.vue'),
    }
]