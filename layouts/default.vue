<script setup>
import actions from '~/actions';

const navbarOpen = ref(false)
const dropdownOpen = ref(false)

const toggleNavbar = () => {
    navbarOpen.value = !navbarOpen.value
}

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value
}

const logout = () => {
    actions.auth.logout();
}

const user = useAuthStore().user[0];
</script>

<template>
    <div>
        <Head>
            <Title>Training Monitor</Title>
        </Head>
        <nav class="bg-purple-700 text-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen flex items-center p-4">
                <div class="flex grow items-center">
                    <svg class="w-10 fill-white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="Health_Icons" data-name="Health Icons"> <g> <path d="M43,4H5A2.9,2.9,0,0,0,2,7V35a2.9,2.9,0,0,0,3,3H43a2.9,2.9,0,0,0,3-3V7A2.9,2.9,0,0,0,43,4ZM42,34H6V22.9H8.6a2,2,0,0,0,1.8-1.2l.5-.9,2.9,6.1A1.9,1.9,0,0,0,15.6,28a2.1,2.1,0,0,0,1.8-1.1l4.8-10.2,2.4,5a2.2,2.2,0,0,0,1.8,1.2H30a2,2,0,0,0,0-4H27.7L24,11.1a2,2,0,0,0-3.6,0L15.6,21.3l-2.9-6.1a2.1,2.1,0,0,0-1.8-1.1,1.9,1.9,0,0,0-1.8,1.1L7.3,18.9H6V8H42Z"></path> <path d="M28,28H24a2,2,0,0,0,0,4h4a2,2,0,0,0,0-4Z"></path> <path d="M34,32h4a2,2,0,0,0,0-4H34a2,2,0,0,0,0,4Z"></path> <path d="M37,40H11a2,2,0,0,0,0,4H37a2,2,0,0,0,0-4Z"></path> </g> </g> </g> </g></svg>
                    <span class="ml-4 text-xl font-bold">Training Monitor</span>
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
                            <span class="block text-sm text-gray-900 dark:text-white">{{ user.name }}</span>
                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ user.email }}</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li @click="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">
                                Sair
                            </li>
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

<style scoped>
</style>