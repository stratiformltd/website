// @flow

export default {
  '/': () => import('./pages'),
  '/management': () => import('./pages/management'),
  '/architecture': () => import('./pages/architecture'),
  '/about': () => import('./pages/about'),
  '/contact': () => import('./pages/contact')
}
