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
    },
    {
        path: '/daily-schedule/:day',
        name: 'daily-schedule',
        component: () => import('../../views/DailySchedule.vue'),
        props: true,
    },
]