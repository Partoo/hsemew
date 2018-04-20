import Dashboard from './pages/layouts/Dashboard.vue'

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
                path: '*',
                redirect: '/home'
            }
        ]
    }
]

