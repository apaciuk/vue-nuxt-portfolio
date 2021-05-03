import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _471e6725 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _08c3f390 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _2ea78c6b = () => interopDefault(import('../pages/News.vue' /* webpackChunkName: "pages/News" */))
const _45191476 = () => interopDefault(import('../pages/Services.vue' /* webpackChunkName: "pages/Services" */))
const _2137bbec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _471e6725,
    name: "About"
  }, {
    path: "/Contact",
    component: _08c3f390,
    name: "Contact"
  }, {
    path: "/News",
    component: _2ea78c6b,
    name: "News"
  }, {
    path: "/Services",
    component: _45191476,
    name: "Services"
  }, {
    path: "/",
    component: _2137bbec,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
