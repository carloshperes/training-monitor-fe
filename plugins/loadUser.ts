export default defineNuxtPlugin(async (nuxtApp) => {
    
    const store = useAuthStore();

    try {

        await store.fetchUser();

        navigateTo('dashboard');

    } catch(exception) {

        console.log(exception);

        navigateTo('/');

    }

})