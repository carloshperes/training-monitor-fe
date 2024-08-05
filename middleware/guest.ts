export default defineNuxtRouteMiddleware(() => {
    
    const auth = useAuthStore();

    if(auth.isLoggedIn){
        navigateTo('dashboard');
    }
})