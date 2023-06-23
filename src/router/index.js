import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../components/LoginPage.vue"
import About from "../views/AboutView.vue"
import NextPage from "../views/NextPage.vue"
import SummaryPage from "../views/SummaryPage.vue"
import RecruitmentTrain from '../views/RecruitmentTrain.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginPage

  },

  {
    path: '/about',
    name: 'about',
    component: About
  },

  {
    path: '/next',
    name: 'next',
    component: NextPage
  },

  {
    path: '/summary',
    name: 'summaryPage',
    component: SummaryPage
  },

  {
    path: '/RT',
    name: 'recruitTrain',
    component: RecruitmentTrain
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
