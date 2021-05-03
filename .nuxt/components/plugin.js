import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BaseFooter: () => import('../../components/BaseFooter.vue' /* webpackChunkName: "components/base-footer" */).then(c => wrapFunctional(c.default || c)),
  BaseHeader: () => import('../../components/BaseHeader.vue' /* webpackChunkName: "components/base-header" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
