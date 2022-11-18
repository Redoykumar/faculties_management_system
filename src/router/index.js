import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/Sign_in',
    component: import('../views/MainView.vue'),
    children: [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: import('../components/Dashboard.vue'),
      },
      {
        path: '/Professors',
        name: 'Professors',
        component: import('../components/Professors.vue'),
      },
      {
        path: '/AddProfessors',
        name: 'AddProfessors',
        component: () => import('../components/AddProfessors.vue')
      },
      {
        path: '/ViewProfessors',
        name: 'ViewProfessors',
        component: () => import('../components/ViewProfessors.vue')
      },
      {
        path: '/Students',
        name: 'Students',
        component: import('../components/Students.vue'),
      },
      {
        path: '/Courses',
        name: 'Courses',
        component: import('../components/Courses.vue'),
      },
      {
        path: '/AddCourses',
        name: 'AddCourses',
        component: import('../components/AddCourses.vue'),
      },
      {
        path: '/Subjects',
        name: 'Subjects',
        component: import('../components/Subjects.vue'),
      },
      {
        path: '/SystemLog',
        name: 'SystemLog',
        component: import('../components/Subjects.vue'),
      }
    ]
  },
  {
    path: '/Sign_in',
    name: 'Sign_in',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
