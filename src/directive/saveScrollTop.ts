// TODO:
import type { Directive } from 'vue'

interface Properties {
  savedScrollTop: number
}
interface Event extends HTMLElement {
  __scrollHandler: () => void
}
export const saveScrollTop = {
  mounted(el, binding) {
    if (!binding.value) {
      binding.value = { savedScrollTop: 0 }
    }
    el.__scrollHandler = () => {
      binding.value.savedScrollTop = el.scrollTop
    }

    el.addEventListener('scroll', el.__scrollHandler)
  },
  updated(_el, _binding) {
    // if (binding.value.savedScrollTop > 0) {
    //   el.scrollTop = binding.value.savedScrollTop
    // }
  },
  beforeUnmount(el) {
    el.removeEventListener('scroll', el.__scrollHandler)
  },
  unmounted(el) {
    el.removeEventListener('scroll', () => {
    })
  },
} as Directive<Event, Properties>
