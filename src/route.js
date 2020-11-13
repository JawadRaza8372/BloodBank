import React from 'react';

const SignUp1 = React.lazy(() => import('./Demo/Authentication/SignUp/SignUp1'));
const Signin1 = React.lazy(() => import('./Demo/Authentication/SignIn/SignIn1'));
const ResetPass =React.lazy(() => import('./Demo/Authentication/SignIn/ResetPassword'));
const Emailverf =React.lazy(() => import('./Demo/Authentication/SignIn/Emailverification'));
const Home =React.lazy(() => import('./Home'));
const route = [
    { path: '/signup', exact: true, name: 'Signup 1', component: SignUp1 },
    { path: '/home', exact: true, name: 'Signup 1', component: Home },
    { path: '/signin', exact: true, name: 'Signin 1', component: Signin1 },
    { path: '/resetpassword', exact: true, name: 'Reset Password', component: ResetPass },
    { path: '/verify', exact: true, name: 'Email verification', component: Emailverf }

];

export default route;