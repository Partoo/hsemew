const Dashboard = () => import('./pages/layouts/Dashboard.vue');

export default [
    {
        path: '/home',
        component: Dashboard,
        children: [
            {
                path: '/',
                name: 'home',
                component: require('./pages/Home.vue'),
            },
            {
                path: 'apps',
                name: 'apps',
                component: require('./pages/app/Apps.vue')
            },
            {
                path: '*',
                redirect: '/home'
            }
        ]
    }
]

