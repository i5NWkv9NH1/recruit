import router from '.'
import useUserStore from '@/stores/modules/user'

export default function setupRoleGuard() {
  // const userRoutes = ['/task', '/task/:id']
  router.beforeEach((_to, _from, next) => {
    const store = useUserStore()
    if (_to.path === ('/task')) {
      if (store.role !== 'user') {
        return next('/talent')
      }
    }
    if (_to.path.includes('talent')) {
      if (store.role !== 'enterprise') {
        return next('/task')
      }
    }
    next()
  })
}
