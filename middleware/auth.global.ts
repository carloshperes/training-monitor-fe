const authenticated = false;
const guestRoutes   = ['/', '/register'];

export default defineNuxtRouteMiddleware((to, from) => {
    
    // if(guestRoutes.includes(to.path) && authenticated){
    //     return navigateTo('dashboard');
    // }

    // if(!guestRoutes.includes(to.path) && !authenticated){
    //     return navigateTo('/');
    // }
})