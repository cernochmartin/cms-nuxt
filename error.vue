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
    <h2>Ooops...</h2>
    <h3>Error {{ error?.statusCode }}</h3>
    <h3 v-if="error?.statusCode === 404">You won't find anything here...</h3>
    <p>{{ error?.message }}</p>
    <button @click="handleError()">
        Go back home
    </button>
</template>