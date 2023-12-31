import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project-page',
      name: 'project-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projectView.vue')
    },
  
    {
    path: '/projectdetail/:id',
    name: 'projectdetail',
    component: () => import('../views/ProjectDetailView.vue'),
    props: true, // This allows passing the route params as props
    },

    {
      path: '/Services',
      name: 'Services',
      component: () => import('../views/ServicesView.vue'),
      props: true, // This allows passing the route params as props
    },

    {
      path: '/navguard',
      name: 'navguard',
      component: () => import('../views/NavGuardView.vue'),
      meta: {
        requiresAuth: true
      },
      props: true, // This allows passing the route params as props
    },
    
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      
      props: true, // This allows passing the route params as props
    },


  ]
})


router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      user => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

export default router;



