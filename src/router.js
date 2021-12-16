import Vue from 'vue'
import VueRouter from 'vue-router'
function importComponent(path) {
    return () => import(`./components/${path}.vue`)
}
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes: [

        {
            path: '/register',
            name: 'Register',
            meta: { title: 'Register' },
            component: importComponent ('Register'),
        },

          //login
        {
            path: '/',
            name: 'Login',
            meta: { title: 'Login' },
            component: importComponent('Login'),
        },
        

        {
            path: '/',
            component: importComponent('DashboardLayout'),
            children: [
                //Dashboard
                {
                    path: '/user',
                    name: 'User',
                    meta: {title : 'User'},
                    component: importComponent('DataMaster/User'),
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    meta: {title : 'Dashboard'},
                    component: importComponent('Dashboard'),
                },
                {
                    path:'/makanan',
                    name: 'Makanan',
                    meta:{title: 'Makanan'},
                    component: importComponent('DataMaster/Makanan'),
                },
                {
                    path:'/minuman',
                    name: 'Minuman',
                    meta:{title: 'Minuman'},
                    component: importComponent('DataMaster/Minuman'),
                },
                {
                    path:'/meja',
                    name: 'Meja',
                    meta:{title: 'Meja'},
                    component: importComponent('DataMaster/Meja'),
                },
            ],
        },
        
        {
            path: '*',
            redirect: '/'
        },
    ],
});

//Set Judul
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;