import type { saveScrollTop } from './directive'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    'v-saveScrollTop': typeof saveScrollTop
  }
}

export { }
