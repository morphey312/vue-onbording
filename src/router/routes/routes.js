export default [
    {
        path: '/about/:id',
        name: 'about',
        component: () => import('../../views/AboutView.vue'),
        props: true,
    }
]