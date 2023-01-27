import {Router} from '@vaadin/router';

import './view/components/account-info';
import './view/components/home-page';
import './view/components/login';
import './view/components/global/menu-footer';
import './view/components/global/menu-nav';
import './view/components/global/thermometer';
import './view/components/new-account';
import './view/components/global/not-found';
import './view/components/readme';
import './view/components/reset-password';
import './view/components/support';
import './view/components/overzicht-reizen';
import './view/components/invoeren-reizen';
import './view/components/dashboard/dashboard';
import './view/components/dashboard/chart';

import './view/components/invoeren-reizen-crud';

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
        name: 'invoeren-reizen-crud', // doet niks impliciet
        path: '/invoeren-reizen',
        component: 'invoeren-reizen-crud',
    },
    {
        name: 'overzicht-reizen-element', // doet niks impliciet
        path: '/overzicht-reizen',
        component: 'overzicht-reizen-element',
    },
    {
        name: 'invoeren-reizen-crud', // doet niks impliciet
        path: '/invoeren-reizen-crud',
        component: 'invoeren-reizen-crud',
    },
    {
        name: 'thermometer-element', // doet niks impliciet
        path: '/thermometer',                  // standaard landingspage
        component: 'thermometer-element',
    },
    {
        name: 'login-element', // doet niks impliciet
        path: '/',                  // standaard landingspage
        component: 'login-element',
    },
    {
        name: 'chart-element', // doet niks impliciet
        path: '/chart',                  // standaard landingspage
        component: 'chart-element',
    },
    {
        name: 'dashboard-element', // doet niks impliciet
        path: '/dashboard',                  // standaard landingspage
        component: 'dashboard-element',
    },
    {
        name: '404-catchall', // doet niks impliciet
        path: '(.*)',           // 404 must be last in this file
        component: 'not-found',
    },
]);
