export default defineNuxtRouteMiddleware(() => {

    console.log('Middleware guest carregado')
    
    const auth = useAuthStore();

    console.log('Is logged: '+ auth.isLoggedIn);

    if(auth.isLoggedIn){
        navigateTo('dashboard');
    }
})