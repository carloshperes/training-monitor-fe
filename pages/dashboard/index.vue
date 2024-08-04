<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
});
</script>

<template>
    <div>
        <!-- <div class="flex flex-wrap justify-between mb-2">
            <InfoCard class="flex w-1/5" :data="{ 
                title: 'Cursos', 
                quantity: 33,
            }">
                <IconOnlineClass :data="{ class: 'h-16 fill-indigo-900' }" />
            </InfoCard>
           
            <InfoCard class="flex w-1/5" :data="{ 
                title: 'Cursos', 
                quantity: 33,
            }">
                <IconOnlineCourse :data="{ class: 'h-16 fill-indigo-900' }" />
            </InfoCard>
        </div> -->
        <div>
            <Table />
        </div>
    </div>
    
</template>