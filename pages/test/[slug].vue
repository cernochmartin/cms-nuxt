<script setup lang="ts">
interface DataType {
    title: string
    slug: string
}

const client = useSupabaseClient()

const slug = useRoute().path.split('/').pop() || ''

const { data } = await client.from('docs').select().eq('slug', slug)

const fetchedItems = data as DataType[]
</script>

<template>
    <div v-for="item in fetchedItems">
        <h1>{{ item.title }}</h1>
    </div>
</template>