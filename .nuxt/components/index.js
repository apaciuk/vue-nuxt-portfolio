import { wrapFunctional } from './utils'

export { default as BaseFooter } from '../../components/BaseFooter.vue'
export { default as BaseHeader } from '../../components/BaseHeader.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyBaseFooter = import('../../components/BaseFooter.vue' /* webpackChunkName: "components/base-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyBaseHeader = import('../../components/BaseHeader.vue' /* webpackChunkName: "components/base-header" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
