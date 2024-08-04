<script setup>
definePageMeta({
    layout:     'guest',
    middleware: ['guest']
});

const form = ref({
    email:      "test@example.com",
    password:   'password'
});

const authStore = useAuthStore();

const handleLogin = async () => {
    
    await authStore.login(form.value);

    navigateTo('/');

}

</script>

<template>
    <div class="flex w-full h-600 max-w-5xl bg-white shadow-md overflow-hidden">
        <!-- Lateral esquerda com a imagem de fundo e o texto -->
        <div class="w-1/2 bg-cover bg-center relative" style="background-image: url('https://www.agoraos.com.br/blog/wp-content/uploads/2023/10/inicial-destaque4.jpg');">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <!-- <div class="relative z-10 flex items-center justify-center h-full text-white text-4xl font-bold">
            Olá
            </div> -->
        </div>
        
        <!-- Formulário de login -->
        <div class="w-1/2 p-8">
            <h2 class="text-2xl font-bold text-center mb-8">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label class="block text-gray-700">Email</label>
                    <input type="text" v-model="form.email" class="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700">Password</label>
                    <input type="password" v-model="form.password" class="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
                </div>
                <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                    Logar
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
</style>