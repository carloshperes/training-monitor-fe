import type { User } from "~/types/user";

export async function fetchUser() {

    const user = await useGet('api/user');

    useAuthStore().setUser(user.data.value as User);

}