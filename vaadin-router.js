import { Router } from '@vaadin/router';

import './components/login';
// import './components/register-team';
// etc...

const app = document.querySelector('#app');
export const router = new Router(app);

// noinspection JSIgnoredPromiseFromCall
router.setRoutes([
  {
    name: 'double-rainbow-404', // doet niks impliciet tenzij je het gebruikt
    path: '/404',
    component: '404.html',
  },

  {
    name: 'login-element', // doet niks impliciet tenzij je het gebruikt
    path: '/login',
    component: 'login-element',
  },
  {
    name: 'login-element', // doet niks impliciet tenzij je het gebruikt
    path: '/login',
    component: 'login-element',
  },
  {
    name: 'login-element', // doet niks impliciet tenzij je het gebruikt
    path: '/login',
    component: 'login-element',
  },
  {
    name: 'login-element', // doet niks impliciet tenzij je het gebruikt
    path: '/login',
    component: 'login-element',
  },
  // {
  //   name: 'register',
  //   path: '/register',
  //   component: 'register-form',
  // },
  // etc...
  {
    name: '404-catchall', // doet niks impliciet tenzij je het gebruikt
    path: '(.*)',           // 404 must be last in this file
    component: 'not-found',
  },
]);
