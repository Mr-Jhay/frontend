import { createRouter, createWebHistory } from "vue-router";
import loginForm from './pages/login.vue';
import RegistrationForm from './pages/register.vue';

const routes=[
    {path:'/', component: loginForm},
    {path:'/RegistrationForm', component: RegistrationForm},
];
const router = createRouter({
    history:createWebHistory(),                                          
    routes,
});
export default router;
   