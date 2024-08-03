<template>
    <div>
        <nav class="bg-purple-700 text-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen flex items-center p-4">
                <div class="flex grow items-center">
                    <img src="https://randompicturegenerator.com/img/dog-generator/g4919b178b996e333e3118deaa5f7d20b662cb886a3227cf4c82bbe72676df21b1aa0e696c97d5b370023af456563c3f6_640.jpg" alt="Logo" class="w-10 h-10 rounded-full">
                    <span class="ml-4 text-xl font-bold">Traning Watch</span>
                </div>
                <div class="flex gap-6 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    
                    <ul class="flex-col hidden md:block p-4 md:p-0 border-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 rounded hover:font-medium md:bg-transparent md:text-white md:p-0 md:dark:text-white">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                    <button @click="toggleNavbar" type="button" class="flex text-sm bg-gray-800 shrink-0 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <img class="w-8 h-8 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com" alt="user photo">
                    </button>
                    <!-- Dropdown menu -->
                    <div 
                        v-if="navbarOpen" 
                        class="absolute top-12 right-1 z-50 my-4 w-[200px] text-base lg-hidden list-none bg-white divide-y divide-gray-100 rounded-sm shadow dark:bg-gray-700 dark:divide-gray-600">
                        <div class="px-4 py-3">
                            <span class="block text-sm text-gray-900 dark:text-white">Carlos Peres</span>
                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">carlos@carlos.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <NuxtLink to="/">
                                <li class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Sair
                                </li>
                            </NuxtLink>
                        </ul>
                    </div>
                    <button 
                        @click="toggleDropdown"
                        type="button" 
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-purple-800 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        
        <main class="p-4">
            <slot />
        </main>
    </div>
</template>

<script setup>
const navbarOpen = ref(false)
const dropdownOpen = ref(false)

const toggleNavbar = () => {
  navbarOpen.value = !navbarOpen.value
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}
</script>

<style scoped>
</style>