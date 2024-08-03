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
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700">Email</label>
                    <input type="email" id="email" v-model="email" class="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-gray-700">Password</label>
                    <input type="password" id="password" v-model="password" class="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                </div>
                <NuxtLink to="dashboard">
                    <button type="submit" class="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300">
                        Log In
                    </button>
                </NuxtLink>
            </form>
        </div>
    </div>
</template>

<script>
definePageMeta({
    layout: 'guest'
});

export default {
    data() {
        return {
        email: '',
        password: ''
        };
    },
    methods: {
        login() {
        // lógica de login aqui
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        }
    }
};
</script>

<style scoped>
</style>