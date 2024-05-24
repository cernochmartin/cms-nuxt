<script setup lang="ts">
const client = useSupabaseClient()

const { data } = await client.from('docs').select()

const links: any[] = []

data?.forEach((doc: any) => {
    links.push({
        label: doc.title,
        to: `/docs/${doc.slug}`,
    })
})
</script>

<template>
    <UVerticalNavigation :links="links" />
</template>