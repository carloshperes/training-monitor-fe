<script setup>
import actions from '~/actions';

const isDropdownCoursesOpen = ref(false)

const toggleDropdownCourses = () => {
    isDropdownCoursesOpen.value = !isDropdownCoursesOpen.value
}

console.log(useCourseStore());

const options = [];

const selectedOptions = ref([]);

const toggleOption = (option) => {
  if (selectedOptions.value.includes(option)) {
    selectedOptions.value = selectedOptions.value.filter((o) => o !== option);
  } else {
    selectedOptions.value.push(option);
  }
};

const selectAll = (event) => {
  if (event.target.checked) {
    selectedOptions.value = [...options];
  } else {
    selectedOptions.value = [];
  }
};

const allSelected = ref(false);
watch(selectedOptions, () => {
    allSelected.value = selectedOptions.value.length === options.length;
});



const employees = ref([]);
const page      = ref(1);
const perPage   = ref(10);
const loading   = ref(false);
const hasMore   = ref(true);

const store     = useCourseEmployeeStore();

const loadCoursesEmployees = async () => {
    if (loading.value || !hasMore.value) return;

        loading.value = true;
    try {
        await actions.courseEmployee.fetch(page.value);

        employees.value.push(...store.courses.data);
        hasMore.value = store.courses.data.length === perPage.value;
        page.value++;

    } catch (error) {
        console.error("Erro ao carregar os funcionários:", error);
    } finally {
        loading.value = false;
    }

};

const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && hasMore.value) {
        loadCoursesEmployees();
    }
};

onMounted(async () => {
    await actions.course.fetch();
    loadCoursesEmployees();
    window.addEventListener('scroll', onScroll);
});

const courses   = computed(() => actions.course.fetch());
</script>

<template>

<div class="relative shadow-md sm:rounded-lg">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div class="w-screen">
            <div @click="toggleDropdownCourses" class="relative w-full h-12 border p-2 rounded cursor-pointer">
                <div class="px-2">
                    <span class="float-left" v-if="!selectedOptions.length">Cursos</span>
                    <svg class="w-4 mt-1 float-right" :class="{ selectedOptions, 'mt-2': true }" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <div v-if="selectedOptions.length" class="flex flex-wrap">
                    <span v-for="option in selectedOptions" :key="option" class="bg-gray-100 px-2 py-1 rounded mr-1">
                        Selecione
                    </span>
                </div>
            </div>

            <div v-if="isDropdownCoursesOpen" class="absolute z-10 mt-2 w-full bg-white border rounded shadow-lg">
            <div class="p-3">
                <label>
                    <input type="checkbox" @change="selectAll" :checked="allSelected" /> Todos
                </label>
            </div>
            <div class="px-3 pb-3 max-h-40 overflow-y-auto space-y-2">
                <div v-for="option in options" :key="option" class="flex items-center hover:bg-gray-200">
                    <input
                        type="checkbox"
                        :value="option"
                        @change="toggleOption(option)"
                        :checked="selectedOptions.includes(option)"
                    />
                    <span class="ml-2">{{ option }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-violet-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th class="px-6 py-3">
                    Nome
                </th>
                <th class="px-6 py-3">
                    Curso
                </th>
                <th class="px-6 py-3">
                    Progresso
                </th>
                <th class="px-6 py-3">
                    Nota
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="course in employees" :key="course.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" :src="course.employees.avatar" alt="Carlos Peres">
                    <div class="ps-3">
                        <div class="text-base font-semibold">{{ course.employees.name }}</div>
                        <div class="font-normal text-gray-500">{{ course.employees.position }}</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    {{ course.courses.name }}
                </td>
                <td class="px-6 py-4">
                    <div>
                        <div :class="'inline-block mb-2 ms-[calc(50%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500'">
                            {{  course.progress + '%'  }}
                        </div>
                        <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700">
                            <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" :style="'width: ' + course.progress + '%'"></div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <h3 class="ftext-base font-semibold text-lg text-gray-600">{{ course.score }} / 10</h3>
                </td>
            </tr>
            <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Jese Leos</div>
                        <div class="font-normal text-gray-500">jese@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    Vue JS Developer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Thomas Lean</div>
                        <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    UI/UX Engineer
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Jese image">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Leslie Livingston</div>
                        <div class="font-normal text-gray-500">leslie@flowbite.com</div>
                    </div>
                </th>
                <td class="px-6 py-4">
                    SEO Specialist
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                    </div>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                </td>
            </tr> -->
        </tbody>
    </table>
    </div>
</div>

</template>
