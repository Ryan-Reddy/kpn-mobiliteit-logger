import {Router} from '@vaadin/router';

import './components/account-info';
import './components/home-page';
import './components/login';
import './components/global/menu-footer';
import './components/global/menu-nav';
import './components/new-account';
import './components/global/not-found';
import './components/readme';
import './components/reset-password';
import './components/support';
import './components/account-info';
import './components/overzicht-reizen';
import './components/invoeren-reizen';

import './components/invoeren-reizen-wijzigen';

const app = document.querySelector('#app');
export const router = new Router(app);

// noinspection JSIgnoredPromiseFromCall
router.setRoutes([
  {
    name: 'login-element', // doet niks impliciet
    path: '/login',
    component: 'login-element',
  },
  {
    name: 'reset-password-element', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password-element',
  },
  {
    name: 'support-element', // doet niks impliciet
    path: '/support',
    component: 'support-element',
  },
  {
    name: 'new-account-element', // doet niks impliciet
    path: '/new-account',
    component: 'new-account-element',
  },
  {
    name: 'readme-element', // doet niks impliciet
    path: '/readme',
    component: 'readme-element',
  },
  {
    name: 'reset-password-element', // doet niks impliciet
    path: '/reset-password',
    component: 'reset-password-element',
  },
  {
    name: 'account-info-element', // doet niks impliciet
    path: '/account-info',
    component: 'account-info-element',
  },
  {
    name: 'home-page-element', // doet niks impliciet
    path: '/home-page',
    component: 'home-page-element',
  },
  {
    name: 'invoeren-reizen-element', // doet niks impliciet
    path: '/invoeren-reizen',
    component: 'invoeren-reizen-element',
  },
  {
    name: 'overzicht-reizen-element', // doet niks impliciet
    path: '/overzicht-reizen',
    component: 'overzicht-reizen-element',
  },
  {
    name: 'invoeren-reizen-wijzigen-element', // doet niks impliciet
    path: '/invoeren-reizen-wijzigen',
    component: 'invoeren-reizen-wijzigen-element',
  },
    {
        name: '404-catchall', // doet niks impliciet
        path: '(.*)',           // 404 must be last in this file
        component: 'not-found',
    },
]);
