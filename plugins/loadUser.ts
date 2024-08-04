export default defineNuxtPlugin(async (nuxtApp) => {
    
    const store = useAuthStore();

    try {

        await store.fetchUser();

    } catch(exception) {

        console.log(exception);

        navigateTo('/');

    }

})