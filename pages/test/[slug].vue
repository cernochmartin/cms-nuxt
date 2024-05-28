<script setup lang="ts">
const client = useSupabaseClient()

const path = useRoute().path.split('/').pop()

const { data } = await client.from('docs').select().eq('slug', path)
</script>

<template>
    <div v-for="item in data">
        <h1>{{ item.title }}</h1>
    </div>
</template>