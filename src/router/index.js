import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './router'

Vue.use(Router)

const RouterConfig = {
  routes: routers
}

export default new Router(RouterConfig)
