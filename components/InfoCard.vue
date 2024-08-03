<script setup>
const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="items-center">
        <div class="border-2 rounded-sm bg-white p-6 w-full">
            <div class="flex justify-between">
            <div>
                <slot />
            </div>
            <div>
                <h2 class="text-5xl font-bold pt-2"><span>{{ data.quantity }}</span></h2>
            </div>
            </div>

            <div>
                <p class="mt-2 text-xl text-gray-500">{{ data.title }}</p>
            </div>
        </div>
    </div>
</template>