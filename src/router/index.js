import Vue from 'vue'
import Router from 'vue-router'
import CSS from '../components/CSS'
import HelloWorld from '../components/HelloWorld'
import DZWH from '../components/DZWH'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    //首页
    path: '/',
    name: 'CSS',
    component: CSS,
    children: [{
      //会员列表
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      //会员等级
      path: '/dzwh',
      name: 'DZWH',
      component: DZWH
    }
    ]
  }
  ]
})
