import Vue from "vue";
import VueRouter  from 'vue-router'
import LoginPage from "../components/LoginPage.vue"
import About from "../views/AboutView.vue"
import NextPage from "../views/NextPage.vue"
import SummaryPage from "../views/SummaryPage.vue"
import RecruitmentTrain from '../views/RecruitmentTrain.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
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

const router = new VueRouter({
  // history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

export default router
