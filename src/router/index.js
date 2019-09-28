import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/pages/MainPage'
import FondsInfo from '../components/pages/FondsInfo'
import Profile from '../components/pages/Profile'
import News from '../components/pages/News'
import Messages from '../components/pages/Messages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/fond/:name',
      name: 'FondsInfo',
      component: FondsInfo
    },
    {
      path: '/user',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    }

  ]
})
