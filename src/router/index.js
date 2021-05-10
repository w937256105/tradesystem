import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const hszsIndex = () => import('@/views/hszs/body/hszsIndex')
const zsDetail = () => import('@/views/zsDetail/zsDetailIndex')
const zsChart = () => import('@/views/zsChart/zsChartIndex')
const dayLine = () => import('@/views/chart/big/day')

const routes = [
  {
    path: '/hszs',
    component: hszsIndex,
  },
  {
    path: '/detail',
    name: 'detail',
    component: zsDetail,
  },
  {
    path: '/zsChart',
    component: zsChart,
    children: [
      {
        path: 'day',
        component: dayLine
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router