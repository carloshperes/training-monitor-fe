import actions from '~/actions';

export default defineNuxtPlugin(async () => {

    try {

        actions.auth.fetchUser();

        navigateTo('dashboard');

    } catch(exception) {

        console.log(exception);

        navigateTo('/');

    }

})