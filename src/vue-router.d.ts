declare module 'vue-router' {
  interface RouteMeta {
    /** page title */
    title?: string
    /** i18n key */
    i18n?: string
    /** keepalive */
    keepAlive?: boolean
    /** custon navbar */
    customNavbar?: boolean
    /** level */
    level?: number
  }
  interface _RouteRecordBase {
    params?: object & {
      id: string | number
    }
    query?: object
  }
}

export {}
