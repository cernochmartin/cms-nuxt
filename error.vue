<script setup lang="ts">
defineProps(['error'])
const error = useError()

const handleError = () => {
    clearError({
        redirect: '/'
    })
}
</script>
<template>
    <UContainer>

        <section class="flex flex-col gap-6 h-[100vh] justify-center items-center text-center">

            <div>
                <h2>Ooops...</h2>
                <h3>Error {{ error?.statusCode }}</h3>
            </div>

            <div>
                <h3 v-if="error?.statusCode === 404">You won't find anything here...</h3>
                <p>{{ error?.message }}</p>
            </div>

            <div class="md:w-[540px]">
                <UButton @click="handleError()" block type="submit">
                    Go back home
                </UButton>
            </div>

        </section>

    </UContainer>
</template>