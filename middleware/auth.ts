export default defineNuxtRouteMiddleware(() => {

    console.log('Middleware auth carregado');
    
    const auth          = useAuthStore();

    console.log('Is logged: '+ auth.isLoggedIn);

    if(!auth.isLoggedIn){
        navigateTo('/');
    }
})