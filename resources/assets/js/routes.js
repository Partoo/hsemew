import Dashboard from './pages/layouts/Dashboard.vue'

export default [
    {
        path: '/home',
        component: Dashboard,
        children: [
            {
                path: '/test',
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

