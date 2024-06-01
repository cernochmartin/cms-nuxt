<script setup lang="ts">
interface DataType {
    title: string
    slug: string
    perex: string
    sections: Array<{ subtitle: string, text: string }>
}

const client = useSupabaseClient()

const slug = useRoute().path.split('/').pop() || ''

const { data } = await client.from('test').select().eq('slug', slug)

const fetchedItems = data as DataType[]

useSeoMeta({
    title: 'Nuxt CMS | ' + fetchedItems[0].title,
    description: fetchedItems[0].perex
})
</script>

<template>
    {{ fetchedItems }}
    <section v-for="item in fetchedItems" class="my-24">
        <div class="flex flex-col gap-6">
            <h2 class="text-center">{{ item.title }}</h2>
            <p>{{ item.perex }}</p>
        </div>
        <div v-for="section in item.sections" class="mt-12 flex flex-col gap-6">
            <h3 class="text-center">{{ section.subtitle }}</h3>
            <p>{{ section.text }}</p>
        </div>
    </section>
</template>