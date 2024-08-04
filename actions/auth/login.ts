import type { LoginForm } from "~/types/loginForm";
import actions from "..";

export async function login(form: LoginForm){
    
    await usePost('login', { body: form });
    
    await actions.auth.fetchUser();

    navigateTo('dashboard');

}
