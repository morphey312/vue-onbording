export default [
    {
        path: '/about',
        name: 'about',
        component: () => import('../../views/AboutView.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/daily-schedule/:day',
        name: 'daily-schedule',
        component: () => import('../../views/DailySchedule.vue'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
]