const router = new VueRouter({
    routes: [
        { path: '/', component: httpVueLoader('./index.vue')},
        { path: '/list', 
        　component: httpVueLoader('./next.vue'),
          meta: {requireAuth: true},
    }
          
    ]
});

const app = new Vue({
    el: '#app',
    router
});
