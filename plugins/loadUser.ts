import actions from '~/actions';

export default defineNuxtPlugin(async () => {

    console.log('Plugin carregado')

    try {

        actions.auth.fetchUser();

        navigateTo('dashboard');

    } catch(exception) {

        console.log(exception);

        navigateTo('/');

    }

})