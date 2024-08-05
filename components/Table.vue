<script setup>
import actions from '~/actions';

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
        hasMore.value = store.courseEmployee.data.length === perPage.value;
        page.value++;

    } catch (error) {
        throw createError({
            statusCode: 503,
            statusMessage: 'Erro ao tentar carregar dados'
        })
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
    loadCoursesEmployees();
    window.addEventListener('scroll', onScroll);
});

const rand = () => {
  return Math.floor(Math.random() * 2);
}

const status = {
    '0': {
        'name': 'Estudando',
        'class':'bg-green-500'
    },
    '1': {
        'name': 'Desconectado',
        'class':'bg-red-500'
    },
};

const scoreStyle = (score) => {
    if(score <= 3){ return 'text-red-500' }
    if(score >=4 && score <= 6){ return 'text-blue-500' }
    if(score >= 7){ return 'text-green-500' }
}
</script>

<template>

<div class="relative shadow-md sm:rounded-lg">
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
                            <div class="text-base font-semibold">
                                <div class="flex items-center gap-1">
                                    {{ course.employees.name }} <div :class="'h-2.5 w-2.5 rounded-full ' + status[rand()].class + ' me-2'"></div>
                                </div>
                            </div>
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
                        <h3 :class="'ftext-base font-semibold text-lg ' + scoreStyle(course.score) ">{{ course.score }} / 10</h3>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>
