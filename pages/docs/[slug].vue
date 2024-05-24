<script setup lang="ts">
const client = useSupabaseClient()

const path = useRoute().path.split('/').pop()

const { data } = await client.from('docs').select().eq('test-222', path)
</script>

<template>
    <UContainer>
        <h1>{{ data }}</h1>
    </UContainer>
</template>