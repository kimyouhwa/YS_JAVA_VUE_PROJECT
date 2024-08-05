import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '../views/BasicView.vue'
import DeepView from '../views/DeepView.vue'
import DeepView2 from '../views/DeepView2.vue'
import DeepView3 from '../views/DeepView3.vue'
import CalculatorView1 from '../views/CalculatorView1.vue'
import CalculatorView2 from '../views/CalculatorView2.vue'
import CalculatorView3 from '../views/CalculatorView3.vue'
import CalculatorView4 from '../views/CalculatorView4.vue'
 
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/deep',
    name: 'deep',
    component: DeepView
  },
  {
    path: '/deep2',
    name: 'deep2',
    component: DeepView2
  },
  {
    path: '/deep3',
    name: 'deep3',
    component: DeepView3
  },
  {
    path: '/calculator1',
    name: 'calculator1',
    component: CalculatorView1
  },
  {
    path: '/calculator2',
    name: 'calculator2',
    component: CalculatorView2
  },
  {
    path: '/calculator3',
    name: 'calculator3',
    component: CalculatorView3
  },
  {
    path: '/calculator4',
    name: 'calculator4',
    component: CalculatorView4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router